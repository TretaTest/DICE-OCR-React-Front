import { put, takeLatest, fork, call } from 'redux-saga/effects';
import { ActionTypes, registerFailure, registerSuccess } from './redux/signUpAction';
import {postApiRequest} from '../../../features/axiosClient';
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { signupApi } from '../../../constants/ApiUrlConstant';


// const registerApi = async (action) => {
//     try {
//       const data = await postApiRequest("/api/Login/register", action);
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   };
  
  function* registerUserSaga(action) {
  const { data, onSuccess, onErrors } = action.payload;

    try {
      const response = yield call(postApiRequest, { url: signupApi, data: data });
      
      if (response?.status === 200) {
        toast.success("Registered successfully.");
       
        if(onSuccess){
          onSuccess(response)
          yield put({ type: ActionTypes.REGISTRATION_SUCCESS, payload: response });
        }
      } else {
        toast.error(response?.data?.message);
        onErrors(response?.data?.message)
        yield put({ type: ActionTypes.REGISTRATION_FAILURE, payload: response });
      }
    } catch (err) {
      toast.error(err.response.data.message);
      yield put({ type: ActionTypes.REGISTRATION_FAILURE, payload: err });
    }
  }
  
  // function* handleRegisterApi(action) {
  // const { data, onSuccess, onErrors } = action.payload;

  //   try {
  //     const response = yield call(registerApi, data);
  //     const loginData = response?.data?.content;
  //     if (response?.status === 200) {
  //       toast.success("Registered Succesfully");
  //       const userObjectJson = JSON.stringify(loginData);
  //       Cookies.set("userData", userObjectJson);
        
  //       if(onSuccess){
  //         onSuccess(response)
  //         yield put(registerSuccess(response));
  //       }
  //     } else {
  //       toast.error(response?.data?.message);
  //     onErrors(response?.data?.message)

  //       yield put(registerFailure(response));
  //     }
  //   } catch (error) {
  //     onErrors(error.response.data)
  //     yield put(registerFailure(error));
  //   }
  // }
  
  export function* watchRegistrationRequest() {
    yield takeLatest(ActionTypes.REGISTRATION_REQUEST, registerUserSaga);
  }
  function* signUpSaga() {
    yield fork(watchRegistrationRequest);
  }
  
  export default signUpSaga;
  