import { ActionTypes } from "./queueAction";
const defaultState = {
  queueByworkSpace: {},
  loading: false,
  error: null,
  queueTypeData: [],
  regionData: [],
  afterCreteQueueListData: [],
  activeQueue: {},
  activeQueueDocumentsList:[],
  invoice:{
    invoiceLoading:false
  },
  openSidebarDrawer:false,
  afterReviewActiveSpace:{}
};

const queueReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.QUEUE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.QUEUE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case ActionTypes.QUEUE_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case ActionTypes.GET_QUEUE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.GET_QUEUE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case ActionTypes.GET_QUEUE_FAILURE:
      return {
        ...state,
        loading: false,
      };
      case ActionTypes.GET_QUEUE_ONLY_REQUEST:
        return {
          ...state,
          loading: true,
          queueByworkSpace:action.payload
        };
      case ActionTypes.GET_QUEUE_ONLY_SUCCESS:
        return {
          ...state,
          loading: false,
          queueByworkSpace:action.payload
         
        };
      case ActionTypes.GET_QUEUE_ONLY_FAILURE:
        return {
          ...state,
          loading: false,
          queueByworkSpace:action.payload

        };
    case ActionTypes.UPDATE_QUEUE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.UPDATE_QUEUE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case ActionTypes.UPDATE_QUEUE_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case ActionTypes.GET_QUEUE_TYPE_REQUEST:
      return {
        ...state,
        queueTypeData: action.payload,
      };
    case ActionTypes.GET_QUEUE_TYPE_SUCCESS:
      return {
        ...state,
        queueTypeData: action.payload,
      };
    case ActionTypes.GET_QUEUE_TYPE_FAILURE:
      return {
        ...state,
        queueTypeData: action.payload,
      };
    case ActionTypes.GET_REGION_REQUEST:
      return {
        ...state,
        regionData: action.payload,
      };
    case ActionTypes.GET_REGION_SUCCESS:
      return {
        ...state,
        regionData: action.payload,
      };
    case ActionTypes.GET_REGION_FAILURE:
      return {
        ...state,
        regionData: action.payload,
      };
    case ActionTypes.DELETE_QUEUE_REQUEST:
      return {
        ...state,
        loading:true,
        regionData: action.payload,
      };
    case ActionTypes.DELETE_QUEUE_SUCCESS:
      return {
        ...state,
        loading:false,
        regionData: action.payload,
      };
    case ActionTypes.DELETE_QUEUE_FAILURE:
      return {
        ...state,
        loading:false,
        regionData: action.payload,
      };
      case ActionTypes.GET_FIELD_JSON_CHANGED_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ActionTypes.GET_FIELD_JSON_CHANGED_REQUEST_SUCCESS:
        return {
          ...state,
          loading: false,
          
        };
      case ActionTypes.GET_FIELD_JSON_CHANGED_REQUEST_FAILURE:
        return {
          ...state,
          loading: false,
        };
    case ActionTypes.ACTIVE_QUEUE_REQUEST:
      return {
        ...state,
        activeQueue: action.payload,
      };
    case ActionTypes.CLEAR_ACTIVE_QUEUE_STATE:
      return {
        ...state,
        activeQueue: defaultState.activeQueue,
      };
      case ActionTypes.CLEAR_ACTIVE_QUEUE_DOC_LIST_STATE:
        return {
          ...state,
          activeQueueDocumentsList: defaultState.activeQueueDocumentsList,
        };
      case ActionTypes.UPLOAD_INVOICE_REQUEST:
        return {
          ...state,
          invoice:{
            ...state.invoice,invoiceLoading:true
          },
        };
      case ActionTypes.UPLOAD_INVOICE_SUCCESS:
        return {
          ...state,
          invoice:{
            ...state.invoice,
            invoiceLoading:false,
            ...action.payload
          },
          // invoice:action.payload
        };
        case ActionTypes.UPLOAD_INVOICE_MAPDATA_SUCCESS:
        return {
          ...state,
          invoice:{
            ...state.invoice,
            ...action.payload
          },
          // invoice:action.payload
        };
      case ActionTypes.UPLOAD_INVOICE_FAILURE:
        return {
          ...state,
          invoice:{
            ...state.invoice,invoiceLoading:false
          },
        };
        case ActionTypes.GET_INVOICE_LIST_BY_QUEUE_SUCCESS:
        return {
          ...state,
          activeQueueDocumentsList:action.payload,
        };
        case ActionTypes.OPEN_SIDEBAR_DRAWER_SUCCESS:
        return {
          ...state,
          openSidebarDrawer: action.payload,
        };
        case ActionTypes.SET_WSID_QUEUEID_SUCCESSS:
          return {
            ...state,
            afterReviewActiveSpace: action.payload,
          };
    default:
      return state;
  }
};

export default queueReducer;
