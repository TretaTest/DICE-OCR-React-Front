import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { ErrorMessage, Field, Formik, Form } from "formik";
import {
  Button,
  Col,
  FloatingLabel,
  OverlayTrigger,
  Row,
  Tooltip,
  Form as BootstrapForm,
  Spinner,
} from "react-bootstrap";
import ModalComponent from "../../../../components/ModalComponent";
import { FieldCaptureJSON } from "../../../../constants/ArrayObjects";
import {
  getQueueTypeRequest,
  queueRequest,
  getRegionRequest,
  getQueueRequest,
} from "./reudx/queueAction";
import {
  QUEUE_NAME_REQUIRED,
  REGION_REQUIRED,
  WORKSPACE_REQUIRED,
} from "../../../../constants/ValidationMessageConstats";
import { getWorkSpaceByIdRequest } from "../redux/workSpaceAction";
const CreateQueue = ({ setNewQueueshow,newWorkspaceShowModal, NewQueueShow, workSpaceId }) => {
  const dispatch = useDispatch();
  const [openDropdown, setOpenDropdown] = useState(null);

  const { workSpace, loading, queueTypeData, regionData } = useSelector(
    (state) => ({
      workSpace: state.workSpace || [],
      loading: state.workSpace.loading,
      queueTypeData: state.queue.queueTypeData,
      regionData: state.queue.regionData,
    })
  );
  const initialValues = {
    queueName: "",
    queueTypeId: "Invoice",
    regionId: "",
    wsId: workSpaceId?.length > 0 ? workSpaceId : "",
  };
  const validationSchema = Yup.object({
    queueName: Yup.string().required(QUEUE_NAME_REQUIRED) || "",
    // queueTypeId: Yup.string().required(QUEUE_TYPE_REQUIRED) || "",
    wsId: Yup.string().required(WORKSPACE_REQUIRED) || "",
    regionId: Yup.string().required(REGION_REQUIRED) || "",
  });
  const onSubmit = (data, { setSubmitting }) => {
    const apiParams = {
      data: {
        queueName: data.queueName,
        // queueType: data.queueTypeId.toString(),
        queueType: "1",
        queueEmailId: `${data.queueTypeName}@gmail.com`,
        queueFieldsJson: JSON.stringify(FieldCaptureJSON),
        regionId: data.regionId.toString(),
        wsId: data.wsId.toString() || "",
      },
      onSuccess: (res) => {
        setNewQueueshow(false);
        dispatch(
          getQueueRequest({
            data: {
              wsId: res.data.content.wsId,
              search: "",
              page: 1,
              pageSize: 10,
              orderColumn: "",
            },
          })
        );

        if (workSpace.activeWorkSpace.queueCount === 0) {
          dispatch(
            getWorkSpaceByIdRequest({
              data: {
                wsId: res.data.content.wsId,
              },
            })
          );
        }
      },
      onErrors: (res) => {},
    };

    dispatch(queueRequest(apiParams));
    setSubmitting(false);
  };
  useEffect(() => {
    const apiParams = {
      data: {},
      onSuccess: () => {},
      onErrors: () => {},
    };
    // dispatch(getWorkSpaceRequest({data: {
    //   search: "",
    //   page: 1,
    //   pageSize: 30,
    //   orderColumn: "",
    // },}))
    dispatch(getQueueTypeRequest(apiParams));
    dispatch(getRegionRequest(apiParams));
  }, []);
  const defaultSpaceName =
    workSpace?.workspaces?.find((item) => item.wsId === workSpaceId)
      ?.workspaceName || "";

  return (
    <ModalComponent
      centered={true}
      show={NewQueueShow}
      onHide={setNewQueueshow}
      backdrop={"static"}
      title={"Create New Category"}
      body={
        <>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({
              isSubmitting,
              setFieldValue,
              values,
              setFieldTouched,
              touched,
            }) => (
              <Form>
                <Row>
                  <Col md="10" className="mb-3">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Category name"
                      className="mb-3"
                    >
                      <Field
                        type="text"
                        placeholder="Enter Category Name"
                        name="queueName"
                        as={BootstrapForm.Control}
                        className="form-control"
                      />
                      <ErrorMessage
                        name="queueName"
                        component="div"
                        className="text-danger"
                      />
                    </FloatingLabel>
                  </Col>
                  <Col md="2" className="mb-3">
                    <OverlayTrigger
                      overlay={<Tooltip id={"t-info"}>{"Information"}</Tooltip>}
                      placement="top"
                    >
                      <a href="#">
                        {" "}
                        <span className="filter-btn h-58 w-58">
                          <i className="icon-info"></i>
                        </span>
                      </a>
                    </OverlayTrigger>
                  </Col>

                  <div
                    className="custom-select-dropdown position-relative mb-4"
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === "queueTypeName"
                          ? null
                          : "queueTypeName"
                      )
                    }
                  >
                    <Col md="12" className="mb-3 ">
                      <FloatingLabel
                        controlId="floatingInput"
                        // label="Tax Invoice"
                        className="mb-3"
                      >
                        <div className="position-relative">
                          <Field
                            type="text"
                            // placeholder="Enter Queue Name"
                            name="queueTypeId"
                            disabled={true}
                            as={BootstrapForm.Control}
                            className="form-control"
                          />
                          <span className="field-icon fnt-18">
                            <i className="icon-lock"></i>
                          </span>
                        </div>
                        {/* <ErrorMessage
                          name="queueName"
                          component="div"
                          className="text-danger"
                        /> */}
                      </FloatingLabel>
                    </Col>
                    {/* <div className="customSelectValue" name="queueTypeId">
                      {values.queueTypeName
                        ? values.queueTypeName
                        : "Select Tax Invoice"}
                      <span className="customSelectArrow">
                        <i className="icon-chevron_right"></i>
                      </span>
                    </div>
                    {openDropdown === "queueTypeName" && (
                      <>
                        <ul className="customSelectOption custom-scroll">
                          {queueTypeData?.length > 0 &&
                            queueTypeData?.map((item, index) => {
                              return (
                                <li
                                  className="customSelectOptionList"
                                  key={item.queueTypeId}
                                  as={BootstrapForm.Control}
                                  name="queueTypeId"
                                  value={item.queueTypeId}
                                  onClick={() => {
                                    setFieldValue(
                                      "queueTypeId",
                                      item.queueTypeId
                                    );
                                    setFieldValue(
                                      "queueTypeName",
                                      item.queueTypeName
                                    );
                                    setOpenDropdown(null);
                                  }}
                                >
                                  {item.queueTypeName}
                                </li>
                              );
                            })}
                        </ul>
                      </>
                    )}
                    {touched.queueTypeId && !values.queueTypeId && (
                      <span className="text-danger">{QUEUE_NAME_REQUIRED}</span>
                    )} */}

                    {/* <ErrorMessage
                      name="queueTypeId"
                      component="div"
                      className="text-danger"
                    /> */}
                  </div>

                  <div
                    className="custom-select-dropdown position-relative mb-4"
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === "region" ? null : "region"
                      )
                    }
                  >
                    <div className="customSelectValue" name="regionId">
                      {values?.regName
                        ? values.regName
                        : "Documents from region "}
                      <span className="customSelectArrow">
                        <i className="icon-chevron_right"></i>
                      </span>
                    </div>
                    {openDropdown === "region" && (
                      <>
                        <ul className="customSelectOption custom-scroll">
                          {regionData?.length > 0 &&
                            regionData?.map((item, index) => {
                              return (
                                <li
                                  className="customSelectOptionList"
                                  key={item.regionId}
                                  name="regionId"
                                  as={BootstrapForm.Control}
                                  value={item.regionId}
                                  onClick={() => {
                                    setFieldValue("regionId", item.regionId);
                                    setFieldValue(
                                      "regName",
                                      `${item.shortRegName} (${item.regName})`
                                    );
                                    setOpenDropdown(null);
                                  }}
                                >
                                  {`${item.shortRegName} (${item.regName})`}
                                </li>
                              );
                            })}
                        </ul>
                      </>
                    )}
                    {touched.regionId && !values.regionId && (
                      <span className="text-danger">{REGION_REQUIRED}</span>
                    )}

                    {/* <ErrorMessage
                      name="regionId"
                      component="div"
                      className="text-danger"
                    /> */}
                  </div>

                  <div
                    className="custom-select-dropdown position-relative mb-4"
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === "workspace" ? null : "workspace"
                      )
                    }
                  >
                    <div className="customSelectValue" name="wsId" id="wsId">
                      {!values?.workspaceName && defaultSpaceName?.length > 0
                        ? defaultSpaceName
                        : values?.workspaceName
                        ? values.workspaceName
                        : "Select Space"}
                      <span className="customSelectArrow">
                        <i className="icon-chevron_right"></i>
                      </span>
                    </div>
                    {openDropdown === "workspace" && (
                      <>
                        <ul className="customSelectOption custom-scroll">
                          <li className="customSelectOptionList create-section-wrappper">
                            <a
                              href="#"
                              onClick={()=>newWorkspaceShowModal()}
                              className="link-color fnt-14 fw-medium w-100"
                            >
                              Create New Space
                            </a>
                            {/* <div className="search-workspace">
                              <Field
                                as={BootstrapForm.Control}
                                className="form-control"
                                type="text"
                                name="search"
                                placeholder="Search"
                              />
                              <a href="#" className="clearAll-icon">
                                <i className="icon-search"></i>
                              </a>
                            </div> */}
                          </li>
                          {workSpace?.workspaces?.length > 0 &&
                            workSpace?.workspaces?.map((item, index) => {
                              return (
                                <li
                                  className="customSelectOptionList"
                                  key={item.wsId}
                                  as={BootstrapForm.Control}
                                  value={item.wsId}
                                  name="wsId"
                                  onClick={() => {
                                    setFieldValue("wsId", item.wsId);
                                    setFieldValue(
                                      "workspaceName",
                                      item.workspaceName
                                    );
                                    setOpenDropdown(null);
                                  }}
                                >
                                  {item.workspaceName}
                                </li>
                              );
                            })}
                        </ul>
                      </>
                    )}

                    {/* <ErrorMessage
                      name="wsId"
                      component="div"
                      className="text-danger"
                    /> */}
                    {/* {
                      !(defaultSpaceName?.length > 0 && !values?.workspaceName) ?   <span className="text-danger">{WORKSPACE_REQUIRED}</span> : (touched.wsId && !values.wsId) ?
                      <span className="text-danger">{WORKSPACE_REQUIRED}</span> :""
                    } */}
                    {/* {!defaultSpaceName?.length && !values.wsId && !values.workspaceName && (
                  <span className="text-danger">{WORKSPACE_REQUIRED}</span>
                )} */}
                    {workSpaceId
                      ? ""
                      : touched.wsId &&
                        !values.wsId &&
                        !workSpaceId && (
                          <span className="text-danger">
                            {WORKSPACE_REQUIRED}
                          </span>
                        )}
                  </div>

                  <Col md="12" className="text-center">
                    <Button
                      variant="primary"
                      type="submit"
                      // disabled={!(values.wsId && values.regionId &&values.queueTypeName&&values.queueTypeId)}
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
                      Create
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </>
      }
    />
  );
};

