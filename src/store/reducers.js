import { combineReducers } from "redux";
import signUpReducer from "../modules/Authentication/SignUp/redux/signUpreducer";
import loginReducer from "../modules/Authentication/Login/redux/loginReducer";
import workSpaceReducer from "../modules/Authorization/WorkSpace/redux/workSpaceReducer";
import queueReducer from "../modules/Authorization/WorkSpace/Queue/reudx/queueReducer";
import forgotResetReducer from "../modules/Authentication/ForgotPassword/redux/forgotResetReducer";
const rootReducer = combineReducers({
  signup: signUpReducer,
  login:loginReducer,
  workSpace:workSpaceReducer,
  queue:queueReducer,
  forgotReset:forgotResetReducer

});
export default rootReducer;
