export const ActionTypes = {
    WORKSPACE_REQUEST: 'WORKSPACE_REQUEST',
    WORKSPACE_SUCCESS: 'WORKSPACE_SUCCESS',
    WORKSPACE_FAILURE: 'WORKSPACE_FAILURE',

    ACTIVE_WORKSPACE_REQUEST: 'ACTIVE_WORKSPACE_REQUEST',
    ACTIVE_WORKSPACE_SUCCESS: 'ACTIVE_WORKSPACE_SUCCESS',
    ACTIVE_WORKSPACE_FAILURE: 'ACTIVE_WORKSPACE_FAILURE',

    GET_WORKSPACE_REQUEST:'GET_WORKSPACE_REQUEST',
    GET_WORKSPACE_SUCCESS:'GET_WORKSPACE_SUCCESS',
    GET_WORKSPACE_FAILURE:'GET_WORKSPACE_FAILURE',
  
    GET_WORKSPACE_BY_ID_REQUEST:'GET_WORKSPACE_BY_ID_REQUEST',
    GET_WORKSPACE_BY_ID_SUCCESS:'GET_WORKSPACE_BY_ID_SUCCESS',
    GET_WORKSPACE_BY_ID_FAILURE:'GET_WORKSPACE_BY_ID_FAILURE',
  
    DELETE_WORKSPACE_REQUEST:'DELETE_WORKSPACE_REQUEST',
    DELETE_WORKSPACE_SUCCESS:'DELETE_WORKSPACE_SUCCESS',
    DELETE_WORKSPACE_FAILURE:'DELETE_WORKSPACE_FAILURE',
  
  
    UPDATE_WORKSPACE_REQUEST:'UPDATE_WORKSPACE_REQUEST',
    UPDATE_WORKSPACE_SUCCESS:'UPDATE_WORKSPACE_SUCCESS',
    UPDATE_WORKSPACE_FAILURE:'UPDATE_WORKSPACE_FAILURE',

    MOVE_QUEUE_REQUEST: 'MOVE_QUEUE_REQUEST',
    MOVE_QUEUE_SUCCESS: 'MOVE_QUEUE_SUCCESS',
    MOVE_QUEUE_FAILURE: 'MOVE_QUEUE_FAILURE',

    DUPLICATE_QUEUE_REQUEST: 'DUPLICATE_QUEUE_REQUEST',
    DUPLICATE_QUEUE_SUCCESS: 'DUPLICATE_QUEUE_SUCCESS',
    DUPLICATE_QUEUE_FAILURE: 'DUPLICATE_QUEUE_FAILURE',


    CLEAR_ACTIVE_WORKSPACE:"CLEAR_ACTIVE_WORKSPACE"
  };
  const defaultParams={
    data:{},
    onSuccess:()=>{},
    onErrors:()=>{}
  }
  export const workSpaceRequest = ({data={},onSuccess=defaultParams.onSuccess,onErrors=defaultParams.onErrors}) => {
    return {
      type: ActionTypes.WORKSPACE_REQUEST,
      payload:{data,onSuccess,onErrors},
    };
  };
  // export const workSpaceSuccess = (payload) => {
  //   return {
  //     type: ActionTypes.WORKSPACE_SUCCESS,
  //     payload,
  //   };
  // };
  // export const workSpaceFailure = (payload) => {
  //   return {
  //     type: ActionTypes.WORKSPACE_FAILURE,
  //     payload,
  //   };
  // };
  export const getWorkSpaceRequest = ({data={},onSuccess=defaultParams.onSuccess,onErrors=defaultParams.onErrors}) => {
    return {
      type: ActionTypes.GET_WORKSPACE_REQUEST,
      payload:{data,onSuccess,onErrors},
    };
  };
  // export const getWorkSpaceSuccess = (payload) => {
  //   return {
  //     type: ActionTypes.GET_WORKSPACE_SUCCESS,
  //     payload,
  //   };
  // };
  // export const getWorkSpaceFailure = (payload) => {
  //   return {
  //     type: ActionTypes.GET_WORKSPACE_FAILURE,
  //     payload,
  //   };
  // };

  export const updateWorkSpaceRequest = ({data={},onSuccess=defaultParams.onSuccess,onErrors=defaultParams.onErrors}) => {
    return {
      type: ActionTypes.UPDATE_WORKSPACE_REQUEST,
      payload:{data,onSuccess,onErrors},
    };
  };
  export const deleteWorkSpaceRequest = ({data={},onSuccess=defaultParams.onSuccess,onErrors=defaultParams.onErrors}) => {
    return {
      type: ActionTypes.DELETE_WORKSPACE_REQUEST,
      payload:{data,onSuccess,onErrors},
    };
  };
  export const activeWorkSpaceRequest = ({data={},onSuccess=defaultParams.onSuccess,onErrors=defaultParams.onErrors}) => {
    return {
      type: ActionTypes.ACTIVE_WORKSPACE_REQUEST,
      payload:data,
    };
  };
  export const getWorkSpaceByIdRequest = ({data={},onSuccess=defaultParams.onSuccess,onErrors=defaultParams.onErrors}) => {
    return {
      type: ActionTypes.GET_WORKSPACE_BY_ID_REQUEST,
      payload:{data,onSuccess,onErrors},
    };
  };
  // export const updateWorkSpaceSuccess = (payload) => {
  //   return {
  //     type: ActionTypes.UPDATE_WORKSPACE_SUCCESS,
  //     payload,
  //   };
  // };
  // export const updateWorkSpaceFailure = (payload) => {
  //   return {
  //     type: ActionTypes.UPDATE_WORKSPACE_FAILURE,
  //     payload,
  //   };
  // };
  export const duplicateQueueRequest = ({data={},onSuccess=defaultParams.onSuccess,onErrors=defaultParams.onErrors},wsId) => {
    return {
      type: ActionTypes.DUPLICATE_QUEUE_REQUEST,
      payload:{data,onSuccess,onErrors},wsId, 
    };
  };
  export const moveQueueInWorkSpaceRequest = ({data={},onSuccess=defaultParams.onSuccess,onErrors=defaultParams.onErrors},activeWsID) => {
    return {
      type: ActionTypes.MOVE_QUEUE_REQUEST,
      payload:{data,onSuccess,onErrors,activeWsID}, 
    };
  };
  export const clearActiveWorkSpaceRequest = ({data={},onSuccess=defaultParams.onSuccess,onErrors=defaultParams.onErrors}) => {
    return {
      type: ActionTypes.CLEAR_ACTIVE_WORKSPACE,
      payload:data, 
    };
  };