export default CreateQueue;
// import React, { useEffect, useState } from "react";
// import ModalComponent from "../../../../components/ModalComponent";
// import {
//   Button,
//   Col,
//   FloatingLabel,
//   OverlayTrigger,
//   Row,
//   Tooltip,
//   Form as BootstrapForm,
//   Spinner,
// } from "react-bootstrap";
// import { FieldCaptureJSON } from "../../../../constants/ArrayObjects";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getQueueTypeRequest,
//   queueRequest,
//   getRegionRequest,
//   getQueueRequest,
// } from "./reudx/queueAction";
// import * as Yup from "yup";
// import { ErrorMessage, Field, Formik, Form } from "formik";
// import {
//   QUEUE_NAME_REQUIRED,
//   QUEUE_TYPE_REQUIRED,
//   REGION_REQUIRED,
//   WORKSPACE_REQUIRED,
// } from "../../../../constants/ValidationMessageConstats";
// import { getWorkSpaceRequest } from "../redux/workSpaceAction";
// const CreateQueue = ({ setNewQueueshow, NewQueueShow, workSpaceId }) => {
//   const dispatch = useDispatch();
//   const [workId, setWorkId] = useState("");
//   const [workSpaceDropdown, setWorkSpaceDropdown] = useState(false);
//   const [queueTypeDropdown, setQueueTypeDropdown] = useState(false);
//   const [regionDropdown, setRegionDropdown] = useState(false);
//   const { workSpace, loading, queueTypeData, regionData } = useSelector(
//     (state) => ({
//       workSpace: state.workSpace.workspaces || [],
//       loading: state.workSpace.loading,
//       queueTypeData: state.queue.queueTypeData,
//       regionData: state.queue.regionData,
//     })
//   );

