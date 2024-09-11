export const ActionTypes = {
  QUEUE_REQUEST: "QUEUE_REQUEST",
  QUEUE_SUCCESS: "QUEUE_SUCCESS",
  QUEUE_FAILURE: "QUEUE_FAILURE",

  GET_QUEUE_REQUEST: "GET_QUEUE_REQUEST",
  GET_QUEUE_SUCCESS: "GET_QUEUE_SUCCESS",
  GET_QUEUE_FAILURE: "GET_QUEUE_FAILURE",

  GET_QUEUE_ONLY_REQUEST: "GET_QUEUE_ONLY_REQUEST",
  GET_QUEUE_ONLY_SUCCESS: "GET_QUEUE_ONLY_SUCCESS",
  GET_QUEUE_ONLY_FAILURE: "GET_QUEUE_ONLY_FAILURE",

  GET_FIELD_JSON_CHANGED_REQUEST: "GET_FIELD_JSON_CHANGED_REQUEST",
  GET_FIELD_JSON_CHANGED_REQUEST_SUCCESS:
    "GET_FIELD_JSON_CHANGED_REQUEST_SUCCESS",
  GET_FIELD_JSON_CHANGED_REQUEST_FAILURE:
    "GET_FIELD_JSON_CHANGED_REQUEST_FAILURE",

  ACTIVE_QUEUE_REQUEST: "ACTIVE_QUEUE_REQUEST",
  ACTIVE_QUEUE_SUCCESS: "ACTIVE_QUEUE_SUCCESS",
  ACTIVE_QUEUE_FAILURE: "ACTIVE_QUEUE_FAILURE",

  GET_QUEUE_TYPE_REQUEST: "GET_QUEUE_TYPE_REQUEST",
  GET_QUEUE_TYPE_SUCCESS: "GET_QUEUE_TYPE_SUCCESS",
  GET_QUEUE_TYPE_FAILURE: "GET_QUEUE_TYPE_FAILURE",

  GET_REGION_REQUEST: "GET_REGION_REQUEST",
  GET_REGION_SUCCESS: "GET_REGION_SUCCESS",
  GET_REGION_FAILURE: "GET_REGION_FAILURE",

  UPDATE_QUEUE_REQUEST: "UPDATE_QUEUE_REQUEST",
  UPDATE_QUEUE_SUCCESS: "UPDATE_QUEUE_SUCCESS",
  UPDATE_QUEUE_FAILURE: "UPDATE_QUEUE_FAILURE",

  DELETE_QUEUE_REQUEST: "DELETE_QUEUE_REQUEST",
  DELETE_QUEUE_SUCCESS: "DELETE_QUEUE_SUCCESS",
  DELETE_QUEUE_FAILURE: "DELETE_QUEUE_FAILURE",

  UPLOAD_INVOICE_REQUEST: "UPLOAD_INVOICE_REQUEST",
  UPLOAD_INVOICE_SUCCESS: "UPLOAD_INVOICE_SUCCESS",
  UPLOAD_INVOICE_FAILURE: "UPLOAD_INVOICE_FAILURE",
  UPLOAD_INVOICE_MAPDATA_SUCCESS: "UPLOAD_INVOICE_MAPDATA_SUCCESS",

  
  GET_INVOICE_LIST_BY_QUEUE_REQUEST: "GET_INVOICE_LIST_BY_QUEUE_REQUEST",
  GET_INVOICE_LIST_BY_QUEUE_SUCCESS: "GET_INVOICE_LIST_BY_QUEUE_SUCCESS",
  GET_INVOICE_LIST_BY_QUEUE_FAILURE: "GET_INVOICE_LIST_BY_QUEUE_FAILURE",


  CLEAR_ACTIVE_QUEUE_STATE: "CLEAR_ACTIVE_QUEUE_STATE",
  CLEAR_ACTIVE_QUEUE_DOC_LIST_STATE:"CLEAR_ACTIVE_QUEUE_DOC_LIST_STATE",
  OPEN_SIDEBAR_DRAWER_SUCCESS:"OPEN_SIDEBAR_DRAWER_SUCCESS",
  SET_WSID_QUEUEID_SUCCESSS:"SET_WSID_QUEUEID_SUCCESSS"
};
const defaultParams = {
  data: {},
  onSuccess: () => {},
  onErrors: () => {},
};
export const queueRequest = ({
  data = {},
  onSuccess = defaultParams.onSuccess,
  onErrors = defaultParams.onErrors,
}) => {
  return {
    type: ActionTypes.QUEUE_REQUEST,
    payload: { data, onSuccess, onErrors },
  };
};
export const getQueueRequest = ({
  data = {},
  onSuccess = defaultParams.onSuccess,
  onErrors = defaultParams.onErrors,
}) => {
  return {
    type: ActionTypes.GET_QUEUE_REQUEST,
    payload: { data, onSuccess, onErrors },
  };
};
export const getQueueOnlyRequest = ({
  data = {},
  onSuccess = defaultParams.onSuccess,
  onErrors = defaultParams.onErrors,
}) => {
  return {
    type: ActionTypes.GET_QUEUE_ONLY_REQUEST,
    payload: { data, onSuccess, onErrors },
  };
};
export const getQueueOnlySuccess = ({
  data = {},
  onSuccess = defaultParams.onSuccess,
  onErrors = defaultParams.onErrors,
}) => {
  return {
    type: ActionTypes.GET_QUEUE_ONLY_SUCCESS,
    payload:data,
  };
};
export const updateQueueRequest = ({
  data = {},
  onSuccess = defaultParams.onSuccess,
  onErrors = defaultParams.onErrors,
}) => {
  return {
    type: ActionTypes.UPDATE_QUEUE_REQUEST,
    payload: { data, onSuccess, onErrors },
  };
};
export const deleteQueueRequest = ({
  data = {},
  onSuccess = defaultParams.onSuccess,
  onErrors = defaultParams.onErrors,
}) => {
  return {
    type: ActionTypes.DELETE_QUEUE_REQUEST,
    payload: { data, onSuccess, onErrors },
  };
};
export const getQueueTypeRequest = ({
  data = {},
  onSuccess = defaultParams.onSuccess,
  onErrors = defaultParams.onErrors,
}) => {
  return {
    type: ActionTypes.GET_QUEUE_TYPE_REQUEST,
    payload: { data, onSuccess, onErrors },
  };
};

