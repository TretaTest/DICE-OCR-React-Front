import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  FloatingLabel,
  Container,
  Button,
  Row,
  Card,
  Col,
  Spinner,
  Form as BootstrapForm,
} from "react-bootstrap";
import {
  EMAIL_ID_REQURIED,
  EMAIL_ID_VALID,
  PASSWORD_REQURIED,
  PASSWORD_VALID,
} from "../../../../constants/ValidationMessageConstats";
import {
  EMAIL_ID_PLACEHOLDER,
  PASSWORD_PLACEHOLDER,
} from "../../../../constants/PlaceHolderNames";
import {
  DOCUMENT_ROUTE,
  FORGOT_PASSWORD,
} from "../../../../constants/RouteNameConstant";
import { userLoginRequest } from "../redux/loginAction";
import { isAuth } from "../../../../utils/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../App.css";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = isAuth();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const storedEmail = Cookies.get("email") || "";
  const storedPassword = Cookies.get("password") || "";
  const initialValues = {
    email: storedEmail,
    password: storedPassword,
    rememberMe: !!storedEmail && !!storedPassword,
  };
  const { loading } = useSelector((state) => ({
    loading: state.login.loading || false,
  }));
  const validationSchema = Yup.object({
    email: Yup.string()
      .email(EMAIL_ID_VALID)
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, EMAIL_ID_VALID)
      .required(EMAIL_ID_REQURIED),
    password: Yup.string()
      .matches(/\S/i, PASSWORD_VALID)
      .required(PASSWORD_REQURIED),
    // rememberMe: Yup.bool()
    // .oneOf([true], 'You must agree with our terms')
    // .required('You must agree with our terms'),
  });
  const onSubmit = (data, { setSubmitting }) => {
    const loginRequestData = {
      email: data.email,
      password: data.password,
    };
    if (data.rememberMe) {
      Cookies.set("email", data.email, { expires: 7 });
      Cookies.set("password", data.password, { expires: 7 });
    } else {
      Cookies.remove("email");
      Cookies.remove("password");
    }

    setSubmitting(false);
    const apiParams = {
      data: loginRequestData,
      onSuccess: (res) => {
        navigate(DOCUMENT_ROUTE);
      },
      onErrors: (res) => {
        toast.error(res.message);
      },
    };
    // const onSuccess=(res)=>{console.log('res', res)}
    // dispatch(userLoginRequest(loginRequestData,onSuccess))
    dispatch(userLoginRequest(apiParams));
  };
  useEffect(() => {
    if (auth && localStorage.getItem("name")) {
      navigate(DOCUMENT_ROUTE);
    }
  }, [auth]);
  return (
    <>
      <section className="loginBg">
        <Container>
          <Row className="align-items-center justify-content-center h-100vh">
            <Col sm={6}>
              <Card className="loginCard">
                <Card.Body>
                  <div className="d-flex align-items-center gap-3 mb-5">
                    <img
                      alt="logo"
                      src="/Assets/images/logo.svg"
                      className="img-fluid"
                    />
                    <div>
                      <h3>Get Started with Dice</h3>
                      {/* <p className="mb-0 opacity-70">
                        Tell us Something about You
                      </p> */}
                    </div>
                  </div>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                  >
                    {({ isSubmitting }) => (
                      <Form>
                        <div className="form-group mb-3 position-relative">
                          <FloatingLabel
                            controlId="floatingInput"
                            label="Email Address*"
                            className="mb-3"
                          >
                            <Field
                              type="text"
                              name="email"
                              as={BootstrapForm.Control}
                              placeholder={EMAIL_ID_PLACEHOLDER}
                              className="form-control"
                            />
                          </FloatingLabel>
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                        <div className="form-group mb-3 position-relative">
                          <FloatingLabel
                            controlId="floatingInput"
                            label="Password*"
                            className="mb-3"
                          >
                            <Field
                              type={showPassword ? "text" : "password"}
                              name="password"
                              as={BootstrapForm.Control}
                              placeholder={PASSWORD_PLACEHOLDER}
                              className="form-control"
                            />

                            <div
                              className="input-group-icon cursor-pointer"
                              onClick={() => setShowPassword(!showPassword)}
                              style={{ cursor: "pointer", margin: "auto" }}
                            >
                              {showPassword ? (
                                <span className="field-icon fnt-18">
                                  <i className="icon-eye"></i>
                                </span>
                              ) : (
                                <span className="field-icon fnt-22">
                                  <i className="icon-eye-off"></i>
                                </span>
                              )}
                            </div>
                          </FloatingLabel>
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-danger"
                          />
                        </div>

                        <div className="form-group mb-3 d-flex align-items-center justify-content-between">
                          <div className="form-check">
                            <Field
                              type="checkbox"
                              name="rememberMe"
                              className="form-check-input"
                              id="agree"
                            />
                            <label className="form-check-label" htmlFor="agree">
                              Remember me
                            </label>
                          </div>
                          <a
                            href={`${FORGOT_PASSWORD}`}
                            className="link-color fw-bold"
                          >
                            Forgot Password?
                          </a>
                        </div>
                        <ErrorMessage
                          name="agree"
                          component="div"
                          className="text-danger"
                        />
                        <div className="d-grid gap-2 mx-5 my-4">
                          <Button
                            variant="primary"
                            size="lg"
                            className="h-56 fnt-20"
                            type="submit"
                            disabled={loading ? true : false}
                          >
                            {loading && (
                              <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                              />
                            )}
                            Log in
                          </Button>
                        </div>
                      </Form>
                    )}
                  </Formik>

                  <div className="my-3 text-center fw-bold  fnt-18">
                    <span className="opacity-50">Don't have an account? </span>
                    <a href="/signup/step1" className="link-color">
                      Sign Up
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Login;