//   const initialValues = {
//     queueTypeName: "",
//     queueTypeId: "",
//     regionId: "",
//     wsId: "",
//   };
//   const validationSchema = Yup.object({
//     queueTypeName: Yup.string().required(QUEUE_NAME_REQUIRED) || "",
//     queueTypeId: Yup.string().required(QUEUE_TYPE_REQUIRED) || "",
//     wsId: Yup.string().required(WORKSPACE_REQUIRED) || "",
//     regionId: Yup.string().required(REGION_REQUIRED) || "",
//   });
//   const onSubmit = (data, { setSubmitting }) => {
//     const apiParams = {
//       data: {
//         queueTypeName: data.queueTypeName,
//         queueTypeId: data.queueTypeId.toString(),
//         queueEmailId: `${data.queueTypeName}@gmail.com`,
//         queueFieldsJson: JSON.stringify(FieldCaptureJSON),
//         regionId: data.regionId.toString(),
//         wsId: data.wsId.toString() || workId,
//       },
//       onSuccess: (res) => {
//         setNewQueueshow(false);

//         dispatch(
//           getQueueRequest({
//             data: {
//               wsId: res.data.content.wsId,
//               search: "",
//               page: 1,
//               pageSize: 10,
//               orderColumn: "",
//             },
//           })
//         );
//       },
//       onErrors: (res) => {},
//     };

