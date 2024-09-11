// // import React from "react";
// // import {
// //   Breadcrumb,
// //   Card,
// //   Col,
// //   FloatingLabel,
// //   Form,
// //   Row,
// // } from "react-bootstrap";
// // import { Button, Badge } from "react-bootstrap";
// // import {
// //   DataType,
// //   Editing,
// //   ValueSource,
// // } from "../../../../constants/ArrayObjects";
// // import { useNavigate } from "react-router-dom";
// // import { FIELDS_TO_CAPTURE_ROUTE } from "../../../../constants/RouteNameConstant";

// // const SigleFieldToCapture = ({ childIndex, fieldData,setChildIndex }) => {
// //   const navigate=useNavigate()
// //   return (
// //     <>
// //       <Row className="align-items-center">
// //         <Col className="mb-3">
// //           <div className="mainTitle">
// //             <Breadcrumb>
// //               <Breadcrumb.Item >Settings </Breadcrumb.Item>
// //               <Breadcrumb.Item  className="d-flex gap-1" onClick={()=>{navigate(FIELDS_TO_CAPTURE_ROUTE);setChildIndex(null)}}>
// //                 Fields to Capture
// //               </Breadcrumb.Item>

// //               <Breadcrumb.Item active={fieldData?.label?.length >0  ? true :false} className="d-flex gap-1">
// //                 {fieldData.label||""}
// //               </Breadcrumb.Item>
// //             </Breadcrumb>
// //           </div>
// //         </Col>
// //         <Col md="auto" className="mb-3 d-flex gap-3">
// //           <a href="#" className="btn btn-outline-primary py-2">
// //             Edit JSON
// //           </a>
// //           <a
// //             href="#"
// //             className="btn btn-light-danger py-2 d-flex align-items-center"
// //           >
// //             <i className="icon-delete"></i> Delete
// //           </a>
// //           <a href="#" className="btn btn-primary py-2">
// //             Save
// //           </a>
// //         </Col>
// //       </Row>
// //       <div className="setting-scroll custom-scroll">
// //         <Row>
// //           <Col md="4" className="mb-3">
// //             <Card>
// //               <Card.Body className="p-3">
// //                 <div className="d-flex align-items-center justify-content-between mb-2">
// //                   <div className="d-flex gap-4 align-items-center fnt-18 fw-bold">
// //                     Visible{" "}
// //                     <a href="#" className="link-color">
// //                       <i className="icon-eye fnt-12"></i>
// //                     </a>
// //                   </div>
// //                   <div className="custom-switch-wrapper">
// //                     <Form.Check // prettier-ignore
// //                       type="switch"
// //                       id="custom-switch"
// //                     />
// //                   </div>
// //                 </div>
// //                 <p className="pt-3 mb-0">
// //                   Visibility of the field on the validation screen.
// //                 </p>
// //               </Card.Body>
// //             </Card>
// //           </Col>
// //           <Col md="4" className="mb-3">
// //             <Card>
// //               <Card.Body className="p-3">
// //                 <div className="d-flex align-items-center justify-content-between mb-2">
// //                   <div className="d-flex gap-4 align-items-center fnt-18 fw-bold">
// //                     Exported{" "}
// //                     <a href="#" className="link-color">
// //                       <i className="icon-log-in fnt-12"></i>
// //                     </a>
// //                   </div>
// //                   <div className="custom-switch-wrapper">
// //                     <Form.Check // prettier-ignore
// //                       type="switch"
// //                       id="custom-switch"
// //                     />
// //                   </div>
// //                 </div>
// //                 <p className="pt-3 mb-0">
// //                   Include the field in a manual export.
// //                 </p>
// //               </Card.Body>
// //             </Card>
// //           </Col>
// //           <Col md="4" className="mb-3">
// //             <Card>
// //               <Card.Body className="p-3">
// //                 <div className="d-flex align-items-center justify-content-between mb-2">
// //                   <div className="d-flex gap-4 align-items-center fnt-18 fw-bold">
// //                     Required{" "}
// //                     <a href="#" className="fnt-12 fw-normal text-dark">
// //                       OPT
// //                     </a>
// //                   </div>
// //                   <div className="custom-switch-wrapper">
// //                     <Form.Check // prettier-ignore
// //                       type="switch"
// //                       id="custom-switch"
// //                     />
// //                   </div>
// //                 </div>
// //                 <p className="pt-3 mb-0">
// //                   The field has to have a value before confirmation.
// //                 </p>
// //               </Card.Body>
// //             </Card>
// //           </Col>
// //           <Col md="12" className="mb-3">
// //             <Card>
// //               <Card.Body className="py-5 px-4">
// //                 <Row className="justify-content-between">
// //                   <Col md="6">
// //                     <div className="fnt-18 fw-bold mb-3">Identification</div>
// //                     <p className="opacity-50">
// //                       Define unique field identifiers for referencing in
// //                       exports, extensions, or formulas. The label is used to
// //                       display the field throughout the product alongside its
// //                       description.
// //                     </p>
// //                     <a href="#" className="link-color fw-bold">
// //                       How To Set Up Extraction Schema In Rossum
// //                     </a>
// //                   </Col>
// //                   <Col md="5">
// //                     <FloatingLabel
// //                       controlId="floatingInput"
// //                       label="Label"
// //                       className="mb-3"
// //                     >
// //                       <Form.Control
// //                         type="text"
// //                         placeholder="Order Number"
// //                         value={fieldData.label}
// //                       />
// //                     </FloatingLabel>
// //                     <FloatingLabel
// //                       controlId="floatingInput"
// //                       label="ID"
// //                       className="mb-3"
// //                     >
// //                       <Form.Control
// //                         type="text"
// //                         placeholder="order_lD"
// //                         value={fieldData.Id}
// //                       />
// //                     </FloatingLabel>
// //                     <FloatingLabel
// //                       controlId="floatingInput"
// //                       label="Description (Optional)"
// //                       className=""
// //                     >
// //                       <Form.Control
// //                         type="text"
// //                         //   placeholder="Purchase order identification."
// //                         value={fieldData?.description ? fieldData.description :"This is description"}
// //                       />
// //                     </FloatingLabel>
// //                   </Col>
// //                 </Row>
// //               </Card.Body>
// //             </Card>
// //           </Col>
// //           <Col md="12" className="mb-3">
// //             <Card>
// //               <Card.Body className="py-5 px-4">
// //                 <Row className="justify-content-between">
// //                   <Col md="6">
// //                     <div className="fnt-18 fw-bold mb-3">Type</div>
// //                     <p className="opacity-50">
// //                       The field may be extracted from the document, calculated
// //                       using a formula or extension, or manually specified by an
// //                       annotator during a document review.
// //                     </p>
// //                   </Col>
// //                   <Col md="5">
// //                     <FloatingLabel
// //                       controlId="floatingInput"
// //                       label="Field type"
// //                       className="mb-3"
// //                     >
// //                       <Form.Control type="text" placeholder="Order Number" value={fieldData?.category}/>
// //                     </FloatingLabel>
// //                     <FloatingLabel
// //                       controlId="floatingInput"
// //                       label="Data type"
// //                       className="mb-3"
// //                     >
// //                       <Form.Select aria-label="Default select example">
// //                         {DataType.map((item, index) => {
// //                           return (
// //                             <option
// //                               value={ fieldData?.type||item}
// //                             >
// //                               {item}
// //                             </option>
// //                           );
// //                         })}
// //                       </Form.Select>
// //                       {/* <Form.Control type="text" placeholder="Text" /> */}
// //                     </FloatingLabel>
// //                     <FloatingLabel
// //                       controlId="floatingInput"
// //                       label="Value source"
// //                       className="mb-3"
// //                     >
// //                       <Form.Select aria-label="Default select example">
// //                         {ValueSource.map((item, index) => {
// //                           return (
// //                             <option
// //                               value={
// //                                 fieldData?.type
// //                                   ? fieldData.ui_configuration.type
// //                                   : item
// //                               }
// //                             >
// //                               {item}
// //                             </option>
// //                           );
// //                         })}
// //                       </Form.Select>
// //                       {/* <Form.Control type="text" placeholder="Captured" /> */}
// //                     </FloatingLabel>
// //                     <FloatingLabel
// //                       controlId="floatingInput"
// //                       label="Editing"
// //                       className=""
// //                     >
// //                       <Form.Select aria-label="Default select example">
// //                         {Editing.map((item, index) => {
// //                           return <option value={item}>{item}</option>;
// //                         })}
// //                       </Form.Select>
// //                       {/* <Form.Control type="text" placeholder="Enabled" /> */}
// //                     </FloatingLabel>
// //                   </Col>
// //                 </Row>
// //               </Card.Body>
// //             </Card>
// //           </Col>
// //           <Col md="12" className="mb-3">
// //             <Card>
// //               <Card.Body className="py-5 px-4">
// //                 <Row className="justify-content-between">
// //                   <Col md="6">
// //                     <div className="fnt-18 fw-bold mb-3">
// //                       Captured by AI engine
// //                     </div>
// //                     <p className="opacity-50">
// //                       The AI engine automatically identifies and captures the
// //                       value. Simply select the pre-trained AI engine field
// //                       ID (rir_field_name) from the list and set the Threshold
// //                       (default value is 0.8).
// //                     </p>
// //                   </Col>
// //                   <Col md="5">
// //                     <FloatingLabel
// //                       controlId="floatingInput"
// //                       label="AI engine field ID"
// //                       className="mb-3"
// //                     >
// //                       <Form.Control
// //                         type="text"
// //                         placeholder="order-id"
// //                         // value={}
// //                       >

