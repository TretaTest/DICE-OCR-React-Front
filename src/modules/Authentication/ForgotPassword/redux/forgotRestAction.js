export const ActionTypes = {
  FORGOT_PASSWORD_REQUEST: "FORGOT_PASSWORD_REQUEST",
  FORGOT_PASSWORD_SUCCESS: "FORGOT_PASSWORD_SUCCESS",
  FORGOT_PASSWORD_FAILURE: "FORGOT_PASSWORD_FAILURE",

  RESET_PASSWORD_REQUEST: "RESET_PASSWORD_REQUEST",
  RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS",
  RESET_PASSWORD_FAILURE: "RESET_PASSWORD_FAILURE",

  OTP_VALIDATE_REQUEST: "OTP_VALIDATE_REQUEST",
  OTP_VALIDATE_SUCCESS: "OTP_VALIDATE_SUCCESS",
  OTP_VALIDATE_FAILURE: "OTP_VALIDATE_FAILURE",
};
const defaultParams = {
  data: {},
  onSuccess: () => {},
  onErrors: () => {},
};
export const forgotPasswordRequest = ({
  data = {},
  onSuccess = defaultParams.onSuccess,
  onErrors = defaultParams.onErrors,
}) => {
  return {
    type: ActionTypes.FORGOT_PASSWORD_REQUEST,
    payload: { data, onSuccess, onErrors },
  };
};
export const getOTPValidateRequest = ({
  data = {},
  onSuccess = defaultParams.onSuccess,
  onErrors = defaultParams.onErrors,
}) => {
  return {
    type: ActionTypes.OTP_VALIDATE_REQUEST,
    payload: { data, onSuccess, onErrors },
  };
};
export const resetPasswordRequest = ({
  data = {},
  onSuccess = defaultParams.onSuccess,
  onErrors = defaultParams.onErrors,
}) => {
  return {
    type: ActionTypes.RESET_PASSWORD_REQUEST,
    payload: { data, onSuccess, onErrors },
  };
};
