// import "../../../App.css";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import ProgressBar from "react-bootstrap/ProgressBar";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   LOGIN_ROUTE,
//   OTP_VERIFICATION,
//   RESET_PASSWORD,
// } from "../../../constants/RouteNameConstant";
// import { useNavigate } from "react-router-dom";
// function ForgotPassword() {
//   const navigate = useNavigate();
//   console.log('"1234"', "1234");
//   return (
//     <>
//       <section className="loginBg">
//         <Container>
//           <Row className="align-items-center justify-content-center h-100vh">
//             <Col sm={6}>
//               <Card className="loginCard">
//                 <Card.Body className="p-0">
//                   <div className="fnt-22 fw-bold mb-4">Forgot Password?</div>
//                   <Form>
//                     <Form.Group
//                       className="mb-3"
//                       controlId="exampleForm.ControlInput1"
//                     >
//                       <Form.Label>Enter Registered email ID*</Form.Label>
//                       <Form.Control type="email" placeholder="" />
//                     </Form.Group>

//                     <div className="d-grid gap-2 mx-5 my-4">
//                       <Button
//                         variant="primary"
//                         size="lg"
//                         className="h-56 fnt-20"
//                         onClick={() => navigate(OTP_VERIFICATION)}
//                       >
//                         Next
//                       </Button>
//                     </div>
//                   </Form>
//                   <div className="my-3 text-center fw-bold fnt-18">
//                     <span className="opacity-50">Back to </span>
//                     <a href={`${LOGIN_ROUTE}`} className="link-color">
//                       Login
//                     </a>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// }

// export default ForgotPassword;
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import {
  Container,
  Row,
  Col,
  Card,
  Form as BootstrapForm,
  Button,
  Spinner,
  FloatingLabel,
} from "react-bootstrap";
import {
  LOGIN_ROUTE,
  OTP_VERIFICATION,
} from "../../../../constants/RouteNameConstant";
import {
  EMAIL_ID_REQURIED,
  EMAIL_ID_VALID,
} from "../../../../constants/ValidationMessageConstats";
import { EMAIL_ID_PLACEHOLDER } from "../../../../constants/PlaceHolderNames";
import { forgotPasswordRequest } from "../redux/forgotRestAction"
const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {forgotResetLoading } = useSelector((state) => ({
   
    forgotResetLoading: state.forgotReset.loading || false,
  }));
  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email(EMAIL_ID_VALID)
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, EMAIL_ID_VALID)
      .required(EMAIL_ID_REQURIED),
  });

  // Initial values for the form
  const initialValues = {
    email: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission
    const apiParams = {
      data: {
        email:values.email
      },
      onSuccess: () => {

        navigate(OTP_VERIFICATION);
      },
    };
    setSubmitting(false);

    dispatch(forgotPasswordRequest(apiParams));
  };

  return (
    <section className="loginBg">
      <Container>
        <Row className="align-items-center justify-content-center h-100vh">
          <Col sm={6}>
            <Card className="loginCard">
              <Card.Body className="p-0">
                <div className="fnt-22 fw-bold mb-4">Forgot Password?</div>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched, values }) => (
                    <Form>
                      <FloatingLabel
                            controlId="floatingInput"
                            label="Registered email ID*"
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
                      <div className="d-grid gap-2 mx-5 my-4">
                        <Button
                          variant="primary"
                          size="lg"
                          className="h-56 fnt-20"
                          type="submit"
                          disabled={forgotResetLoading ? true : false}

                        >
                        {forgotResetLoading && (
                              <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                              />
                            )}
                          Send OTP
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
                <div className="my-3 text-center fw-bold fnt-18">
                  <span className="opacity-50">Back to </span>
                  <a href={`${LOGIN_ROUTE}`} className="link-color">
                    Login
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ForgotPassword;
