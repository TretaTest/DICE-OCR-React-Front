export const ActionTypes = {
    REGISTRATION_REQUEST: 'REGISTRATION_REQUEST',
    REGISTRATION_SUCCESS: 'REGISTRATION_SUCCESS',
    REGISTRATION_FAILURE: 'REGISTRATION_FAILURE',
  };
  const defaultParams={
    data:{},
    onSuccess:()=>{},
    onErrors:()=>{}
  }
  export const registrationRequest = ({data={},onSuccess=defaultParams.onSuccess,onErrors=defaultParams.onErrors}) => {
    return {
      type: ActionTypes.REGISTRATION_REQUEST,
      payload:{data,onSuccess,onErrors},
    };
  };
  
export const registerSuccess = (payload) => ({
  type: ActionTypes.REGISTRATION_SUCCESS,
  payload,
});

// export const registerFailure = (error) => ({
//   type: ActionTypes.REGISTRATION_FAILURE,
//   error,
// });
