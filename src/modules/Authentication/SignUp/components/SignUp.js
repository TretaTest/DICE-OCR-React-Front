import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Form as BootstrapForm,
  FloatingLabel,
  Spinner,
  ProgressBar,
} from "react-bootstrap";
import {
  EMAIL_ID_PLACEHOLDER,
  DOMAIN_PLACEHOLDER,
  PASSWORD_PLACEHOLDER,
  FIRST_NAME_PLACEHOLDER,
  LAST_NAME_PLACEHOLDER,
  COMPANY_PLACEHOLDER,
} from "../../../../constants/PlaceHolderNames";
import {
  EMAIL_ID_REQURIED,
  EMAIL_ID_VALID,
  PASSWORD_REQURIED,
  PASSWORD_VALID,
  DOMAIN_REQUIRED,
  FIRST_NAME_REQURIED,
  PHONE_NUMBER_REQURIED,
  LAST_NAME_REQURIED,
  COMPANY_REQURIED,
} from "../../../../constants/ValidationMessageConstats";
import {
  FORGOT_PASSWORD,
  LOGIN_ROUTE,
  SIGNUP_STEP2_ROUTE,
} from "../../../../constants/RouteNameConstant";
import { registerSuccess, registrationRequest } from "../redux/signUpAction";
import "react-phone-number-input/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../App.css";
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState("");
  const [currentStep, setCurrentStep] = useState(1); // Track the current step
  const [labelForPassword, setLabelForPassword] = useState("");
  const [userFormOneData, setUserFormOneData] = useState({});
  const storedEmail = Cookies.get("email") || "";
  const storedPassword = Cookies.get("password") || "";

  const initialValuesForm1 = {
    fname: "",
    lname: "",
    company: "",
    phoneno: "",
  };
  const initialValuesForm2 = {
    email: storedEmail,
    password: storedPassword,
    rememberMe: !!storedEmail && !!storedPassword,
    domain: "",
    agree: false,
  };
  const { loading, signup } = useSelector((state) => ({
    loading: state.signup.loading || false,
  }));
  const validationSchema = Yup.object({
    email: Yup.string()
      .email(EMAIL_ID_VALID)
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, EMAIL_ID_VALID)
      .required(EMAIL_ID_REQURIED),
    password: Yup.string()
      .matches(/\S/i, PASSWORD_VALID)
      .required(PASSWORD_REQURIED),

    domain: Yup.string().required(DOMAIN_REQUIRED),
    agree: Yup.boolean()
      .oneOf([true], "You must accept the terms and conditions.")
      .required("You must accept the terms and conditions."),
  });
  const validationSchemaForm1 = Yup.object({
    fname: Yup.string().required(FIRST_NAME_REQURIED),
    lname: Yup.string().required(LAST_NAME_REQURIED),
    company: Yup.string().required(COMPANY_REQURIED),
    phoneno: Yup.string()
      .required(PHONE_NUMBER_REQURIED)
      .matches(/^\+[1-9]\d{1,14}$/, "Phone number is not valid"),
  });
  const onSubmitForm1 = (data, { setSubmitting }) => {
    const loginRequestData = {
      fname: data.fname,
      lname: data.lname,
      company: data.company,
      phonno: data.phoneno,
    };
    setUserFormOneData(loginRequestData);
    if (data.rememberMe) {
      Cookies.set("email", data.email, { expires: 7 });
      Cookies.set("password", data.password, { expires: 7 });
    } else {
      Cookies.remove("email");
      Cookies.remove("password");
    }
    dispatch(
      registerSuccess({
        fname: data.fname,
        lname: data.lname,
        company: data.company,
        phonno: data.phoneno,
      })
    );
    navigate(SIGNUP_STEP2_ROUTE);
    setCurrentStep(currentStep + 1);

    // setSubmitting(false);
  };
  const onSubmitForm2 = (data, { setSubmitting }) => {
    const requestData = {
      firstname: userFormOneData.fname,
      lastname: userFormOneData.lname,
      companyName: userFormOneData.company,
      contactNo: userFormOneData.phonno,
      email: data.email,
      username: data.email,
      password: data.password,
      domain: data.domain,
      registrationType: "Portal",
      // rememberMe: data.rememberMe,
    };
    const apiParams = {
      data: requestData,
      onSuccess: (res) => {
        navigate(LOGIN_ROUTE);
      },
      onErrors: (err) => {},
    };
    if (data.rememberMe) {
      Cookies.set("email", data.email, { expires: 7 });
      Cookies.set("password", data.password, { expires: 7 });
    } else {
      Cookies.remove("email");
      Cookies.remove("password");
    }

    dispatch(registrationRequest(apiParams));
    setSubmitting(false);
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
    //here if more then 1 special charcter iand digit  there then
    // its consider as strong and if only one special character over therer then
    // consider as medium
    // Determine strength
    if ((specialCharCount > 1 || specialCharCount === 1) && numberCount > 1) {
      setStrength("Strong");
      setLabelForPassword("Strong");
    } else if (specialCharCount === 1 || numberCount === 1 || numberCount > 1) {
      setStrength("Medium");
      setLabelForPassword("Medium");
    } else if (specialCharCount === 0 || numberCount === 0) {
      setStrength("Weak");
      setLabelForPassword("Weak");
    }
  };
  // useEffect(() => {
  //   // Reset to the first step on component mount
  //   setCurrentStep(1);
  // }, []);
  useEffect(() => {
    // Listen to the URL and set the current step based on it
    if (location.pathname.includes("step2")) {
      setCurrentStep(2);
    } else {
      setCurrentStep(1);
    }
  }, [location.pathname]);
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
                      <p className="mb-0 opacity-70">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                  <Formik
                    initialValues={initialValuesForm1}
                    validationSchema={validationSchemaForm1}
                    onSubmit={onSubmitForm1}
                  >
                    {({
                      isSubmitting,
                      handleChange,
                      setFieldValue,
                      values,
                    }) => (
                      <Form>
                        {currentStep === 1 && (
                          <>
                            <div className="form-group mb-3 position-relative">
                              <FloatingLabel
                                controlId="floatingInput"
                                label="First Name*"
                                className="mb-3"
                              >
                                <Field
                                  type="text"
                                  as={BootstrapForm.Control}
                                  name="fname"
                                  placeholder={FIRST_NAME_PLACEHOLDER}
                                  className="form-control"
                                />
                              </FloatingLabel>
                              <ErrorMessage
                                name="fname"
                                component="div"
                                className="text-danger"
                              />
                            </div>
                            <div className="form-group position-relative">
                              <FloatingLabel
                                controlId="floatingInput"
                                label="Last Name*"
                                className="mb-3"
                              >
                                <Field
                                  type="text"
                                  name="lname"
                                  as={BootstrapForm.Control}
                                  placeholder={LAST_NAME_PLACEHOLDER}
                                  className="form-control"
                                />
                              </FloatingLabel>
                              <ErrorMessage
                                name="lname"
                                component="div"
                                className="text-danger"
                              />
                            </div>
                            <div className="form-group mb-3 position-relative">
                              <FloatingLabel
                                controlId="floatingInput"
                                label="Company*"
                                className="mb-3"
                              >
                                <Field
                                  type="text"
                                  name="company"
                                  as={BootstrapForm.Control}
                                  placeholder={COMPANY_PLACEHOLDER}
                                  className="form-control"
                                />
                              </FloatingLabel>
                              <ErrorMessage
                                name="company"
                                component="div"
                                className="text-danger"
                              />
                            </div>

                            <div className="form-group mb-3 position-relative">
                              <FloatingLabel
                                controlId="floatingInput"
                                label="Phone Number*"
                                className="mb-3"
                              >
                                <PhoneInput
                                  international
                                  defaultCountry="US"
                                  value={values.phoneno}
                                  onChange={(value) =>
                                    setFieldValue("phoneno", value)
                                  }
                                  className="form-control"
                                />
                              </FloatingLabel>
                              <ErrorMessage
                                name="phoneno"
                                component="div"
                                className="text-danger"
                              />
                            </div>
                            <div className="d-grid gap-2 mx-5 my-4">
                              <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                className="h-56 fnt-20"
                              >
                                Next
                              </Button>
                              {/* <a href="#step2" className="h-56 fnt-20" onClick={()=>onSubmitForm1()}>
                                Next
                              </a> */}
                            </div>
                          </>
                        )}
                      </Form>
                    )}
                  </Formik>
                  <Formik
                    initialValues={initialValuesForm2}
                    validationSchema={validationSchema}
                    onSubmit={onSubmitForm2}
                  >
                    {({
                      isSubmitting,
                      handleChange,
                      setFieldValue,
                      values,
                    }) => (
                      <Form>
                        {currentStep === 2 && (
                          <>
                            <div
                              id={"step2"}
                              className="form-group mb-3 position-relative"
                            >
                              <FloatingLabel
                                controlId="floatingInput"
                                label="Work Email*"
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
                            <div className="form-group mb-3 ">
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
                                  onChange={(e) => {
                                    handleChange(e);
                                    checkStrength(e.target.value);
                                  }}
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
                                label="Domain*"
                                className="mb-3"
                              >
                                <Field
                                  type="text"
                                  name="domain"
                                  placeholder={DOMAIN_PLACEHOLDER}
                                  className="form-control"
                                />
                              </FloatingLabel>
                              <ErrorMessage
                                name="domain"
                                component="div"
                                className="text-danger"
                              />
                            </div>
                            <div className="form-group mb-3 d-flex align-items-center justify-content-between">
                              <div className="form-check">
                                <Field
                                  type="checkbox"
                                  name="agree"
                                  className="form-check-input"
                                  id="agree"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="agree"
                                >
                                  Terms & Conditions
                                </label>
                                <ErrorMessage
                                  name="agree"
                                  component="div"
                                  className="text-danger"
                                />
                              </div>
                              <a  href={`${FORGOT_PASSWORD}`} className="link-color fw-bold">
                                Forgot Password?
                              </a>
                            </div>

                            <div className="d-grid gap-2 mx-5 my-4">
                              <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                className="h-56 fnt-20"
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
                                Sign Up
                              </Button>
                            </div>
                          </>
                        )}
                      </Form>
                    )}
                  </Formik>

                  <div className="my-3 text-center fw-bold  fnt-18">
                    <span className="opacity-50">Already a member? </span>
                    <a href="/login" className="link-color">
                      Log in
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
};

export default SignUp;