export const getRegionRequest = ({
  data = {},
  onSuccess = defaultParams.onSuccess,
  onErrors = defaultParams.onErrors,
}) => {
  return {
    type: ActionTypes.GET_REGION_REQUEST,
    payload: { data, onSuccess, onErrors },
  };
};
export const getFieldJSONChangesRequest = (
  {
    data = {},
    onSuccess = defaultParams.onSuccess,
    onErrors = defaultParams.onErrors,
  },
  queueId
) => {
  return {
    type: ActionTypes.GET_FIELD_JSON_CHANGED_REQUEST,
    payload: { data, onSuccess, onErrors, queueId },
  };
};
export const activeQueueRequest = ({
  data = {},
  onSuccess = defaultParams.onSuccess,
  onErrors = defaultParams.onErrors,
}) => {
  return {
    type: ActionTypes.ACTIVE_QUEUE_REQUEST,
    payload: data,
  };
};

export const clearActiveQueueRequest = ({
  data = {},
  onSuccess = defaultParams.onSuccess,
  onErrors = defaultParams.onErrors,
}) => {
  return {
    type: ActionTypes.CLEAR_ACTIVE_QUEUE_STATE,
    payload: data,
  };
};
export const getDocumentListByQueueRequest = ({
  data = {},
  onSuccess = defaultParams.onSuccess,
  onErrors = defaultParams.onErrors,
}) => {
  return {
    type: ActionTypes.GET_INVOICE_LIST_BY_QUEUE_REQUEST,
    payload: { data, onSuccess, onErrors },
  };
};
export const uploadInvoiceRequest = ({
  data = {},
  onSuccess = defaultParams.onSuccess,
  onErrors = defaultParams.onErrors,
}) => {
  return {
    type: ActionTypes.UPLOAD_INVOICE_REQUEST,
    payload: { data, onSuccess, onErrors },
  };
};
export const uploadInvoiceDataSuccess = ({
  data = {},
  onSuccess = defaultParams.onSuccess,
  onErrors = defaultParams.onErrors,
}) => {
  return {
    type: ActionTypes.UPLOAD_INVOICE_MAPDATA_SUCCESS,
    payload: data,
  };
};
export const clearActiveQueueDocListRequest = ({
  data = {},
  onSuccess = defaultParams.onSuccess,
  onErrors = defaultParams.onErrors,
}) => {
  return {
    type: ActionTypes.CLEAR_ACTIVE_QUEUE_DOC_LIST_STATE,
    payload: data,
  };
};
export const setOpenSidebarDrawerRequest = ({
  data = {},
  onSuccess = defaultParams.onSuccess,
  onErrors = defaultParams.onErrors,
}) => {
  return {
    type: ActionTypes.OPEN_SIDEBAR_DRAWER_SUCCESS,
    payload: data,
  };
};
export const setWsIdAndQueueId = ({
  data = {},
  onSuccess = defaultParams.onSuccess,
  onErrors = defaultParams.onErrors,
}) => {
  return {
    type: ActionTypes.SET_WSID_QUEUEID_SUCCESSS,
    payload: data,
  };
};
// export const queueSuccess = (payload) => {
//   return {
//     type: ActionTypes.QUEUE_SUCCESS,
//     payload,
//   };
// };
// export const queueFailure = (payload) => {
//   return {
//     type: ActionTypes.QUEUE_FAILURE,
//     payload,
//   };
// };
