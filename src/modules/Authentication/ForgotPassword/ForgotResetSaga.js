import toast from "react-hot-toast";
import { call, fork, put, takeLatest } from "redux-saga/effects";

import { ActionTypes } from "./redux/forgotRestAction";
import { getApiRequest, postApiRequest } from "../../../features/axiosClient";
import {
  getUserInfoApi,
  getValidateOTPAPi,
  lognApi,
  resetPasswordAPi,
  SendForgotPasswordEmail,
} from "../../../constants/ApiUrlConstant";

function* sendEmailRequest(action) {
  const { data, onSuccess, onErrors } = action.payload;

  try {
    const response = yield call(getApiRequest, {
      url: `${SendForgotPasswordEmail}${data.email}`,
      data: data,
    });
    if (response?.status === 200) {
      toast.success("Otp send to your account.");

      if (onSuccess) {
        onSuccess(response);
        yield put({
          type: ActionTypes.FORGOT_PASSWORD_SUCCESS,
          payload: data.email,
        });
      }
    } else {
      toast.error(response?.data?.message);
      onErrors(response?.data?.message);
      yield put({
        type: ActionTypes.FORGOT_PASSWORD_FAILURE,
        payload: response.data,
      });
    }
  } catch (error) {
    onErrors(error.response.data);
    toast.error(error.response.data.message);
    yield put({
      type: ActionTypes.FORGOT_PASSWORD_FAILURE,
      payload: error.response.data,
    });
  }
}
function* getOTPValidateRequest(action) {
  const { data, onSuccess, onErrors } = action.payload;

  try {
    const response = yield call(postApiRequest, {
      url: `${getValidateOTPAPi}${data.email}&OTP=${data.otp}`,
      // data: data,
    });
    if (response?.status === 200) {
      toast.success("OTP validate successfully.");
      localStorage.setItem("token", response?.data.content.token);
      localStorage.setItem("expire_time", response?.data.content.expire_time);

      if (onSuccess) {
        onSuccess(response);
        yield put({ type: ActionTypes.OTP_VALIDATE_SUCCESS, data: response });
      }
    } else {
      toast.error(response?.data?.message);
      onErrors(response?.data?.message);
      yield put({
        type: ActionTypes.OTP_VALIDATE_FAILURE,
        data: response.data,
      });
    }
  } catch (error) {
    onErrors(error.response.data);
    toast.error(error.response.data.message);
    yield put({
      type: ActionTypes.OTP_VALIDATE_FAILURE,
      data: error.response.data,
    });
  }
}
function* resetPasswordRequest(action) {
  const { data, onSuccess, onErrors } = action.payload;

  try {
    const response = yield call(postApiRequest, {
      url: `${resetPasswordAPi}${data.password}`,
      // data: data,
    });
    if (response?.status === 200) {
      toast.success("password updated successfully.");
      
      if (onSuccess) {
        onSuccess(response);
        yield put({ type: ActionTypes.RESET_PASSWORD_SUCCESS, data: response });
      }
    } else {
      toast.error(response?.data?.message);
      onErrors(response?.data?.message);
      yield put({
        type: ActionTypes.RESET_PASSWORD_FAILURE,
        data: response.data,
      });
    }
  } catch (error) {
    onErrors(error.response.data);
    toast.error(error.response.data.message);
    yield put({
      type: ActionTypes.RESET_PASSWORD_FAILURE,
      data: error.response.data,
    });
  }
}
export function* watchForgotResetRequest() {
  yield takeLatest(ActionTypes.FORGOT_PASSWORD_REQUEST, sendEmailRequest);
  yield takeLatest(ActionTypes.OTP_VALIDATE_REQUEST, getOTPValidateRequest);
  yield takeLatest(ActionTypes.RESET_PASSWORD_REQUEST, resetPasswordRequest);
}
function* forgotResetSaga() {
  yield fork(watchForgotResetRequest);
}

export default forgotResetSaga;
