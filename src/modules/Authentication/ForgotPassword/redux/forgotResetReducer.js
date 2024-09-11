import { ActionTypes } from "./forgotRestAction";

const INITIAL_STATE = {
  loading: false,
  error: null,
  Email:"",
  
};

const forgotResetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        
      };
    case ActionTypes.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        Email:action.payload
      };
      case ActionTypes.FORGOT_PASSWORD_FAILURE:
        return {
          ...state,
          loading: false,
        };
        case ActionTypes.RESET_PASSWORD_REQUEST:
          return {
            ...state,
            loading: true,
            
          };
        case ActionTypes.RESET_PASSWORD_SUCCESS:
          return {
            ...state,
            loading: false,
          };
          case ActionTypes.RESET_PASSWORD_FAILURE:
            return {
              ...state,
              loading: false,
            };
        case ActionTypes.OTP_VALIDATE_REQUEST:
          return {
            ...state,
            loading: true,
            
          };
        case ActionTypes.OTP_VALIDATE_SUCCESS:
          return {
            ...state,
            loading: false,
          };
          case ActionTypes.OTP_VALIDATE_FAILURE:
            return {
              ...state,
              loading: false,
            };
    default:
      return state;
  }
};

export default forgotResetReducer;