// //                         </Form.Control>
// //                     </FloatingLabel>
// //                     <FloatingLabel
// //                       controlId="floatingInput"
// //                       label="Data type"
// //                       className=""
// //                     >
// //                       <Form.Control type="text" placeholder="Theshold" />
// //                     </FloatingLabel>
// //                   </Col>
// //                 </Row>
// //               </Card.Body>
// //             </Card>
// //           </Col>
// //         </Row>
// //       </div>
// //     </>
// //   );
// // };

// // export default SigleFieldToCapture;
// import React from "react";
// import {
//   Breadcrumb,
//   Card,
//   Col,
//   FloatingLabel,
//   Form as BootstrapForm,
//   Row,
// } from "react-bootstrap";
// import { Field, Formik, Form } from "formik";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { FIELDS_TO_CAPTURE_ROUTE } from "../../../../constants/RouteNameConstant";
// import {
//   DataType,
//   Editing,
//   ValueSource,
// } from "../../../../constants/ArrayObjects";
// import { getFieldJSONChangesRequest } from "../../WorkSpace/Queue/reudx/queueAction";

// const SigleFieldToCapture = ({
//   childIndex,
//   fieldData,
//   setChildIndex,
//   fieldJSONIndex,
// }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { activeWorkSpace, activeQueue, queueByworkSpace } = useSelector(
//     (state) => ({
//       activeWorkSpace: state.workSpace.activeWorkSpace,
//       activeQueue: state.queue.activeQueue || {},
//       queueByworkSpace: state.queue.queueByworkSpace || {},
//     })
//   );
//   const handleSaveChanges = (values) => {
//     const newFieldJSON = [...queueByworkSpace];
//     newFieldJSON[fieldJSONIndex].children[childIndex] = values;
//     const apiParams = {
//       data: {
//         wsId: activeWorkSpace.wsId || "",
//         fieldJSON: JSON.stringify(newFieldJSON),
//       },
//       onSuccess: () => {},
//       onErrors: () => {},
//     };
//     dispatch(getFieldJSONChangesRequest(apiParams, activeQueue.queueId));
//   };
//   return (
//     <Formik
//       initialValues={{
//         label: fieldData.label || "",
//         id: fieldData.Id || "",
//         description: fieldData.description || "This is description",
//         category: fieldData.category || "",
//         type: fieldData.type || "",
//         valueSource: fieldData.type || "",
//         editing: "",
//         rir_field_names: "",
//         threshold: "",
//       }}
//       onSubmit={handleSaveChanges}
//     >
//       {({ values, handleChange, handleSubmit }) => (
//         <Form>
//           <Row className="align-items-center">
//             <Col className="mb-3">
//               <div className="mainTitle">
//                 <Breadcrumb>
//                   <Breadcrumb.Item>Settings</Breadcrumb.Item>
//                   <Breadcrumb.Item href="#">{activeWorkSpace?.workSpaceName} </Breadcrumb.Item>
//                   <Breadcrumb.Item href="#">{activeQueue?.queueName} </Breadcrumb.Item>
//                   <Breadcrumb.Item
//                     className="d-flex gap-1"
//                     onClick={() => {
//                       navigate(FIELDS_TO_CAPTURE_ROUTE);
//                       setChildIndex(null);
//                     }}
//                   >
//                     Label Settings
//                   </Breadcrumb.Item>
//                   <Breadcrumb.Item
//                     active={fieldData?.label?.length > 0 ? true : false}
//                     className="d-flex gap-1"
//                   >
//                     {fieldData.label || ""}
//                   </Breadcrumb.Item>
//                 </Breadcrumb>
//               </div>
//             </Col>
//             <Col md="auto" className="mb-3 d-flex gap-3">
//               <button type="button" className="btn btn-outline-primary py-2">
//                 Edit JSON
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-light-danger py-2 d-flex align-items-center"
//               >
//                 <i className="icon-delete"></i> Delete
//               </button>
//               <button type="submit" className="btn btn-primary py-2">
//                 Save
//               </button>
//             </Col>
//           </Row>