//     dispatch(queueRequest(apiParams));
//     setSubmitting(false);
//   };
//   useEffect(() => {
//     const apiParams = {
//       data: {},
//       onSuccess: () => {},
//       onErrors: () => {},
//     };
//     // dispatch(getWorkSpaceRequest({data: {
//     //   search: "",
//     //   page: 1,
//     //   pageSize: 30,
//     //   orderColumn: "",
//     // },}))
//     dispatch(getQueueTypeRequest(apiParams));
//     dispatch(getRegionRequest(apiParams));
//   }, []);
//   const defaultSpaceName =
//     workSpace?.find((item) => item.wsId === workSpaceId)?.workspaceName || "";

//   return (
//     <ModalComponent
//       centered={true}
//       show={NewQueueShow}
//       onHide={setNewQueueshow}
//       backdrop={"static"}
//       title={"Create New Queue"}
//       body={
//         <>
//           <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={onSubmit}
//           >
//             {({ isSubmitting, setFieldValue, values ,setFieldTouched}) => (
//               <Form>
//                 <Row>
//                   <Col md="10" className="mb-3">
//                     <FloatingLabel
//                       controlId="floatingInput"
//                       label="Queues name"
//                       className="mb-3"
//                     >
//                       <Field
//                         type="text"
//                         placeholder="Enter Queue Name"
//                         name="queueTypeName"
//                         as={BootstrapForm.Control}
//                         className="form-control"
//                       />
//                       <ErrorMessage
//                         name="queueTypeName"
//                         component="div"
//                         className="text-danger"
//                       />
//                     </FloatingLabel>
//                   </Col>
//                   <Col md="2" className="mb-3">
//                     <OverlayTrigger
//                       overlay={<Tooltip id={"t-info"}>{"Information"}</Tooltip>}
//                       placement="top"
//                     >
//                       <a href="#">
//                         {" "}
//                         <span className="filter-btn h-58 w-58">
//                           <i className="icon-info"></i>
//                         </span>
//                       </a>
//                     </OverlayTrigger>
//                   </Col>
//                   {/* <Col md="12" className="mb-3">
//                     <FloatingLabel
//                       controlId="floatingSelect"
//                       label="Tax Invoice"
//                       className="mb-3"
//                     >
//                       <Field
//                         // as="select"
//                         as={BootstrapForm.Select}
//                         aria-label="Floating label select example"
//                         name="queueTypeId"
//                         className="form-control"
//                       >
//                         {queueTypeData.length > 0 &&
//                           queueTypeData?.map((item, index) => {
//                             return (
//                               <option
//                                 id={item.queueTypeId}
//                                 value={item.queueTypeId}
//                               >
//                                 {item.queueTypeName}
//                               </option>
//                             );
//                           })}
//                       </Field>
//                       <ErrorMessage
//                         name="queueTypeId"
//                         component="div"
//                         className="text-danger"
//                       />
//                     </FloatingLabel>
//                   </Col> */}
//                   <div
//                     className="custom-select-dropdown position-relative mb-4"
//                     onClick={() => setQueueTypeDropdown(!queueTypeDropdown)}
//                   >
//                     <div className="customSelectValue">
//                       {values.queueTypeName
//                         ? values.queueTypeName
//                         : "Select Tax Invoice"}
//                       <span className="customSelectArrow">
//                         <i className="icon-chevron_right"></i>
//                       </span>
//                     </div>
//                     {queueTypeDropdown && (
//                       <>
//                         <ul className="customSelectOption custom-scroll">
//                           {queueTypeData?.length > 0 &&
//                             queueTypeData?.map((item, index) => {
//                               return (
//                                 <li
//                                   className="customSelectOptionList"
//                                   id={item.queueTypeId}
//                                   value={item.queueTypeId}
//                                   onClick={() => {
//                                     setFieldValue(
//                                       "queueTypeId",
//                                       item.queueTypeId
//                                     );
//                                     setFieldValue(
//                                       "queueTypeName",
//                                       item.queueTypeName
//                                     );
//                                     setQueueTypeDropdown(false);
//                                     setFieldTouched("queueTypeId", true, false);
//                                   }}
//                                 >
//                                   {item.queueTypeName}
//                                 </li>
//                               );
//                             })}
//                         </ul>
//                       </>
//                     )}
//                     <ErrorMessage
//                       name="queueTypeId"
//                       component="div"
//                       className="text-danger"
//                     />
//                   </div>
//                   <div
//                     className="custom-select-dropdown position-relative mb-4"
//                     onClick={() => setRegionDropdown(!regionDropdown)}
//                   >
//                     <div className="customSelectValue">
//                       {values?.regName ? values.regName : "Select Region"}
//                       <span className="customSelectArrow">
//                         <i className="icon-chevron_right"></i>
//                       </span>
//                     </div>
//                     {regionDropdown && (
//                       <>
//                         <ul className="customSelectOption custom-scroll">
//                           {regionData?.length > 0 &&
//                             regionData?.map((item, index) => {
//                               return (
//                                 <li
//                                   className="customSelectOptionList"
//                                   id={item.regionId}
//                                   value={item.regionId}
//                                   onClick={() => {
//                                     setFieldValue("regionId", item.regionId);
//                                     setFieldValue(
//                                       "regName",
//                                       `${item.shortRegName} (${item.regName})`
//                                     );
//                                     setRegionDropdown(false);
//                                     setFieldTouched("regionId", true, false);
//                                   }}
//                                 >
//                                   {`${item.shortRegName} (${item.regName})`}
//                                 </li>
//                               );
//                             })}
//                         </ul>
//                       </>
//                     )}
//                     <ErrorMessage
//                       name="regionId"
//                       component="div"
//                       className="text-danger"
//                     />
//                   </div>
//                   {/* <Col md="12" className="mb-3">
//                     <FloatingLabel
//                       controlId="floatingInput"
//                       label="Tax Invoice"
//                       className="mb-3"
//                     >
//                       <Field
//                         type="text"
//                         name="queueTypeId"
//                         // disabled={true}
//                         as={BootstrapForm.Control}
//                         placeholder="Enter Tax Invoice"
//                       />
//                       <span className="field-icon fnt-18">
//                                     <i className="icon-lock"></i>
//                                 </span>
//                       <ErrorMessage
//                         name="queueTypeId"
//                         component="div"
//                         className="text-danger"
//                       />
//                     </FloatingLabel>
//                   </Col> */}
//                   {/* {regionData?.length > 0 && (
//                     <Col md="12" className="mb-3">
//                       <FloatingLabel
//                         controlId="floatingSelect"
//                         label="Documents from region *"
//                         className="mb-3"

