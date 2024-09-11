import React, { useEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { FORGOT_PASSWORD, LOGIN_ROUTE, OTP_VERIFICATION, PASSWORD_SUCCESS, RESET_PASSWORD } from "../constants/RouteNameConstant";
import { isAuth } from "../utils/auth";

export const PrivateRoute = () => {
  const navigate = useNavigate();
  const auth = isAuth();
  const location = useLocation();

  useEffect(() => {
    if (!auth && location.pathname !== FORGOT_PASSWORD) {
      navigate(LOGIN_ROUTE);
    }else if(!auth && location.pathname === FORGOT_PASSWORD){
      navigate(FORGOT_PASSWORD)
    }
    else if(!auth && location.pathname === RESET_PASSWORD){
      navigate(RESET_PASSWORD)
    }
    else if(!auth && location.pathname === OTP_VERIFICATION){
      navigate(OTP_VERIFICATION)
    }
    else if(!auth && location.pathname === PASSWORD_SUCCESS){
      navigate(PASSWORD_SUCCESS)
    }
    
  }, [auth, navigate]);
  useEffect(() => {
    const storedExpireTime = localStorage.getItem("expire_time");
    if (storedExpireTime) {
      const expireTime = new Date(storedExpireTime).getTime();
      const currentTime = new Date().getTime();
      // console.log('expireTime', expireTime)
      // console.log('currentTime', currentTime)
      const timeUntilExpiration = expireTime - currentTime;
      // console.log('timeUntilExpiration', timeUntilExpiration)
      // If the token is still valid, set the timeout for logout
      if (timeUntilExpiration > 0) {
        setTimeout(() => {
          localStorage.removeItem("token");
          localStorage.removeItem("expire_time");
          navigate(LOGIN_ROUTE);
        }, timeUntilExpiration);
      } else {
        // If the token has already expired, log out immediately
        localStorage.removeItem("token");
        localStorage.removeItem("expire_time");
        navigate(LOGIN_ROUTE);
      }
    }
  }, []);
  return auth ? <Outlet /> : null;
};

export default PrivateRoute;