//           <div className="setting-scroll custom-scroll">
//             <Row>
//               <Col md="4" className="mb-3">
//                 <Card>
//                   <Card.Body className="p-3">
//                     <div className="d-flex align-items-center justify-content-between mb-2">
//                       <div className="d-flex gap-4 align-items-center fnt-18 fw-bold">
//                         Visible{" "}
//                         <a href="#" className="link-color">
//                           <i className="icon-eye fnt-12"></i>
//                         </a>
//                       </div>
//                       <div className="custom-switch-wrapper">
//                         <Field
//                           type="switch"
//                           id="custom-switch"
//                           name="hidden"
//                           as={BootstrapForm.Check}
//                         />
//                       </div>
//                     </div>
//                     <p className="pt-3 mb-0">
//                       Visibility of the field on the validation screen.
//                     </p>
//                   </Card.Body>
//                 </Card>
//               </Col>

//               <Col md="4" className="mb-3">
//                 <Card>
//                   <Card.Body className="p-3">
//                     <div className="d-flex align-items-center justify-content-between mb-2">
//                       <div className="d-flex gap-4 align-items-center fnt-18 fw-bold">
//                         Exported{" "}
//                         <a href="#" className="link-color">
//                           <i className="icon-log-in fnt-12"></i>
//                         </a>
//                       </div>
//                       <div className="custom-switch-wrapper">
//                         <Field
//                           type="switch"
//                           id="custom-switch"
//                           name="can_export"
//                           as={BootstrapForm.Check}
//                         />
//                       </div>
//                     </div>
//                     <p className="pt-3 mb-0">
//                       Include the field in a manual export.
//                     </p>
//                   </Card.Body>
//                 </Card>
//               </Col>

