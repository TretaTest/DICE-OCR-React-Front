import { all, fork } from "redux-saga/effects";
import  signUpSaga from "../modules/Authentication/SignUp/signUpSaga";
import workSpaceSaga  from "../modules/Authorization/WorkSpace/workSpaceSaga";
import queueSaga  from "../modules/Authorization/WorkSpace/Queue/queueSaga";
import  signInSaga  from "../modules/Authentication/Login/loginSaga";
import forgotResetSaga from "../modules/Authentication/ForgotPassword/ForgotResetSaga";
export default function* rootSaga() {
  yield all([
    signUpSaga(),
    signInSaga(),
    workSpaceSaga(),
    queueSaga(),
    forgotResetSaga()
  ]);
}
