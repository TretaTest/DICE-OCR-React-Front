import { put, takeLatest, call, fork, select } from "redux-saga/effects";
import toast from "react-hot-toast";
import { ActionTypes } from "./reudx/queueAction";
import { ActionTypes as WorkSpaceActionType } from "../redux/workSpaceAction";
import {
  getApiRequest,
  patchApiRequest,
  postApiRequest,
} from "../../../../features/axiosClient";
import {
  createQueueApi,
  deleteQueueApi,
  editQueueFieldJSONApi,
  getActiveQueueDocumentListAPI,
  getQueueApi,
  getQueueOnlyApi,
  getQueueTypesApi,
  getRegionApi,
  putQueueApi,
  uploadInvoiceDocAPI,
} from "../../../../constants/ApiUrlConstant";

// const queueApi = async (action) => {
//     try {
//       const data = await postApiRequest("/api/Queue", action);
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   };

function* addQueueApi(action) {
  const { data, onSuccess, onErrors } = action.payload;

  try {
    const response = yield call(postApiRequest, {
      url: createQueueApi,
      data: data,
    });
    const workSpaceList = yield select(workSpace);
    const getObject = workSpaceList.find(
      (item) => item.wsId === response.data.content.wsId
    );
    if (getObject) {
      if (!Array.isArray(getObject.queueList)) {
        getObject.queueList = [];
      }
      getObject.queueList.push(response.data.content);
    }
    if (response?.status === 200) {
      toast.success("Category created successfully.");
      yield put({
        type: WorkSpaceActionType.GET_WORKSPACE_SUCCESS,
        payload: workSpaceList,
      });
      if (onSuccess) {
        onSuccess(response);
        const workSpaceId = response.data.content.wsId || "";

        yield put({
          type: ActionTypes.QUEUE_SUCCESS,
          payload: response.data.content,
        });
      }
    } else {
      toast.error(response?.data?.message);
      onErrors(response?.data?.message);
      yield put({
        type: ActionTypes.QUEUE_FAILURE,
        payload: response.data.content,
      });
    }
  } catch (error) {
    onErrors(error.response.data);
    toast.error(error.response?.data?.message);

    yield put({ type: ActionTypes.QUEUE_FAILURE, payload: error });
  }
}
const workSpace = (state) => state.workSpace.workspaces;

function* getQueueByWorkSpaceApi(action, getState) {
  const { data, onSuccess, onErrors } = action.payload;
  try {
    const response = yield call(postApiRequest, {
      url: `${getQueueApi}`,
      data: data,
    });
    if (response?.status === 200) {
      const workSpaceList = yield select(workSpace);
      const getObject = workSpaceList.find((item) => item.wsId === data.wsId);
      if (getObject) {
        if (!Array.isArray(getObject.queueList)) {
          getObject.queueList = [];
        }
        getObject.queueList = response.data.content;
        getObject.queueCount=response.data.content.length

        // Add the entire array from API response to the queueList
        //targetWorkspace.queueList = targetWorkspace.queueList.concat(apiResponse);

        // Alternatively, you could use the spread operator:
        // targetWorkspace.queueList = [...targetWorkspace.queueList, ...apiResponse];
      }

      if (onSuccess) {
        onSuccess(response);
        yield put({
          type: WorkSpaceActionType.GET_WORKSPACE_SUCCESS,
          payload: workSpaceList,
        });
        yield put({
          type: ActionTypes.GET_QUEUE_SUCCESS,
          payload: response.data.content,
        });
      }
    } else {
      toast.error(response?.data?.message);
      onErrors(response?.data?.message);
      yield put({ type: ActionTypes.GET_QUEUE_FAILURE, payload: response });
    }
  } catch (error) {
    onErrors(error.response.data);
    toast.error(error.response.data.message);
    yield put({ type: ActionTypes.GET_WORKSPACE_FAILURE, payload: error });
  }
}
function* getQueueByWorkSpaceIdApi(action, getState) {
  const { data, onSuccess, onErrors } = action.payload;
  try {
    const response = yield call(getApiRequest, {
      url: `${getQueueOnlyApi}/${data.queueId}/Workspace/${data.wsId}`,
      data: data,
    });
    if (response?.status === 200) {
      if (onSuccess) {
        onSuccess(response);
        yield put({
          type: ActionTypes.GET_QUEUE_ONLY_SUCCESS,
          payload: JSON.parse(response.data.content.queueFieldsJson),
        });
      }
    } else {
      toast.error(response?.data?.message);
      onErrors(response?.data?.message);
      yield put({ type: ActionTypes.GET_QUEUE_ONLY_FAILURE, payload: response });
    }
  } catch (error) {
    onErrors(error.response.data);
    toast.error(error.response.data.message);
    yield put({ type: ActionTypes.GET_QUEUE_ONLY_FAILURE, payload: error });
  }
}
function* getQueueTypeApi(action) {
  const { data, onSuccess, onErrors } = action.payload;
  try {
    const response = yield call(getApiRequest, {
      url: `${getQueueTypesApi}`,
      data: data,
    });
    if (response?.status === 200) {
      if (onSuccess) {
        onSuccess(response);
        yield put({
          type: ActionTypes.GET_QUEUE_TYPE_SUCCESS,
          payload: response.data.content,
        });
      }
    } else {
      toast.error(response?.data?.message);
      onErrors(response?.data?.message);
      yield put({
        type: ActionTypes.GET_QUEUE_TYPE_FAILURE,
        payload: response,
      });
    }
  } catch (error) {
    onErrors(error.response.data);
    toast.error(error.response.data.message);
    yield put({ type: ActionTypes.GET_QUEUE_TYPE_FAILURE, payload: error });
  }
}

