import { ActionTypes } from "./loginAction";

const INITIAL_STATE = {
  loading: false,
  user: [],
  error: null,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.VALIDATE_LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
        
      };
    case ActionTypes.VALIDATE_LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
      case ActionTypes.VALIDATE_LOGIN_USER_FAILURE:
        return {
          ...state,
          loading: false,
        };
    default:
      return state;
  }
};

export default loginReducer;