//               <Col md="4" className="mb-3">
//                 <Card>
//                   <Card.Body className="p-3">
//                     <div className="d-flex align-items-center justify-content-between mb-2">
//                       <div className="d-flex gap-4 align-items-center fnt-18 fw-bold">
//                         Required{" "}
//                         <a href="#" className="fnt-12 fw-normal text-dark">
//                           OPT
//                         </a>
//                       </div>
//                       <div className="custom-switch-wrapper">
//                         <Field
//                           type="switch"
//                           id="custom-switch"
//                           name="required"
//                           as={BootstrapForm.Check}
//                         />
//                       </div>
//                     </div>
//                     <p className="pt-3 mb-0">
//                       The field has to have a value before confirmation.
//                     </p>
//                   </Card.Body>
//                 </Card>
//               </Col>

//               <Col md="12" className="mb-3">
//                 <Card>
//                   <Card.Body className="py-5 px-4">
//                     <Row className="justify-content-between">
//                       <Col md="6">
//                         <div className="fnt-18 fw-bold mb-3">
//                           Identification
//                         </div>
//                         <p className="opacity-50">
//                           Define unique field identifiers for referencing in
//                           exports, extensions, or formulas. The label is used to
//                           display the field throughout the product alongside its
//                           description.
//                         </p>
//                         <a href="#" className="link-color fw-bold">
//                           How To Set Up Extraction Schema In Rossum
//                         </a>
//                       </Col>
//                       <Col md="5">
//                         <FloatingLabel
//                           controlId="floatingInput"
//                           label="Label"
//                           className="mb-3"
//                         >
//                           <Field
//                             type="text"
//                             name="label"
//                             as={BootstrapForm.Control}
//                             placeholder="Order Number"
//                           />
//                         </FloatingLabel>
//                         <FloatingLabel
//                           controlId="floatingInput"
//                           label="ID"
//                           className="mb-3"
//                         >
//                           <Field
//                             type="text"
//                             name="id"
//                             as={BootstrapForm.Control}
//                             placeholder="order_ID"
//                           />
//                         </FloatingLabel>
//                         <FloatingLabel
//                           controlId="floatingInput"
//                           label="Description (Optional)"
//                           className=""
//                         >
//                           <Field
//                             type="text"
//                             name="description"
//                             as={BootstrapForm.Control}
//                             placeholder="Purchase order identification."
//                           />
//                         </FloatingLabel>
//                       </Col>
//                     </Row>
//                   </Card.Body>
//                 </Card>
//               </Col>

