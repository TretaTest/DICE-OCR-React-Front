import "../../../../App.css";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import {
  Row,
  Col,
  Spinner,
  Form as BootstrapForm,
  ProgressBar,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "js-cookie";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { FloatingLabel } from "react-bootstrap";
import { isAuth } from "../../../..//utils/auth";
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
  LOGIN_ROUTE,
  PASSWORD_SUCCESS,
} from "../../../../constants/RouteNameConstant";
import { resetPasswordRequest } from "../redux/forgotRestAction";
function ResetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = isAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState("");
  const [labelForPassword, setLabelForPassword] = useState("");

  const storedEmail = Cookies.get("email") || "";
  const storedPassword = Cookies.get("password") || "";
  const initialValues = {
    password: "",
    confirmPassword: "",
  };
  const { loading } = useSelector((state) => ({
    loading: state.forgotReset.loading || false,
  }));
  const validationSchema = Yup.object({
    password: Yup.string()
      .matches(/\S/i, PASSWORD_VALID)
      .required(PASSWORD_REQURIED),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const onSubmit = (values, { setSubmitting }) => {
    const apiParams = {
      data: { password: values.password },
      onSuccess: () => {
        navigate(PASSWORD_SUCCESS);
      },
    };

    dispatch(resetPasswordRequest(apiParams));
  };

  const checkStrength = (password) => {
    let specialCharCount = 0;
    let numberCount = 0;

    // Regular expressions to count special characters and numbers
    const specialCharRegex = /[^A-Za-z0-9]/g;
    const numberRegex = /[0-9]/g;

    // Match special characters and numbers
    const specialChars = password.match(specialCharRegex);
    const numbers = password.match(numberRegex);

    if (specialChars) specialCharCount = specialChars.length;
    if (numbers) numberCount = numbers.length;

    // Determine strength
    if (specialCharCount > 1 && numberCount > 1) {
      setStrength("Strong");
      setLabelForPassword("Strong");
    } else if (specialCharCount === 1 || numberCount === 1) {
      setStrength("Medium");
      setLabelForPassword("Medium");
    } else if (specialCharCount === 0 || numberCount === 0) {
      setStrength("Weak");
      setLabelForPassword("Weak");
    }
  };
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
                      <h3>Set New Password</h3>
                      <p className="mb-0 opacity-70">
                        Must be at least 8 characters.
                      </p>
                    </div>
                  </div>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                  >
                    {({ isSubmitting, handleChange }) => (
                      <Form>
                        <div className="form-group mb-3 position-relative">
                          <FloatingLabel
                            controlId="floatingInput"
                            label="Password"
                            className="mb-3"
                          >
                            <Field
                              type={showPassword ? "text" : "password"}
                              name="password"
                              as={BootstrapForm.Control}
                              placeholder={PASSWORD_PLACEHOLDER}
                              className="form-control"
                              onChange={(e) => {
                                handleChange(e);
                                checkStrength(e.target.value);
                              }}
                            />
                          </FloatingLabel>
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-danger"
                          />
                          <div className="form-group mb-3">
                            <div className="progressBar-login py-3">
                              <ProgressBar
                                className={`${
                                  strength === "Weak"
                                    ? "weak"
                                    : strength === "Medium"
                                    ? "medium"
                                    : strength === "Strong"
                                    ? "strong"
                                    : "weak"
                                }`}
                                now={
                                  strength === "Weak" ||
                                  strength === "Medium" ||
                                  strength === "Strong"
                                    ? 100
                                    : 0
                                }
                              />
                              <ProgressBar
                                className={`${
                                  strength === "Weak"
                                    ? "weak"
                                    : strength === "Medium"
                                    ? "medium"
                                    : strength === "Strong"
                                    ? "strong"
                                    : "weak"
                                }`}
                                now={
                                  strength === "Medium" || strength === "Strong"
                                    ? 100
                                    : 0
                                }
                              />
                              <ProgressBar
                                className={`${
                                  strength === "Weak"
                                    ? "weak"
                                    : strength === "Medium"
                                    ? "medium"
                                    : strength === "Strong"
                                    ? "strong"
                                    : "weak"
                                }`}
                                now={strength === "Strong" ? 100 : 0}
                              />

                              <span
                                className={`fw-medium ${
                                  strength === "Weak"
                                    ? "weak-text"
                                    : strength === "Medium"
                                    ? "medium-text"
                                    : strength === "Strong"
                                    ? "strong-text"
                                    : "weak"
                                }`}
                              >
                                {labelForPassword}
                                {/* Good to Go */}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="form-group mb-3 position-relative">
                          <FloatingLabel
                            controlId="floatingInput"
                            label="Confirm Password"
                            className="mb-3"
                          >
                            <Field
                              type={showPassword ? "text" : "password"}
                              name="confirmPassword"
                              as={BootstrapForm.Control}
                              placeholder={PASSWORD_PLACEHOLDER}
                              className="form-control"
                            />

                            {/* <div
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
                            </div> */}
                          </FloatingLabel>
                          <ErrorMessage
                            name="confirmPassword"
                            component="div"
                            className="text-danger"
                          />
                        </div>

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
                            Next
                          </Button>
                        </div>
                      </Form>
                    )}
                  </Formik>

                  <div className="my-3 text-center fw-bold  fnt-18">
                    <span className="opacity-50">Back to </span>
                    <a href={"/login"} className="link-color">
                      Login
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

export default ResetPassword;
