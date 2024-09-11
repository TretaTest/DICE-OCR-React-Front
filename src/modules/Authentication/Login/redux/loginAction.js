export const ActionTypes = {
    VALIDATE_LOGIN_USER_REQUEST: 'VALIDATE_LOGIN_USER_REQUEST',
    VALIDATE_LOGIN_USER_SUCCESS: 'VALIDATE_LOGIN_USER_SUCCESS',
    VALIDATE_LOGIN_USER_FAILURE: 'VALIDATE_LOGIN_USER_FAILURE',
  };
  const defaultParams={
    data:{},
    onSuccess:()=>{},
    onErrors:()=>{}
  }
export const userLoginRequest = ({data={},onSuccess=defaultParams.onSuccess,onErrors=defaultParams.onErrors}) => {
  return {
    type: ActionTypes.VALIDATE_LOGIN_USER_REQUEST,
    payload:{data,onSuccess,onErrors},
  };
};

// export const userLoginSuccess = (payload) => {
//   console.log('payload', payload)
//   ({
//   type: ActionTypes.VALIDATE_LOGIN_USER_SUCCESS,
//   payload,
// })};

// export const userLoginFailure = (error) => ({
//   type: ActionTypes.VALIDATE_LOGIN_USER_FAILURE,
//   error,
// });