//               <Col md="12" className="mb-3">
//                 <Card>
//                   <Card.Body className="py-5 px-4">
//                     <Row className="justify-content-between">
//                       <Col md="6">
//                         <div className="fnt-18 fw-bold mb-3">Type</div>
//                         <p className="opacity-50">
//                           The field may be extracted from the document,
//                           calculated using a formula or extension, or manually
//                           specified by an annotator during a document review.
//                         </p>
//                       </Col>
//                       <Col md="5">
//                         <FloatingLabel
//                           controlId="floatingInput"
//                           label="Field type"
//                           className="mb-3"
//                         >
//                           <Field
//                             type="text"
//                             name="category"
//                             as={BootstrapForm.Control}
//                             placeholder="Order Number"
//                           />
//                         </FloatingLabel>
//                         <FloatingLabel
//                           controlId="floatingInput"
//                           label="Data type"
//                           className="mb-3"
//                         >
//                           <Field
//                             name="type"
//                             as="select"
//                             className="form-select"
//                           >
//                             {DataType.map((item, index) => (
//                               <option key={index} value={item}>
//                                 {item}
//                               </option>
//                             ))}
//                           </Field>
//                         </FloatingLabel>
//                         <FloatingLabel
//                           controlId="floatingInput"
//                           label="Value source"
//                           className="mb-3"
//                         >
//                           <Field
//                             name="valueSource"
//                             as="select"
//                             className="form-select"
//                           >
//                             {ValueSource.map((item, index) => (
//                               <option key={index} value={item}>
//                                 {item}
//                               </option>
//                             ))}
//                           </Field>
//                         </FloatingLabel>
//                         <FloatingLabel
//                           controlId="floatingInput"
//                           label="Editing"
//                           className=""
//                         >
//                           <Field
//                             name="editing"
//                             as="select"
//                             className="form-select"
//                           >
//                             {Editing.map((item, index) => (
//                               <option key={index} value={item}>
//                                 {item}
//                               </option>
//                             ))}
//                           </Field>
//                         </FloatingLabel>
//                       </Col>
//                     </Row>
//                   </Card.Body>
//                 </Card>
//               </Col>

//               <Col md="12" className="mb-3">
//                 <Card>
//                   <Card.Body className="py-5 px-4">
//                     <Row className="justify-content-between">
//                       <Col md="6">
//                         <div className="fnt-18 fw-bold mb-3">
//                           Captured by AI engine
//                         </div>
//                         <p className="opacity-50">
//                           The field is populated with a value returned by the AI
//                           engine.
//                         </p>
//                       </Col>
//                       <Col md="5">
//                         <FloatingLabel
//                           controlId="floatingInput"
//                           label="AI Field ID"
//                           className="mb-3"
//                         >
//                           <Field
//                             type="text"
//                             name="rir_field_names"
//                             as={BootstrapForm.Control}
//                             placeholder="rossum_ai_name"
//                           />
//                         </FloatingLabel>
//                         <FloatingLabel
//                           controlId="floatingInput"
//                           label="AI Value Threshold"
//                           className=""
//                         >
//                           <Field
//                             type="text"
//                             name="threshold"
//                             as={BootstrapForm.Control}
//                             placeholder="0-100%"
//                           />
//                         </FloatingLabel>
//                       </Col>
//                     </Row>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             </Row>
//           </div>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default SigleFieldToCapture;
import { Field, FieldArray, Form, Formik } from "formik";
import React, { Children, useCallback, useEffect, useState } from "react";
import {
  Card,
  Col,
  FloatingLabel,
  Badge,
  Row,
  Form as BootstrapForm,
} from "react-bootstrap";
import {
  DataType,
  Editing,
  FieldType,
  ValueSource,
} from "../../../../constants/ArrayObjects";

