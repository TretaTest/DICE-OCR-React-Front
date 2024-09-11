import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Col,
  Row,
  Tab,
  Accordion,
  Form as BootstrapForm,
} from "react-bootstrap";
import { Formik, Field, Form } from "formik";

import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import SigleFieldToCapture from "./SigleFieldToCapture";
import { FIELDS_TO_CAPTURE_ROUTE } from "../../../../constants/RouteNameConstant";
import { useDispatch, useSelector } from "react-redux";
import {
  getFieldJSONChangesRequest,
  getQueueOnlySuccess,
} from "../../WorkSpace/Queue/reudx/queueAction";
const FieldToCapture = () => {
  const [childIndex, setChildIndex] = useState(0);
  const [fieldData, setFieldData] = useState({});
  const [sectionData, setSectioData] = useState({});
  const [fieldJSONIndex, setFieldJSONIndex] = useState(null);
  const [draggable, setDragable] = useState(false);
  const [openAccordions, setOpenAccordions] = useState([]);
  const [addSectionModal, setAddSectionModal] = useState({
    modal: false,
    action: "Create",
    editJson: false,
    delete: false,
  });
  const [addLabelModal, setAddLabelModal] = useState({
    modal: false,
    action: "Create",
    editJson: false,
    delete: false,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAccordionToggle = (itemId) => {
    if (openAccordions.includes(itemId)) {
      // Close the accordion if it's already open
      setOpenAccordions(openAccordions.filter((id) => id !== itemId));
    } else {
      // Open the accordion and keep others open as well
      setOpenAccordions([...openAccordions, itemId]);
    }
  };

  const { queueByworkSpace, activeQueue, activeWorkSpace } = useSelector(
    (state) => ({
      queueByworkSpace: state.queue.queueByworkSpace || [],
      activeQueue: state.queue.activeQueue || {},
      activeWorkSpace: state.workSpace.activeWorkSpace || {},
    })
  );

  const generateInitialValues = (queueByworkSpace) => ({
    search: "",
    fields:
      queueByworkSpace?.length > 0 &&
      queueByworkSpace?.map((item) => ({
        id: item.id || "",
        category: item.category || "",
        icon: null,
        label: item?.label || "",
        hidden: item?.hidden || false,
        can_export: item?.can_export || false,
        required: item?.required || false,
        children:
          item?.children?.map((child) => ({
            label: child.label || "",
            id: child.id || "",
            description: child.description || "This is description",
            category: child.category || "",
            type: child.type || "",
            ui_configuration: {
              type: child.type || "", // Value Source dropdown
              edit: child.edit || "", // Editing dropdown
            },
            rir_field_names: child.rir_field_names || [],
            threshold: child?.threshold || "",
            constraints: {
              required: child?.constraints?.required || false,
            },
            can_export: child?.can_export || false,
            hidden: child?.hidden || false,
          })) || [],
      })),
  });
  const [initialValues, setInitialValues] = useState(
    generateInitialValues(queueByworkSpace)
  );

  // const initialValues = generateInitialValues(queueByworkSpace || []);
  const handleClickField = (sectionId, childId) => {
    const datas = [...queueByworkSpace] || [];

    const fields = datas.find(item=>item.id === sectionId);
    const sectionIndex=datas?.findIndex(item=>item.id === sectionId);
    const child=fields?.children?.find(item=>item.id===childId)
    setFieldData(child);
    setFieldJSONIndex(sectionIndex);
  };
  const handleSaveChanges = (values) => {
    const newFieldJSON = [...queueByworkSpace];
    const sectionIndex=newFieldJSON?.findIndex(item=>item.id === sectionData?.id)
    if (addLabelModal?.action === "Create") {
      newFieldJSON[sectionIndex].children.push(values)
    } else if (addLabelModal.action === "Edit") {
      newFieldJSON[fieldJSONIndex].children[childIndex] = values;

    }

    const apiParams = {
      data: {
        wsId: activeWorkSpace.wsId || "",
        fieldJSON: JSON.stringify(newFieldJSON),
      },
      onSuccess: (res) => {
        toast.success(
          `Category field json ${
            addLabelModal?.action === "Create" ? "created" : "updated"
          } successfully.`
        );
        dispatch(getQueueOnlySuccess({ data: newFieldJSON }));
        setAddLabelModal((prevState) => ({
          ...prevState,
          modal: false, // Only update the 'modal' property
        }));
      },
      onErrors: () => {},
    };
    dispatch(getFieldJSONChangesRequest(apiParams, activeQueue.queueId));
  };
  const handleSaveSectionChanges = (values) => {
    const newFieldJSON = [...queueByworkSpace];
    if (addSectionModal.action === "Create") {
      newFieldJSON.push(values);
    } else if (addSectionModal.action === "Edit") {
      const index = newFieldJSON.findIndex(
        (item) => item.id === sectionData?.id
      );
      newFieldJSON[index] = values;
    }

    const apiParams = {
      data: {
        wsId: activeWorkSpace.wsId || "",
        fieldJSON: JSON.stringify(newFieldJSON),
      },
      onSuccess: (res) => {
        toast.success(
          `Category field json ${
            addSectionModal?.action === "Create" ? "created" : "updated"
          } successfully.`
        );
        dispatch(getQueueOnlySuccess({ data: newFieldJSON }));
        setAddSectionModal((prevState) => ({
          ...prevState,
          modal: false, // Only update the 'modal' property
        }));
      },
      onErrors: () => {},
    };
    dispatch(getFieldJSONChangesRequest(apiParams, activeQueue.queueId));
  };
  const handleDeleteJSON = (cindex) => {
    const newFieldJSON = [...queueByworkSpace];
    if (cindex > -1) {
      newFieldJSON[fieldJSONIndex].children.splice(cindex, 1);
    }
    const apiParams = {
      data: {
        wsId: activeWorkSpace.wsId || "",
        fieldJSON: JSON.stringify(newFieldJSON),
      },
      onSuccess: (res) => {
        toast.success(`Category field json deleted successfully.`);
        dispatch(getQueueOnlySuccess({ data: newFieldJSON }));
        setAddLabelModal((prevState) => ({
          ...prevState,
          modal: false, // Only update the 'modal' property
        }));
      },
      onErrors: () => {},
    };
    dispatch(getFieldJSONChangesRequest(apiParams, activeQueue.queueId));
  };
  const handleDeleteSection = () => {
    console.log('fieldJSONIndex', fieldJSONIndex)
    const newFieldJSON = [...queueByworkSpace];
    if (fieldJSONIndex > -1) {
      newFieldJSON?.splice(fieldJSONIndex, 1);
    }
    const apiParams = {
      data: {
        wsId: activeWorkSpace.wsId || "",
        fieldJSON: JSON.stringify(newFieldJSON),
      },
      onSuccess: (res) => {
        toast.success(`Category field json deleted successfully.`);
        dispatch(getQueueOnlySuccess({ data: newFieldJSON }));
        setAddSectionModal((prevState) => ({
          ...prevState,
          modal: false, // Only update the 'modal' property
        }));
      },
      onErrors: () => {},
    };
    dispatch(getFieldJSONChangesRequest(apiParams, activeQueue.queueId));
  };
  useEffect(() => {
    // Update initialValues whenever queueByworkSpace changes

    setInitialValues(generateInitialValues(queueByworkSpace));
  }, [queueByworkSpace]);

  return (
    <>
      <Tab.Pane eventKey="second">
        {/* {childIndex || childIndex === 0 ? ( */}
        {/* <SigleFieldToCapture
              childIndex={childIndex}
              fieldData={fieldData}
              fieldJSONIndex={fieldJSONIndex}
              setChildIndex={setChildIndex}
            /> */}
        {/* </> */}
        {/* ) : ( */}
        <>
          {/* ==== Fields Capture first step ==== */}
          <Row className="align-items-center">
            <Col className="mb-3">
              <div className="mainTitle">
                <Breadcrumb>
                  <Breadcrumb.Item
                    onClick={() => {
                      navigate(FIELDS_TO_CAPTURE_ROUTE);
                    }}
                  >
                    Settings{" "}
                  </Breadcrumb.Item>
                  <Breadcrumb.Item href="#">
                    {activeWorkSpace?.workSpaceName}{" "}
                  </Breadcrumb.Item>
                  <Breadcrumb.Item href="#">
                    {activeQueue?.queueName}{" "}
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active className="d-flex gap-1">
                    Label Settings
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>

            <Col md="auto" className="mb-3 d-flex gap-3 align-items-center">
              <BootstrapForm.Group
                className="search-fields"
                controlId="exampleForm.ControlInput1"
              >
                <BootstrapForm.Control
                  className="form-control"
                  type="text"
                  name="search"
                  placeholder="Search fields here..."
                />

                <a href="#" className="searchfields-icon">
                  <i className="icon-search"></i>
                </a>
              </BootstrapForm.Group>

              <Link
                title="Sequencing"
                id="t-2"
                onClick={() => setDragable(!draggable)}
              >
                <span className="optionfilter-btn">
                  <img
                    src="/assets/images/drag-option-icon.png"
                    className="img-fuild"
                    alt="drag-option-icon"
                  />
                </span>
              </Link>
              <a
                href="#"
                className="btn btn-outline-primary"
                onClick={() => {
                  setAddLabelModal((prevState) => ({
                    ...prevState,
                    modal: false, // Only update the 'modal' property
                  }));
                  setAddSectionModal({
                    modal: true,
                    action: "Create",
                    delete: false,
                    editJson: false,
                  });
                }}
              >
                {" "}
                Add Section
              </a>
            </Col>
          </Row>
          <div className="setting-scroll custom-scroll accordion-fields">
            <Row className="">
              <Col md="6">
                <Formik
                  initialValues={initialValues}
                  onSubmit={(values) => {
                    // Handle form submission
                  }}
                >
                  {({ handleSubmit, values }) => (
                    <Form onSubmit={handleSubmit}>
                      <Accordion defaultActiveKey="0" alwaysOpen>
                        {queueByworkSpace?.length > 0 &&
                          queueByworkSpace
                            ?.filter((fItem, findex) => {
                              return fItem.hidden !== true;
                            })
                            ?.map((item, index) => {
                              const isActive = openAccordions.includes(item.id);
                              return (
                                <>
                                  <Accordion.Item
                                    eventKey={item.id}
                                    key={item.id}
                                  >
                                    <Accordion.Header
                                      onClick={() =>
                                        handleAccordionToggle(item.id)
                                      }
                                    >
                                      {draggable && (
                                        <span>
                                          <img
                                            src="/assets/images/darg-dots-icon.svg"
                                            className="img-fuild me-2"
                                            alt="darg-dots-icon"
                                          />
                                        </span>
                                      )}
                                      <span>
                                        <i className="icon-triangle fnt-6 me-2 d-inline-block"></i>
                                      </span>{" "}
                                      {item.label}
                                    </Accordion.Header>

                                    <div className="addFieldBtn d-flex gap-2">
                                      {isActive ? (
                                        <a
                                          href="#"
                                          onClick={() => {
                                            handleClickField(item.id);
                                            setSectioData(item);
                                            setAddSectionModal((prevState) => ({
                                              ...prevState,
                                              modal: false, // Only update the 'modal' property
                                            }));
                                            setAddLabelModal({
                                              modal: true,
                                              action: "Create",
                                              delete: false,
                                              editJson: false,
                                            });
                                          }}
                                          className="btn btn-outline-primary btn-outline-primary-fill py-1 fnt-13 "
                                        >
                                          {" "}
                                          <i className="icon icon-plus fnt-12"></i>{" "}
                                          Add Label
                                        </a>
                                      ) : (
                                        <a
                                          href="#"
                                          className="show-link-arrow header-show"
                                          onClick={() => {
                                            handleClickField(
                                              item.id,
                                            );
                                            setAddLabelModal((prevState) => ({
                                              ...prevState,
                                              modal: false, // Only update the 'modal' property
                                            }));
                                            setSectioData(item);

                                            setAddSectionModal({
                                              modal: true,
                                              action: "Edit",
                                              delete: true,
                                              editJson: true,
                                            });
                                          }}
                                        >
                                          <i className="icon icon-chevron_right"></i>
                                        </a>
                                      )}
                                    </div>

                                    <Accordion.Body>
                                      <Row className="pb-3 fields-label-border border-bottom">
                                        <Col md="5" className="border-end">
                                          <div className="fw-semibold">
                                            Label
                                          </div>
                                        </Col>
                                        <Col className="border-end">
                                          <div className="fw-semibold d-flex gap-2">
                                            <Field
                                              type="checkbox"
                                              name={`fields[${index}].hidden`}
                                              // aria-label="Visible option"
                                              as={BootstrapForm.Check}
                                            />
                                            Visible
                                          </div>
                                        </Col>
                                        <Col className="border-end">
                                          <div className="fw-semibold d-flex gap-2">
                                            <Field
                                              type="checkbox"
                                              name={`fields[${index}].can_export`}
                                              // aria-label="Export option"
                                              as={BootstrapForm.Check}
                                            />
                                            Export
                                          </div>
                                        </Col>
                                        <Col>
                                          <div className="fw-semibold d-flex gap-2">
                                            <Field
                                              type="checkbox"
                                              name={`fields[${index}].required`}
                                              // aria-label="Require option"
                                              as={BootstrapForm.Check}
                                            />
                                            Require
                                          </div>
                                        </Col>
                                      </Row>

                                      {item?.children?.length > 0 &&
                                        item.children?.map((child, cindex) => {
                                          return (
                                            <div className="fields-label-wrapper">
                                              <Row className="py-3 fields-label-border">
                                                <Col md="5">
                                                  <div className="d-flex align-items-center gap-3">
                                                    {draggable && (
                                                      <img
                                                        src="/assets/images/darg-dots-icon.svg"
                                                        className="img-fuild"
                                                        alt="darg-dots-icon"
                                                      />
                                                    )}
                                                    <div className="fnt-15 fw-medium">
                                                      {child.label}
                                                    </div>
                                                  </div>
                                                </Col>
                                                <Col>
                                                  <div className="fnt-15 d-flex gap-2">
                                                    <Field
                                                      type="checkbox"
                                                      name={`fields[${index}].children[${cindex}].hidden`}
                                                      // aria-label="Visible option"
                                                      as={BootstrapForm.Check}
                                                    />
                                                  </div>
                                                </Col>
                                                <Col>
                                                  <div className="fnt-15 d-flex gap-2">
                                                    <Field
                                                      type="checkbox"
                                                      name={`fields[${index}].children[${cindex}].can_export`}
                                                      // aria-label="Export option"
                                                      as={BootstrapForm.Check}
                                                    />
                                                  </div>
                                                </Col>
                                                <Col>
                                                  <div className="fnt-15 d-flex gap-2 justify-content-between">
                                                    <Field
                                                      type="checkbox"
                                                      name={`fields[${index}].children[${cindex}].constraints.required`}
                                                      // aria-label="Require option"
                                                      as={BootstrapForm.Check}
                                                    />
                                                    <a
                                                      href="#"
                                                      className="show-link-arrow"
                                                      onClick={() => {
                                                        handleClickField(
                                                          item.id,
                                                          child?.id
                                                        );
                                                        setChildIndex(cindex);
                                                        setAddLabelModal(
                                                          (prevState) => ({
                                                            ...prevState,
                                                            modal: false, // Only update the 'modal' property
                                                          })
                                                        );
                                                        setAddLabelModal({
                                                          modal: true,
                                                          action: "Edit",
                                                          delete: true,
                                                          editJson: true,
                                                        });
                                                      }}
                                                    >
                                                      <i className="icon icon-chevron_right"></i>
                                                    </a>
                                                  </div>
                                                </Col>
                                              </Row>
                                            </div>
                                          );
                                        })}
                                    </Accordion.Body>
                                  </Accordion.Item>
                                </>
                              );
                            })}
                      </Accordion>
                    </Form>
                  )}
                </Formik>
              </Col>
              {(addLabelModal.modal || addSectionModal.modal) && (
                <SigleFieldToCapture
                  childIndex={childIndex}
                  addSectionModal={addSectionModal}
                  setAddSectionModal={setAddSectionModal}
                  fieldData={fieldData}
                  sectionData={sectionData}
                  fieldJSONIndex={fieldJSONIndex}
                  setChildIndex={setChildIndex}
                  addLabelModal={addLabelModal}
                  setAddLabelModal={setAddLabelModal}
                  handleSaveChanges={handleSaveChanges}
                  handleSaveSectionChanges={handleSaveSectionChanges}
                  handleDeleteJSON={handleDeleteJSON}
                  handleDeleteSection={handleDeleteSection}
                />
              )}
            </Row>
          </div>
        </>
        {/* // )} */}
      </Tab.Pane>
    </>
  );
};

export default FieldToCapture;