function* getRegionDataApi(action) {
  const { data, onSuccess, onErrors } = action.payload;
  try {
    const response = yield call(getApiRequest, {
      url: `${getRegionApi}`,
      data: data,
    });
    if (response?.status === 200) {
      if (onSuccess) {
        onSuccess(response);
        yield put({
          type: ActionTypes.GET_REGION_SUCCESS,
          payload: response.data.content,
        });
      }
    } else {
      toast.error(response?.data?.message);
      onErrors(response?.data?.message);
      yield put({
        type: ActionTypes.GET_REGION_FAILURE,
        payload: response,
      });
    }
  } catch (error) {
    onErrors(error.response.data);
    toast.error(error.response.data.message);
    yield put({ type: ActionTypes.GET_REGION_FAILURE, payload: error });
  }
}
function* editQueueByWorkSpaceApi(action) {
  const { data, onSuccess, onErrors } = action.payload;

  try {
    const response = yield call(patchApiRequest, {
      url: `${putQueueApi}/${data?.queueId}`,
      data: data,
    });
    // const workSpaceList = yield select(workSpace);
    // const getWorkSpace = workSpaceList.find((item) => item.wsId === data.wsId);
    // const queueObject=getWorkSpace?.queueList.find((item)=>item.queueId ===data.queueId)
    // if(queueObject){
    //   queueObject.queueName = data.queueName;
    // }
    if (response?.status === 200) {
      toast.success("Category updated successfully.");

      if (onSuccess) {
        onSuccess(response);
        // yield put({
        //   type: WorkSpaceActionType.GET_WORKSPACE_SUCCESS,
        //   payload: workSpaceList,
        // });
        yield put({
          type: ActionTypes.UPDATE_QUEUE_SUCCESS,
          payload: response,
        });
      }
    } else {
      toast.error(response?.data?.message);
      onErrors(response?.data?.message);
      yield put({ type: ActionTypes.UPDATE_QUEUE_FAILURE, payload: response });
    }
  } catch (error) {
    onErrors(error.response.data);
    toast.error(error.response.data.message);
    yield put({ type: ActionTypes.UPDATE_QUEUE_FAILURE, payload: error });
  }
}

