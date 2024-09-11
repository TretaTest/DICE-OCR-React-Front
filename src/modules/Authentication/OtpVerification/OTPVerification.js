import { useState } from "react";
import { FieldArray, Formik, Form as FormikForm } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
  Spinner,
  Button,
  Form,
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import {
  forgotPasswordRequest,
  getOTPValidateRequest,
} from "../ForgotPassword/redux/forgotRestAction";
import { RESET_PASSWORD } from "../../../constants/RouteNameConstant";
import "../../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// function OTPVerification() {
//     const navigate=useNavigate();
//     const dispatch=useDispatch();
//     const { forgotReset } = useSelector((state) => ({
//         forgotReset: state.forgotReset,

//       }));
//     const handleOTPValidate=(values)=>{
//         const apiParams={
//             data:{
//                 email:forgotReset.Email,
//                 otp:""
//             },
//             onSuccess:()=>{
//                 navigate(RESET_PASSWORD)
//             }
//         }
//         dispatch(getOTPValidateRequest(apiParams))
//     }
//     return (
//         <>
//             <section className='loginBg'>
//                 <Container>
//                     <Row className='align-items-center justify-content-center h-100vh'>
//                         <Col md={5}>
//                             <Card className='loginCard'>
//                                 <Card.Body className="p-0">
//                                     <div className='d-flex align-items-center gap-3 mb-5'>
//                                         <img alt="logo" src="/Assets/images/logo.svg" className="img-fluid" />
//                                         <div>
//                                             <h3>Get Started with Dice</h3>
//                                             {/* <p className='mb-0 opacity-70'>Tell us Something about You</p> */}
//                                         </div>
//                                     </div>
//                                     <Form>
//                                         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                                             <Form.Label>OTP Verification</Form.Label>
//                                             <div className="passcode-wrapper">
//                                                 <Form.Control type="email" placeholder="" />
//                                                 <Form.Control type="email" placeholder="" />
//                                                 <Form.Control type="email" placeholder="" />
//                                                 <Form.Control type="email" placeholder="" />
//                                                 <Form.Control type="email" placeholder="" />
//                                                 <Form.Control type="email" placeholder="" />
//                                             </div>
//                                         </Form.Group>
//                                         <div className="text-end">
//                                         <a href="/" className="link-color fw-bold fnt-16">Resend</a>
//                                         </div>
//                                         <div className="d-grid gap-2 mx-5 my-4">
//                                             <Button variant="primary" size="lg" className="h-56 fnt-20" onClick={()=>handleOTPValidate()}>
//                                                 Next
//                                             </Button>
//                                         </div>
//                                     </Form>

//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     </Row>
//                 </Container>

//             </section>
//         </>
//     );
// }