const SigleFieldToCapture = ({
  addLabelModal,
  addSectionModal,
  setAddSectionModal,
  fieldData,
  setAddLabelModal,
  handleSaveChanges,
  handleSaveSectionChanges,
  handleDeleteJSON,
  handleDeleteSection,
  sectionData,
  childIndex,
}) => {
  console.log("sectioData", sectionData);
  const [inputValue, setInputValue] = useState("");
  // const initialValues =
  //   addLabelModal.action === "Create"
  //     ? {
  //         rir_field_names: [],
  //         constraints: {
  //           required: false,
  //         },
  //         default_value: "",
  //         category: "",
  //         id: "",
  //         label: "",
  //         type: "string",
  //         ui_configuration: {
  //           type: "", // Value Source dropdown
  //           edit: "", // Editing dropdown
  //         },
  //         threshold: "",
  //         description: "This is description",
  //       }
  //     : {
  //         rir_field_names: fieldData.rir_field_names || [],
  //         constraints: {
  //           required: fieldData?.constraints?.required || false,
  //         },
  //         default_value: fieldData?.default_value || "",
  //         category: fieldData?.category || "",
  //         id: fieldData.id || "",
  //         label: fieldData?.label || "",
  //         type: fieldData?.type || "",
  //         ui_configuration: {
  //           type: fieldData?.ui_configuration?.type || "", // Value Source dropdown
  //           edit: fieldData?.ui_configuration?.edit || "", // Editing dropdown
  //         },
  //         description: fieldData?.description || "This is description",
  //         threshold: fieldData?.threshold || "",
  //         can_export: fieldData?.can_export || false,
  //         hidden: fieldData?.hidden || false,
  //       };
  // Compute initial values based on fieldData and addLabelModal.action
  const getInitialValues = () => {
    return addLabelModal.action === "Create"
      ? {
          rir_field_names: [],
          constraints: { required: false },
          default_value: "",
          category: "",
          id: "",
          label: "",
          type: "string",
          ui_configuration: { type: "", edit: "" },
          threshold: "",
          description: "This is description",
        }
      : {
          rir_field_names: fieldData.rir_field_names || [],
          constraints: { required: fieldData?.constraints?.required || false },
          default_value: fieldData?.default_value || "",
          category: fieldData?.category || "",
          id: fieldData.id || "",
          label: fieldData?.label || "",
          type: fieldData?.type || "",
          ui_configuration: {
            type: fieldData?.ui_configuration?.type || "",
            edit: fieldData?.ui_configuration?.edit || "",
          },
          description: fieldData?.description || "This is description",
          threshold: fieldData?.threshold || "",
          can_export: fieldData?.can_export || false,
          hidden: fieldData?.hidden || false,
        };
  };

  const [initialValues, setInitialValues] = useState(getInitialValues());

  useEffect(() => {
    setInitialValues(getInitialValues());
  }, [fieldData, addLabelModal.action]);
  console.log("addSectionModal", addSectionModal);
  const initialValuesSection =
    addSectionModal.action === "Create"
      ? {
          category: "section",
          id: "",
          label: "",
          icon: null,
          children: [],
          description: "This is description for section",
        }
      : {
          category: sectionData?.category || "",
          id: sectionData?.id || "",
          label: sectionData?.label || "",
          icon: sectionData?.icon || null,
          children: sectionData?.children || [],
          description:
            sectionData?.description || "This is description for section",
        };
  return (
    <>
      {addSectionModal.modal && !addLabelModal.modal ? (
        <Col md="6">
          <Card>
            <Card.Title className="fnt-16 fw-semibold py-3 px-4 d-flex align-items-center justify-content-between">
              <a href="#" className="text-dark d-flex">
                <img
                  src="/assets/images/back-arrow-icon.svg"
                  class="img-fuild me-2"
                  alt="back-arrow-icon"
                />{" "}
                {addSectionModal.action} Section
              </a>
              <div className="d-flex gap-2 align-items-center">
                {addSectionModal?.delete && (
                  <a
                    href="#"
                    className="delete-fields-icon"
                    onClick={() => {
                      handleDeleteSection();
                    }}
                  >
                    <i className="icon icon-delete_outline"></i>
                  </a>
                )}
                {addSectionModal?.editJson && (
                  <a
                    href="#"
                    className="btn btn-outline-primary btn-outline-primary-fill py-1 fnt-13"
                  >
                    {" "}
                    <i className="icon icon-rename fnt-12"></i> Edit JSON
                  </a>
                )}

                <a
                  href="#"
                  className="text-dark opacity-50 fnt-20"
                  onClick={() =>
                    setAddSectionModal((prevState) => ({
                      ...prevState,
                      modal: false, // Only update the 'modal' property
                    }))
                  }
                >
                  <i className="icon icon-x_icon"></i>
                </a>
              </div>
            </Card.Title>
            <Card.Body className="py-3 px-4">
              <Formik
                initialValues={initialValuesSection}
                onSubmit={handleSaveSectionChanges}
              >
                {({ values, handleChange, handleSubmit }) => (
                  <Form>
                    <Row>
                      <Col md="6">
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Label"
                          className="mb-4"
                        >
                          <Field
                            type="text"
                            name="label"
                            as={BootstrapForm.Control}
                            placeholder=""
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md="6">
                        <FloatingLabel
                          controlId="floatingInput"
                          label="ID"
                          className="mb-4"
                        >
                          <Field
                            type="text"
                            name="id"
                            as={BootstrapForm.Control}
                            placeholder="order_ID"
                          />
                        </FloatingLabel>
                      </Col>

                      <Col md="12" className="mt-3">
                        <FloatingLabel
                          controlId="floatingTextarea2"
                          label="Description (Optional)"
                          className="mb-4"
                        >
                          <Field
                            type="text"
                            name="description"
                            as={BootstrapForm.Control}
                            placeholder="Purchase order identification."
                          />
                        </FloatingLabel>
                      </Col>

                      <div class="text-center my-4">
                        <button
                          type="submit"
                          class="fnt-20 btn btn-primary py-2 px-5"
                        >
                          Save
                        </button>
                      </div>
                    </Row>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Col>
      ) : (
        <Col md="6">
          <Card>
            <Card.Title className="fnt-16 fw-semibold py-3 px-4 d-flex align-items-center justify-content-between">
              <a href="#" className="text-dark d-flex">
                <img
                  src="/assets/images/back-arrow-icon.svg"
                  class="img-fuild me-2"
                  alt="back-arrow-icon"
                />{" "}
                {addLabelModal.action} Label
              </a>
              <div className="d-flex gap-2 align-items-center">
                {addLabelModal?.delete && (
                  <a
                    href="#"
                    className="delete-fields-icon"
                    onClick={() => {
                      handleDeleteJSON(childIndex);
                    }}
                  >
                    <i className="icon icon-delete_outline"></i>
                  </a>
                )}
                {addLabelModal?.editJson && (
                  <a
                    href="#"
                    className="btn btn-outline-primary btn-outline-primary-fill py-1 fnt-13"
                  >
                    {" "}
                    <i className="icon icon-rename fnt-12"></i> Edit JSON
                  </a>
                )}

                <a
                  href="#"
                  className="text-dark opacity-50 fnt-20"
                  onClick={() =>
                    setAddLabelModal((prevState) => ({
                      ...prevState,
                      modal: false, // Only update the 'modal' property
                    }))
                  }
                >
                  <i className="icon icon-x_icon"></i>
                </a>
              </div>
            </Card.Title>
            <Card.Body className="py-3 px-4">
              <Formik
                initialValues={initialValues}
                onSubmit={handleSaveChanges}
              >
                {({ values, handleChange, handleSubmit }) => (
                  <Form>
                    <Row>
                      <Col md="6">
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Label"
                          className="mb-4"
                        >
                          <Field
                            type="text"
                            name="label"
                            as={BootstrapForm.Control}
                            placeholder=""
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md="6">
                        <FloatingLabel
                          controlId="floatingInput"
                          label="ID"
                          className="mb-4"
                        >
                          <Field
                            type="text"
                            name="id"
                            as={BootstrapForm.Control}
                            placeholder="order_ID"
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md="6">
                        <FloatingLabel
                          controlId="floatingSelect"
                          label="Field type"
                          className="mb-4"
                        >
                          <Field
                            name="category"
                            as="select"
                            className="form-select"
                          >
                            {FieldType.map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))}
                          </Field>
                        </FloatingLabel>
                      </Col>
                      <Col md="6">
                        <FloatingLabel
                          controlId="floatingSelect"
                          label="Data type"
                          className="mb-4"
                        >
                          <Field
                            name="type"
                            as="select"
                            className="form-select"
                          >
                            {DataType.map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))}
                          </Field>
                        </FloatingLabel>
                      </Col>
                      <Col md="6">
                        <FloatingLabel
                          controlId="floatingSelect"
                          label="Editing"
                          className="mb-4"
                        >
                          <Field
                            name="ui_configuration.edit"
                            as="select"
                            className="form-select"
                          >
                            {Editing.map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))}
                          </Field>
                        </FloatingLabel>
                      </Col>
                      <Col md="6">
                        <FloatingLabel
                          controlId="floatingSelect"
                          label="Value source"
                          className="mb-4"
                        >
                          <Field
                            name="ui_configuration.type"
                            as="select"
                            className="form-select"
                          >
                            {ValueSource.map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))}
                          </Field>
                          <p className="fnt-11 pt-1 position-absolute">
                            Use for data that will be annotated and read from
                            the document.
                          </p>
                        </FloatingLabel>
                      </Col>
                      <Col md="12" className="mt-3">
                        <FloatingLabel
                          controlId="floatingTextarea2"
                          label="Description (Optional)"
                          className="mb-4"
                        >
                          <Field
                            type="text"
                            name="description"
                            as={BootstrapForm.Control}
                            placeholder="Purchase order identification."
                          />
                        </FloatingLabel>
                      </Col>

                      <Col md="12">
                        <div className="fw-bold fnt-16 mb-4">
                          Captured by Al engine
                        </div>
                      </Col>
                      <Col md="6">
                        <BootstrapForm.Group>
                          <FloatingLabel
                            controlId="floatingInput"
                            label="AI engine field ID"
                            className="mb-4"
                          >
                            <FieldArray
                              name="rir_field_names"
                              render={(arrayHelpers) => (
                                <>
                                  <BootstrapForm.Control
                                    type="text"
                                    className="mb-4"
                                    value={inputValue}
                                    onChange={(e) =>
                                      setInputValue(e.target.value)
                                    }
                                    onKeyDown={(e) => {
                                      if (
                                        e.key === "Enter" &&
                                        inputValue.trim()
                                      ) {
                                        e.preventDefault();
                                        arrayHelpers.push(inputValue);
                                        setInputValue("");
                                      }
                                    }}
                                    placeholder=""
                                  ></BootstrapForm.Control>
                                </>
                              )}
                            />
                          </FloatingLabel>
                        </BootstrapForm.Group>
                      </Col>
                      <Col md="6">
                        {/* <Form.Control type="number" placeholder="" /> */}
                        <FloatingLabel
                          controlId="floatingInput"
                          label="AI Value Threshold"
                          className=""
                        >
                          <Field
                            type="number"
                            name="threshold"
                            as={BootstrapForm.Control}
                            placeholder="0-100%"
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md="12" className="mb-4">
                        {values?.rir_field_names?.length > 0 && (
                          <FieldArray
                            name="rir_field_names"
                            render={(arrayHelpers) => (
                              <div className="tags-container">
                                <span
                                  className="ai-close-all cursor-pointer"
                                  onClick={() =>
                                    arrayHelpers.form.setFieldValue(
                                      "rir_field_names",
                                      []
                                    )
                                  }
                                >
                                  <i className="icon icon-x_icon"></i>
                                </span>

                                {values?.rir_field_names?.map((tag, index) => (
                                  <a
                                    href="#"
                                    key={index}
                                    className="gap-2 btn d-inline-flex align-items-center gap-2 btn-outline-primary btn-outline-primary-fill py-1 fnt-16 "
                                  >
                                    {tag}
                                    <i
                                      className="icon icon-x_icon fnt-16"
                                      onClick={(e) => {
                                        e.preventDefault(); // Prevent default anchor behavior
                                        arrayHelpers.remove(index); // Remove the tag on click
                                      }}
                                      style={{ cursor: "pointer" }}
                                    ></i>
                                  </a>
                                ))}
                              </div>
                            )}
                          />
                        )}
                      </Col>
                      <Col md="12">
                        <div className="checkLabel-option row mx-0">
                          <div className="col d-flex gap-2 align-items-center border-end py-2 justify-content-center">
                            <i className="icon icon-info"></i> Visible
                            <Field
                              type="checkbox"
                              name="hidden"
                              as={BootstrapForm.Check}
                            />
                          </div>
                          <div className=" col d-flex gap-2 align-items-center border-end py-2 justify-content-center">
                            <i className="icon icon-info"></i> Export
                            <Field
                              type="checkbox"
                              name="can_export"
                              as={BootstrapForm.Check}
                            />
                          </div>
                          <div className="col d-flex gap-2 align-items-center py-2 justify-content-center">
                            <i className="icon icon-info"></i> Required
                            <Field
                              type="checkbox"
                              name="constraints.required"
                              as={BootstrapForm.Check}
                            />
                          </div>
                        </div>
                      </Col>
                      <div class="text-center my-4">
                        <button
                          type="submit"
                          class="fnt-20 btn btn-primary py-2 px-5"
                        >
                          Save
                        </button>
                      </div>
                    </Row>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Col>
      )}
    </>
  );
};

export default SigleFieldToCapture;
