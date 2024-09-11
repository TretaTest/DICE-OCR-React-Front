import { ActionTypes } from "./workSpaceAction";
const defaultState = {
  workspaces: [],
  loading: false,
  error: null,
  activeWorkSpace: {},
  workspaceByIdData: {}, //edit/get workspace data
};

const workSpaceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.WORKSPACE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.WORKSPACE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case ActionTypes.WORKSPACE_FAILURE:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case ActionTypes.GET_WORKSPACE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.GET_WORKSPACE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        workspaces: action.payload,
      };
    case ActionTypes.GET_WORKSPACE_FAILURE:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case ActionTypes.GET_WORKSPACE_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.GET_WORKSPACE_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        workspaceByIdData: action.payload,
      };
    case ActionTypes.GET_WORKSPACE_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case ActionTypes.UPDATE_WORKSPACE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.UPDATE_WORKSPACE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case ActionTypes.UPDATE_WORKSPACE_FAILURE:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case ActionTypes.DELETE_WORKSPACE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.DELETE_WORKSPACE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case ActionTypes.DELETE_WORKSPACE_FAILURE:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case ActionTypes.ACTIVE_WORKSPACE_REQUEST:
      return {
        ...state,
        activeWorkSpace: action.payload,
      };
    case ActionTypes.CLEAR_ACTIVE_WORKSPACE:
      return {
        ...state,
        activeWorkSpace: defaultState.activeWorkSpace,
      };
    case ActionTypes.MOVE_QUEUE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.MOVE_QUEUE_SUCCESS:
      return {
        ...state,
      loading: false,
      };
    case ActionTypes.MOVE_QUEUE_FAILURE:
      return {
        ...state,
      loading: false,
      };
    case ActionTypes.DUPLICATE_QUEUE_REQUEST:
      return {
        ...state,
        loading:true,
        // workspaces: action.payload,
      };
    case ActionTypes.DUPLICATE_QUEUE_SUCCESS:
      return {
        ...state,
        loading:false,
        // regionData: action.payload,
      };
    case ActionTypes.DUPLICATE_QUEUE_FAILURE:
      return {
        ...state,
        loading:false,

        // regionData: action.payload,
      };
    default:
      return state;
  }
};

export default workSpaceReducer;