// export default OTPVerification;
const OTPVerificationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [resendClick, setResendClick] = useState(false);
  const { forgotReset, OTPLoading } = useSelector((state) => ({
    forgotReset: state.forgotReset,
    OTPLoading: state.forgotReset.loading,
  }));

  const validationSchema = Yup.object({
    otp: Yup.array()
      .of(
        Yup.string()
          .matches(/^\d{1}$/, "Must be a single digit")
          .required("Required")
      )
      .required("Required")
      .min(6, "Must be 6 digits")
      .max(6, "Must be 6 digits"),
  });

  const initialValues = {
    otp: ["", "", "", "", "", ""],
  };

  const handleOTPValidate = (values) => {
    const apiParams = {
      data: {
        email: forgotReset.Email,
        otp: values.otp.join(""),
      },
      onSuccess: () => {
        navigate(RESET_PASSWORD);
      },
      onErrors: (res) => {
        setError(true);
      },
    };
    dispatch(getOTPValidateRequest(apiParams));
  };
  const handleResendOTP = (e) => {
    e.preventDefault();
    const apiParams = {
      data: {
        email: forgotReset.Email,
      },
      onSuccess: () => {},
    };
    dispatch(forgotPasswordRequest(apiParams));
  };
  return (
    <section className="loginBg">
      <Container>
        <Row className="align-items-center justify-content-center h-100vh">
          <Col md={5}>
            <Card className="loginCard">
              <Card.Body className="p-0">
                <div className="d-flex align-items-center gap-3 mb-5">
                  <img
                    alt="logo"
                    src="/Assets/images/logo.svg"
                    className="img-fluid"
                  />
                  <div>
                    <h3>Get Started with Dice</h3>
                  </div>
                </div>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleOTPValidate}
                >
                  {({
                    values,
                    setFieldValue,
                    touched,
                    errors,
                    setFieldTouched,
                  }) => (
                    <FormikForm>
                      <Form.Group className="mb-3">
                        <Form.Label>OTP Verification</Form.Label>
                        <div className="passcode-wrapper">
                          <FieldArray name="otp">
                            {() => (
                              <>
                                {values.otp.map((digit, index) => (
                                  <Form.Control
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    placeholder=""
                                    className={`form-control ${
                                      errors?.otp?.filter((err) => err)
                                        ?.length > 0 || error
                                        ? "border-danger"
                                        : ""
                                    }`}
                                    value={digit}
                                    onChange={(e) => {
                                      setError(false);
                                      const val = e.target.value;
                                      setFieldTouched(
                                        `otp.${index}`,
                                        true,
                                        false
                                      ); // Mark the field as touched
                                      if (/^\d{1}$/.test(val)) {
                                        setFieldValue(`otp.${index}`, val);
                                        if (val && index < 5) {
                                          document
                                            .getElementById(`otp-${index + 1}`)
                                            .focus();
                                        }
                                      } else if (val === "") {
                                        setFieldValue(`otp.${index}`, val);
                                        if (index > 0) {
                                          document
                                            .getElementById(`otp-${index - 1}`)
                                            .focus();
                                        }
                                      }
                                    }}
                                    onKeyDown={(e) => {
                                      if (
                                        e.key === "Backspace" &&
                                        !digit &&
                                        index > 0
                                      ) {
                                        document
                                          .getElementById(`otp-${index - 1}`)
                                          .focus();
                                      }
                                    }}
                                    onPaste={(e) => {
                                      e.preventDefault();
                                      let paste = e.clipboardData
                                        .getData("text")
                                        .replace(/\s+/g, ""); // Remove any spaces
                                      if (/^\d{6}$/.test(paste)) {
                                        paste.split("").forEach((char, i) => {
                                          setFieldValue(`otp.${i}`, char);
                                        });
                                        document
                                          .getElementById(`otp-5`)
                                          .focus();
                                      }
                                    }}
                                    id={`otp-${index}`}
                                  />
                                ))}
                              </>
                            )}
                          </FieldArray>
                        </div>
                      </Form.Group>
                      <div className="d-flex position-relative pb-3">
                        {/* Display a single error message */}
                        {errors?.otp && touched?.otp && (
                          <div className="text-danger">
                            {errors?.otp?.filter((err) => err)?.length > 0 &&
                              "Please enter a digit"}
                          </div>
                        )}
                        {error && (
                          <div className="text-danger">
                            Please enter a valid code
                          </div>
                        )}
                        <a
                          href="#"
                          className="top-0 link-color fw-bold fnt-16 position-absolute end-0"
                          onClick={(e) => {
                            setResendClick(true);
                            handleResendOTP(e);
                          }}
                        >
                          Resend
                        </a>
                      </div>
                      <div className="d-grid gap-2 mx-5 my-4">
                        <Button
                          variant="primary"
                          size="lg"
                          className="h-56 fnt-20"
                          type="submit"
                          disabled={OTPLoading && !resendClick ? true : false}
                        >
                          {OTPLoading && !resendClick && (
                            <Spinner
                              as="span"
                              animation="grow"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            />
                          )}
                          Confirm
                        </Button>
                      </div>
                    </FormikForm>
                  )}
                </Formik>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OTPVerificationForm;
