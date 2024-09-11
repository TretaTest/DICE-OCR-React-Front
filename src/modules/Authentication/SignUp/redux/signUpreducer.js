import { ActionTypes } from "./signUpAction";
const defaultState = {
  user:[],
  loading:false,
  error:null
};

const signUpReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.REGISTRATION_REQUEST:
      return {
        ...state,
        loading:true,
      
      };
    case ActionTypes.REGISTRATION_SUCCESS:
      return {
        ...state,
        loading:false,
        user: action.payload,
      };
      case ActionTypes.REGISTRATION_FAILURE:
        return {
          ...state,
          loading:false,
        
        };
    default:
      return state;
  }
};

export default signUpReducer;
