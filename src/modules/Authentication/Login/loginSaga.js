import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { call, fork, put, takeLatest } from "redux-saga/effects";

import {
  ActionTypes,
} from "./redux/loginAction";
import { getApiRequest, postApiRequest } from "../../../features/axiosClient";
import { getUserInfoApi, lognApi } from "../../../constants/ApiUrlConstant";


const getUserApi = async (action) => {
  try {
    const data = await postApiRequest({ url: getUserInfoApi });
    return data;
  } catch (error) {
    throw error;
  }
};
function* loginUserSaga(action) {
  
  const { data, onSuccess, onErrors } = action.payload;
  try {
    const response = yield call(postApiRequest, { url: lognApi, data: data });
    if (response?.status === 200) {
      toast.success("Logged In successfully..");
      const loginData = response?.data.content.token;
      const userObjectJson = JSON.stringify(loginData);
      localStorage.setItem("token", response?.data.content.token);
      localStorage.setItem("expire_time", response?.data.content.expire_time);
      
    // Calculate the time difference between now and the expiration time
    const expireTime = new Date(response?.data.content.expire_time).getTime();
    const currentTime = new Date().getTime();
    const timeUntilExpiration = expireTime - currentTime;
    // Set a timeout to automatically log out the user when the token expires
    setTimeout(() => {
       // Remove token and expiration time from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('expire_time');
    }, timeUntilExpiration);
      // Cookies.set("userData", userObjectJson, { expires: 1 / 48 });

    
      const userDetails = yield call(getUserApi);
      if (userDetails.data.content) {
       
        localStorage.setItem(
          "name",
          userDetails.data.content.firstName +
            " " +
            userDetails.data.content.lastName
        );
      }
      if (onSuccess) {
        onSuccess(response);
        // yield put(userLoginSuccess(response));
      yield put({ type: ActionTypes.VALIDATE_LOGIN_USER_SUCCESS, payload: response.data.content });

      }
      data?.rememberMe === false &&
        Cookies.remove("email") &&
        Cookies.remove("password");
    } else {
      onErrors(response);
      // yield put(userLoginFailure(response.response));
      yield put({ type: ActionTypes.VALIDATE_LOGIN_USER_FAILURE, payload: response.response });

    }
  } catch (err) {
    toast.error(err.response.data.message);
    yield put({ type: ActionTypes.VALIDATE_LOGIN_USER_FAILURE, payload: err });
  }
}
// function* handleLoginAPI(action) {
//   const { data, onSuccess, onErrors } = action.payload;
//   try {
//     const response = yield call(loginAPI, data);
//     const loginData = response?.data.content.token;
//     if (response?.status === 200) {
//       toast.success("Logged In successfully..");
//       const userObjectJson = JSON.stringify(loginData);
//       localStorage.setItem("token", response?.data.content.token);
//       Cookies.set("userData", userObjectJson, { expires: 1 / 48 });
//       const userDetails = yield call(getUserApi);
//       if (userDetails.data.content) {
//         Cookies.set(
//           "name",
//           userDetails.data.content.firstName +
//             " " +
//             userDetails.data.content.lastName
//         );
//         localStorage.setItem(
//           "name",
//           userDetails.data.content.firstName +
//             " " +
//             userDetails.data.content.lastName
//         );
//       }
//       data?.rememberMe === false &&
//         Cookies.remove("email") &&
//         Cookies.remove("password");
//       if (onSuccess) {
//         onSuccess(response);
//         yield put(userLoginSuccess(response));
//       }
//     } else {
//       onErrors(response.response.data.message);
//       yield put(userLoginFailure(response.response));
//     }
//   } catch (error) {
//     yield put(userLoginFailure(error));
//     onErrors(error.response.data);
//   }
// }

export function* watchLoginRequest() {
  yield takeLatest(ActionTypes.VALIDATE_LOGIN_USER_REQUEST, loginUserSaga);
}
function* signInSaga() {
  yield fork(watchLoginRequest);
}

export default signInSaga;