function* deleteQueuesApi(action) {
  const { data, onSuccess, onErrors } = action.payload;

  try {
    const response = yield call(postApiRequest, {
      url: `${deleteQueueApi}`,
      data: data,
    });
    const workSpaceList = yield select(workSpace);
    const getObject = workSpaceList?.find(
      (item) => item.wsId === data.workspaceid
    );
    const getQueueList = getObject.queueList || [];
    const index = getQueueList.findIndex((item) => item.queueId === data.id);
    const count=getObject.queueCount
    if (index > -1) {
      getQueueList.splice(index, 1);
      if(getObject.queueCount > 0){
       
        getObject.queueCount=count - 1
      }
      getObject.queueList = getQueueList;
    }
    if (response?.status === 200) {

      if (onSuccess) {
        onSuccess(response);
        yield put({
          type: WorkSpaceActionType.GET_WORKSPACE_SUCCESS,
          payload: workSpaceList,
        });
        yield put({ type: ActionTypes.DELETE_QUEUE_SUCCESS, data: response });
      }
    } else {
      toast.error(response?.data?.message);
      onErrors(response?.data?.message);
      yield put({
        type: ActionTypes.DELETE_QUEUE_FAILURE,
        data: response.data,
      });
    }
  } catch (error) {
    onErrors(error.response.data);
    toast.error(error.response.data.message);
    yield put({
      type: ActionTypes.DELETE_QUEUE_FAILURE,
      data: error.response.data,
    });
  }
}
function* editFieldJSONApi(action) {
  const { data, onSuccess, onErrors,queueId } = action.payload;

  try {
    const response = yield call(patchApiRequest, {
      url: `${editQueueFieldJSONApi}?id=${queueId}`,
      data: data,
    });
    
    if (response?.status === 200) {
      // toast.success("Category field json updated successfully.");

      if (onSuccess) {
        onSuccess(response);
        
        yield put({
          type: ActionTypes.GET_FIELD_JSON_CHANGED_REQUEST_SUCCESS,
          payload: response.data.content,
        });
      }
    } else {
      toast.error(response?.data?.message);
      onErrors(response?.data?.message);
      yield put({ type: ActionTypes.GET_FIELD_JSON_CHANGED_REQUEST_FAILURE, payload: response });
    }
  } catch (error) {
    onErrors(error.response.data);
    toast.error(error.response.data.message);
    yield put({ type: ActionTypes.GET_FIELD_JSON_CHANGED_REQUEST_FAILURE, payload: error });
  }
}
function* uploadInvoiceApi(action, getState) {
  const { data, onSuccess, onErrors } = action.payload;
  try {
    const response = yield call(postApiRequest, {
      url: `${uploadInvoiceDocAPI}`,
      data: data,
    });
    if (response?.status === 200) {

      if (onSuccess) {
        onSuccess(response);
        yield put({
          type: ActionTypes.UPLOAD_INVOICE_SUCCESS,
          payload:  response?.data?.content,
        });
      }
    } else {
      toast.error(response?.data?.message);
      onErrors(response?.data?.message);
      yield put({ type: ActionTypes.UPLOAD_INVOICE_FAILURE, payload: response });
    }
  } catch (error) {
    onErrors(error.response.data);
    toast.error(error.response.data.message);
    yield put({ type: ActionTypes.UPLOAD_INVOICE_FAILURE, payload: error });
  }
}
function* getActiveQueueDocumentListApi(action, getState) {
  const { data, onSuccess, onErrors } = action.payload;
  try {
    const response = yield call(postApiRequest, {
      url: `${getActiveQueueDocumentListAPI}`,
      data: data,
    });
    if (response?.status === 200) {

      if (onSuccess) {
        onSuccess(response);
        yield put({
          type: ActionTypes.GET_INVOICE_LIST_BY_QUEUE_SUCCESS,
          payload:  response?.data?.content,
        });
      }
    } else {
      toast.error(response?.data?.message);
      onErrors(response?.data?.message);
      yield put({ type: ActionTypes.GET_INVOICE_LIST_BY_QUEUE_FAILURE, payload: response?.data});
    }
  } catch (error) {
    onErrors(error.response.data);
    toast.error(error.response.data.message);
    yield put({ type: ActionTypes.GET_INVOICE_LIST_BY_QUEUE_FAILURE, payload: error.response.data
      
    });
  }
}
export function* watchQueueRequest() {
  yield takeLatest(ActionTypes.QUEUE_REQUEST, addQueueApi);
  yield takeLatest(ActionTypes.GET_QUEUE_REQUEST, getQueueByWorkSpaceApi);
  yield takeLatest(ActionTypes.UPDATE_QUEUE_REQUEST, editQueueByWorkSpaceApi);
  yield takeLatest(ActionTypes.GET_QUEUE_TYPE_REQUEST, getQueueTypeApi);
  yield takeLatest(ActionTypes.GET_REGION_REQUEST, getRegionDataApi);
  yield takeLatest(ActionTypes.DELETE_QUEUE_REQUEST, deleteQueuesApi);
  yield takeLatest(ActionTypes.GET_FIELD_JSON_CHANGED_REQUEST, editFieldJSONApi);
  yield takeLatest(ActionTypes.GET_QUEUE_ONLY_REQUEST, getQueueByWorkSpaceIdApi);
  yield takeLatest(ActionTypes.UPLOAD_INVOICE_REQUEST, uploadInvoiceApi);
  yield takeLatest(ActionTypes.GET_INVOICE_LIST_BY_QUEUE_REQUEST, getActiveQueueDocumentListApi);
}
function* queueSaga() {
  yield fork(watchQueueRequest);
}

export default queueSaga;
