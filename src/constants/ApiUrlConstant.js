export const signupApi = "/api/Login/register";
export const lognApi = "/api/Login/login";
export const getUserInfoApi="/api/Login/GetUserInformation";
export const SendForgotPasswordEmail="/api/Login/SendForgotPasswordEmail?email=";
export const getValidateOTPAPi="/api/Login/ValidateOTP?EmailId=";
export const resetPasswordAPi="/api/Login/UpdateUserPassword?Password=";


//queue
export const createQueueApi = "/api/Queue";
export const putQueueApi = "/api/Queue";
export const deleteQueueApi = "/api/Queue/Workspace/DeleteQueue";
export const getQueueApi = "/api/Queue/GetAllQueues";
export const getQueueOnlyApi = "/api/Queue";
//workspace
export const createWorkSpaceApi = "/api/Workspace";
export const deleteWorkSpaceApi = "/api/Workspace/DeleteWorkspace";
export const getWorkSpacesApi="/api/Workspace/GetAllWorkspaces"
export const getWorkSpaceByIdApi="/api/Workspace"
export const putWorkSpacesApi="/api/Workspace"
export const moveQueueInWorkSpacesApi="/api/Queue/MoveQueueToAnotherWorkspace"
export const duplicateQueueInWorkSpacesApi="/api/Queue/DuplicateQueue"
export const editQueueFieldJSONApi="/api/Queue/ModifyFieldJSON"
export const uploadInvoiceDocAPI="/api/DocumentIntelligences/UploadDocument"
export const getActiveQueueDocumentListAPI="/api/Document/GetDocumentsInQueue"

export const getQueueTypesApi="/api/Queue/GetQueueTypes"
export const getRegionApi="/api/Workspace/RegionInformation"
export const NOTFOUND = '/404';
