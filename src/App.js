import "./App.css";
import { Toaster } from "react-hot-toast";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  useParams
} from "react-router-dom";
import Login from "./modules/Authentication/Login/components/Login";
import Dashboard from "./modules/Authorization/Dashboard/components/Dashboard";
import SignUp from "./modules/Authentication/SignUp/components/SignUp";
import Documents from "./modules/Authorization/Documents/Documents";
import Accounts from "./modules/Authorization/Accounts/Accounts";
import InviteColleague from "./modules/Authorization/InviteColleagues/InviteColleague";
import Setting from "./modules/Authorization/Settings/Setting";
import Support from "./modules/Authorization/Support/Support";
import Help from "./modules/Authorization/Support/Help";
import {
  DASHBOARD_ROUTE,
  DOCUMENT_ROUTE,
  SUPPORT_ROUTE,
  SETTING_ROUTE,
  SIGNUP_ROUTE,
  LOGIN_ROUTE,
  INVITE_COLLEAGUE,
  MANAGE_ACCOUNT_ROUTE,
  GET_HELP_ROUTE,
  BASIC_SETTING_ROUTE,
  FIELDS_TO_CAPTURE_ROUTE,
  EMAIL_SETTING_ROUTE,
  AUTOMATION_SETTING_ROUTE,
  ACCESS_SETTING_ROUTE,
  SIGNUP_STEP2_ROUTE,
  SIGNUP_STEP1_ROUTE,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  OTP_VERIFICATION,
  PASSWORD_SUCCESS,
  DOCUMENT_MAPPING_ROUTE,
} from "./constants/RouteNameConstant";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./components/NoFoundData";
import { NOTFOUND } from "./constants/ApiUrlConstant";
import { PrivateRoute } from "./routes/privateRoute";
import OTPVerification from "./modules/Authentication/OtpVerification/OTPVerification";
import ForgotPassword from "./modules/Authentication/ForgotPassword/components/ForgotPassword";
import ResetPassword from "./modules/Authentication/ForgotPassword/components/ResetPassword";
import SuccessModal from "./components/SuccessModal";
import DocMap from "./modules/Authorization/DocMap/DocMap";
function App() {
  // const location = useLocation();
  return (
    <>
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Login />} />
          
          <Route path={LOGIN_ROUTE} element={<Login />} />
          {/* <Route path={SIGNUP_ROUTE} element={<SignUp />} /> */}
          <Route path={SIGNUP_STEP1_ROUTE} element={<SignUp />} />
          <Route path={SIGNUP_STEP2_ROUTE} element={<SignUp />} />
          <Route path={FORGOT_PASSWORD} element={<ForgotPassword />} />
          <Route path={RESET_PASSWORD} element={<ResetPassword />} />
          <Route path={OTP_VERIFICATION} element={<OTPVerification />} />
          <Route path={PASSWORD_SUCCESS} element={<SuccessModal />} />

          <Route path="/" element={<PrivateRoute />}>
            <Route path={DASHBOARD_ROUTE} element={<Dashboard />} />
            <Route path={DOCUMENT_ROUTE} element={<Documents />} />
            <Route path={"/docmap"} element={<DocMap />} />
            <Route path={MANAGE_ACCOUNT_ROUTE} element={<Accounts />} />
            <Route path={INVITE_COLLEAGUE} element={<InviteColleague />} />
            <Route path={BASIC_SETTING_ROUTE} element={<Setting />} />
            <Route path={SUPPORT_ROUTE} element={<Support />} />
            <Route path={GET_HELP_ROUTE} element={<Help />} />
            <Route path={BASIC_SETTING_ROUTE} element={<Setting />} />
            <Route path={FIELDS_TO_CAPTURE_ROUTE} element={<Setting />} />
            <Route path={EMAIL_SETTING_ROUTE} element={<Setting />} />
            <Route path={AUTOMATION_SETTING_ROUTE} element={<Setting />} />
            <Route path={ACCESS_SETTING_ROUTE} element={<Setting />} />
          </Route>
          <Route path={NOTFOUND} element={<NotFound />} />
          <Route path="*" element={<Navigate to={NOTFOUND} replace />} />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
