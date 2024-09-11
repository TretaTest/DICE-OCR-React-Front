import React from 'react';

import { Link } from 'react-router-dom';
import { LOGIN_ROUTE } from '../constants/RouteNameConstant';


const NotFound = () => {
  return (
    <>
      <div className="position-relative overflow-hidden min-vh-100 w-100 d-flex align-items-center justify-content-center">
        <div className="d-flex align-items-center justify-content-center w-100">
          <div className="row justify-content-center w-100">
            <div className="col-lg-4">
              <div className="text-center">
                {/* <img
                  src=""
                  alt="Page Not Found"
                  className="img-fluid"
                  width={500}
                /> */}
                <h1 className="fw-semibold mb-7 fs-9">Opps!!!</h1>
                <h4 className="fw-semibold mb-7">
                  This page you are looking for could not be found.
                </h4>
                <Link
                  className="btn btn-primary"
                  to={LOGIN_ROUTE}
                >
                  Go Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default NotFound;