//                       >
//                         <Field
//                           // as="select"
//                           as={BootstrapForm.Select}
//                           aria-label="Floating label select example"
//                           name="regionId"
//                            className="form-control"
//                         >
//                           {regionData?.map((item, index) => {
//                             return (
//                               <option id={item.regionId} value={item.regionId}>
//                                 {`${item.shortRegName} (${item.regName})`}
//                               </option>
//                             );
//                           })}
//                         </Field>
//                         <ErrorMessage
//                           name="regionId"
//                           component="div"
//                           className="text-danger"
//                         />
//                       </FloatingLabel>
//                     </Col>
//                   )} */}

//                   <div
//                     className="custom-select-dropdown position-relative mb-4"
//                     onClick={() => setWorkSpaceDropdown(!workSpaceDropdown)}
//                   >
//                     <div className="customSelectValue">
//                       {/* {workSpaceId} */}
//                       {/* {defaultSpaceName?.length
//                         ? defaultSpaceName
//                         : values?.workspaceName
//                         ? values.workspaceName
//                         : "Select Workspace"}    */}
//                        {(!values?.workspaceName && defaultSpaceName?.length > 0 )? defaultSpaceName : values?.workspaceName
//                           ? values.workspaceName
//                           : "Select Workspace"}
//                       <span className="customSelectArrow">
//                         <i className="icon-chevron_right"></i>
//                       </span>
//                     </div>
//                     {workSpaceDropdown && (
//                       <>
//                         <ul className="customSelectOption custom-scroll">
//                           {workSpace?.length > 0 &&
//                             workSpace?.map((item, index) => {
//                               return (
//                                 <li
//                                   className="customSelectOptionList"
//                                   id={item.wsId}
//                                   value={item.wsId}
//                                   onClick={() => {
//                                     setFieldValue("wsId", item.wsId);
//                                     setFieldValue(
//                                       "workspaceName",
//                                       item.workspaceName
//                                     );
//                                     setWorkSpaceDropdown(false);
//                                     setFieldTouched("wsId", true, false);
//                                   }}
//                                 >
//                                   {item.workspaceName}
//                                 </li>
//                               );
//                             })}
//                         </ul>
//                       </>
//                     )}
//                       <ErrorMessage
//                         name="wsId"
//                         component="div"
//                         className="text-danger"
//                       />
//                   </div>
//                   {/* {workSpace?.length > 0 && (
//                     <Col md="12" className="mb-3">
//                       <FloatingLabel
//                         controlId="floatingSelect"
//                         label="Select WorkSpace *"
//                         className="mb-3"
//                       >
//                         <Field
//                           // as="select"
//                           as={BootstrapForm.Select}
//                           aria-label="Floating label select example"
//                           name="wsId"
//                           className="form-control"
//                         >
//                           {workSpace?.length > 0 &&
//                             workSpace.map((item, index) => {
//                               return (
//                                 <option id={item.wsId} value={item.wsId}>
//                                   {item.workspaceName}
//                                 </option>
//                               );
//                             })}
//                           <option>Create New Workspace</option>
//                         </Field>
//                         <ErrorMessage
//                           name="wsId"
//                           component="div"
//                           className="text-danger"
//                         />
//                       </FloatingLabel>
//                     </Col>
//                   )} */}

//                   <Col md="12" className="text-center">
//                     <Button
//                       variant="primary"
//                       type="submit"
//                       // disabled={!(values.wsId && values.regionId &&values.queueTypeName&&values.queueTypeId)}
//                       disabled={loading ? true : false}
//                     >
//                       {loading && (
//                         <Spinner
//                           as="span"
//                           animation="grow"
//                           size="sm"
//                           role="status"
//                           aria-hidden="true"
//                         />
//                       )}
//                       Create
//                     </Button>
//                   </Col>
//                 </Row>
//               </Form>
//             )}
//           </Formik>
//         </>
//       }
//     />
//   );
// };

// export default CreateQueue;
