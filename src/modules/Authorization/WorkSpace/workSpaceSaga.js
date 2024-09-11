import { put, takeLatest, fork, call, select } from "redux-saga/effects";
import {
  ActionTypes,
} from "./redux/workSpaceAction";
import {
  getApiRequest,
  patchApiRequest,
  postApiRequest,
} from "../../../features/axiosClient";
import toast from "react-hot-toast";
import {
  createWorkSpaceApi,
  deleteWorkSpaceApi,
  duplicateQueueInWorkSpacesApi,
  getWorkSpaceByIdApi,
  getWorkSpacesApi,
  moveQueueInWorkSpacesApi,
  putWorkSpacesApi,
} from "../../../constants/ApiUrlConstant";

const workSpace = (state) => state.workSpace.workspaces;

// const workSpaceApi = async (action) => {
//     try {
//       const data = await postApiRequest("/api/Workspace", action);
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   };

function* addWorkSpaceApi(action) {
  const { data, onSuccess, onErrors } = action.payload;

  try {
    const response = yield call(postApiRequest, {
      url: createWorkSpaceApi,
      data: data,
    });
    if (response?.status === 200) {
      toast.success("Space created successfully.");

      if (onSuccess) {
        onSuccess(response);
        yield put({ type: ActionTypes.WORKSPACE_SUCCESS, data: response });
      }
    } else {
      toast.error(response?.data?.message);
      onErrors(response?.data?.message);
      yield put({ type: ActionTypes.WORKSPACE_FAILURE, data: response.data });
    }
  } catch (error) {
    onErrors(error.response.data);
    toast.error(error.response.data.message);
    yield put({
      type: ActionTypes.WORKSPACE_FAILURE,
      data: error.response.data,
    });
  }
}
function* getWorkSpaceApi(action) {
  const { data, onSuccess, onErrors } = action.payload;
  try {
    const response = yield call(postApiRequest, {
      url: getWorkSpacesApi,
      data: data,
    });
    if (response?.status === 200) {
      if (onSuccess) {
        onSuccess(response.data.content);
        yield put({
          type: ActionTypes.GET_WORKSPACE_SUCCESS,
          payload: response.data.content,
        });
      }
    } else {
      toast.error(response?.data?.message);
      onErrors(response?.data?.message);
      yield put({ type: ActionTypes.GET_WORKSPACE_FAILURE, payload: response });
    }
  } catch (error) {
    onErrors(error.response.data);
    toast.error(error.response.data.message);
    yield put({ type: ActionTypes.GET_WORKSPACE_FAILURE, payload: error });
  }
}
function* getWorkSpaceByIDApi(action) {
  const { data, onSuccess, onErrors } = action.payload;
  try {
    const response = yield call(getApiRequest, {
      url: `${getWorkSpaceByIdApi}/${data.wsId}`,
      data: data,
    });
    const workSpaceList = yield select(workSpace);
    const index = workSpaceList.findIndex((item) => item.wsId === data.wsId);
    if(index>-1){
      workSpaceList[index]=response.data.content
    }
    if (response?.status === 200) {
      if (onSuccess) {
        onSuccess(response.data.content);
        yield put({
          type: ActionTypes.GET_WORKSPACE_SUCCESS,
          payload: workSpaceList,
        });
        yield put({
          type: ActionTypes.GET_WORKSPACE_BY_ID_SUCCESS,
          payload: response.data.content,
        });
      }
    } else {
      toast.error(response?.data?.message);
      onErrors(response?.data?.message);
      yield put({ type: ActionTypes.GET_WORKSPACE_BY_ID_FAILURE, payload: response });
    }
  } catch (error) {
    onErrors(error.response.data);
    toast.error(error.response.data.message);
    yield put({ type: ActionTypes.GET_WORKSPACE_BY_ID_FAILURE, payload: error });
  }
}
function* editWorkSpaceApi(action) {
  const { data, onSuccess, onErrors } = action.payload;

  try {
    const response = yield call(patchApiRequest, {
      url: `${putWorkSpacesApi}/${data?.wsId}`,
      data: data,
    });
    const workSpaceList = yield select(workSpace);
    const getObject = workSpaceList.find((item) => item.wsId === data.wsId);
    if (getObject) {
      getObject.workspaceName = data.workspaceName;
    }
    if (response?.status === 200) {
      toast.success("Space updated successfully.");

      if (onSuccess) {
        onSuccess(response);
        yield put({
          type: ActionTypes.GET_WORKSPACE_SUCCESS,
          payload: workSpaceList,
        });
        yield put({
          type: ActionTypes.UPDATE_WORKSPACE_SUCCESS,
          payload: response,
        });
      }
    } else {
      toast.error(response?.data?.message);
      onErrors(response?.data?.message);
      yield put({
        type: ActionTypes.UPDATE_WORKSPACE_FAILURE,
        payload: response,
      });
    }
  } catch (error) {
    onErrors(error.response.data);
    toast.error(error.response.data.message);
    yield put({ type: ActionTypes.UPDATE_WORKSPACE_FAILURE, payload: error });
  }
}
function* deleteSpaceApi(action) {
  const { data, onSuccess, onErrors } = action.payload;

  try {
    const response = yield call(postApiRequest, {
      url: `${deleteWorkSpaceApi}?id=${data.id}`,
      data: data,
    });
    const workSpaceList = yield select(workSpace);
    const index = workSpaceList.findIndex((item) => item.wsId === data.id);
    if (index > -1) {
      workSpaceList.splice(index, 1);
    }
    if (response?.status === 200) {
      if (onSuccess) {
        toast.success("Space deleted successfully.");
        onSuccess(response);
        yield put({
          type: ActionTypes.GET_WORKSPACE_SUCCESS,
          payload: workSpaceList,
        });
        yield put({
          type: ActionTypes.DELETE_WORKSPACE_SUCCESS,
          data: response,
        });
      }
    } else {
      toast.error(response?.data?.message);
      onErrors(response?.data?.message);
      yield put({
        type: ActionTypes.DELETE_WORKSPACE_FAILURE,
        data: response.data,
      });
    }
  } catch (error) {
    onErrors(error.response.data);
    toast.error(error.response.data.message);
    yield put({
      type: ActionTypes.DELETE_WORKSPACE_FAILURE,
      data: error.response.data,
    });
  }
}
function* moveQueueToWorkSpaceApi(action) {
  const { data, onSuccess, onErrors,activeWsID } = action.payload;
  try {
    const response = yield call(postApiRequest, {
      url: moveQueueInWorkSpacesApi,
      data: data,
    });
    const workSpaceList = yield select(workSpace);
    let queueToMove = null;
    let sourceWorkspaceIndex = workSpaceList.findIndex((item=>item.wsId === activeWsID));
    const sourceWorkspace=workSpaceList.find((item=>item.wsId === activeWsID));
    const sourceWorkspaceQueueList=workSpaceList[sourceWorkspaceIndex].queueList||[]
    const queueIndex=sourceWorkspaceQueueList.findIndex(queue=>queue.queueId === data.queueId)
    if (queueIndex !== -1) {
      queueToMove =sourceWorkspaceQueueList.splice(queueIndex, 1)[0]; // Remove queue from source
     if(sourceWorkspace.queueCount>0){
       sourceWorkspace.queueCount=sourceWorkspace.queueCount - 1
     }
      
  }
     // Step 1: Find the source workspace and the queue to move
  if (queueToMove) {
      // Step 2: Find the target workspace
      const targetWorkspace = workSpaceList.find(workspace => workspace.wsId === data.desitnationWsId);
      if (targetWorkspace) {
          // Step 3: Add the queue to the target workspace's queueList
          if (!targetWorkspace.queueList) {
              targetWorkspace.queueList = [];
          }
          targetWorkspace.queueList.push(queueToMove);
          targetWorkspace.queueCount=targetWorkspace.queueCount+1
      } else {
          console.error('Target workspace not found');
      }
  } else {
      console.error('Category not found');
  }

    if (response?.status === 200) {
      if (onSuccess) {
        toast.success("Category moved successfully.");
        onSuccess(response.data.content);
        yield put({
          type: ActionTypes.GET_WORKSPACE_SUCCESS,
          payload: workSpaceList,
        });
        yield put({
          type: ActionTypes.MOVE_QUEUE_SUCCESS,
          payload: response.data.content,
        });
      }
    } else {
      toast.error(response?.data?.message);
      onErrors(response?.data?.message);
      yield put({ type: ActionTypes.MOVE_QUEUE_FAILURE, payload: response });
    }
  } catch (error) {
    onErrors(error.response.data);
    toast.error(error.response.data.message);
    yield put({ type: ActionTypes.MOVE_QUEUE_FAILURE, payload: error });
  }
}
function* duplicateQueueWorkSpaceApi(action) {
  const { data, onSuccess, onErrors } = action.payload;
  try {
    const response = yield call(postApiRequest, {
      url: duplicateQueueInWorkSpacesApi,
      data: data,
    });
    const workSpaceList = yield select(workSpace);
    const getIndex = workSpaceList.findIndex((item) => item.wsId === action.wsId);
    const queueList=workSpaceList[getIndex].queueList
    queueList.splice(0,0,response.data.content)

    if (response?.status === 200) {
      toast.success("Category duplicate successfully.");

      if (onSuccess) {
        onSuccess(response.data.content);
        yield put({
          type: ActionTypes.GET_WORKSPACE_SUCCESS,
          payload: workSpaceList,
        });
        yield put({
          type: ActionTypes.DUPLICATE_QUEUE_SUCCESS,
          payload: workSpaceList,
        });
      }
    } else {
      toast.error(response?.data?.message);
      onErrors(response?.data?.message);
      yield put({ type: ActionTypes.DUPLICATE_QUEUE_FAILURE, payload: response });
    }
  } catch (error) {
    onErrors(error.response.data);
    toast.error(error.response.data.message);
    yield put({ type: ActionTypes.DUPLICATE_QUEUE_FAILURE, payload: error });
  }
}
export function* watchWorkSpaceRequest() {
  yield takeLatest(ActionTypes.WORKSPACE_REQUEST, addWorkSpaceApi);
  yield takeLatest(ActionTypes.GET_WORKSPACE_REQUEST, getWorkSpaceApi);
  yield takeLatest(ActionTypes.UPDATE_WORKSPACE_REQUEST, editWorkSpaceApi);
  yield takeLatest(ActionTypes.DELETE_WORKSPACE_REQUEST, deleteSpaceApi);
  yield takeLatest(ActionTypes.DUPLICATE_QUEUE_REQUEST, duplicateQueueWorkSpaceApi);
  yield takeLatest(ActionTypes.MOVE_QUEUE_REQUEST, moveQueueToWorkSpaceApi);
  yield takeLatest(ActionTypes.GET_WORKSPACE_BY_ID_REQUEST, getWorkSpaceByIDApi);
}
function* workSpaceSaga() {
  yield fork(watchWorkSpaceRequest);

}

export default workSpaceSaga;
