import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import ModalComponent from "./ModalComponent";
import ReactTooltip from "react-tooltip";
import { Field, Formik, Form as FormikForm } from "formik";
import {
  Accordion,
  Button,
  Col,
  Dropdown,
  FloatingLabel,
  Form,
  OverlayTrigger,
  Row,
  Spinner,
  Tooltip,
  NavItem,
  NavLink,
} from "react-bootstrap";
import {
  activeQueueRequest,
  clearActiveQueueRequest,
  deleteQueueRequest,
  getDocumentListByQueueRequest,
  getQueueOnlyRequest,
  getQueueRequest,
  setWsIdAndQueueId,
  updateQueueRequest,
} from "../modules/Authorization/WorkSpace/Queue/reudx/queueAction";
import {
  activeWorkSpaceRequest,
  clearActiveWorkSpaceRequest,
  deleteWorkSpaceRequest,
  duplicateQueueRequest,
  moveQueueInWorkSpaceRequest,
  updateWorkSpaceRequest,
} from "../modules/Authorization/WorkSpace/redux/workSpaceAction";
import { BASIC_SETTING_ROUTE } from "../constants/RouteNameConstant";
import { FieldCaptureJSON } from "../constants/ArrayObjects";

const SidebarSubDrawer = ({
  newWorkspaceShowModal,
  setErrorMsg,
  setNewQueueshow,
  setWorkSpaceId,
  state,
  // deleteQueueModal,
  // duplicateQueueModal,
  // moveQueuehowModal,
}) => {
  const dispatch = useDispatch();
  const { workSpaces, activeQueue, queueLoading, afterReviewActiveSpace } =
    useSelector((state) => ({
      workSpaces: state.workSpace,
      activeQueue: state.queue.activeQueue || {},
      queueLoading: state.queue.loading || false,
      afterReviewActiveSpace: state.queue.afterReviewActiveSpace || {},
    }));
  const [openDropdown, setOpenDropdown] = useState(null);
  const [errorMsgForMoveQueue, setErrorMsgForMoveQueue] = useState("");
  const [workSpaceNameId, setWorkSpaceNameId] = useState({
    workSpaceName: "",
    wsId: "",
  });
  const [renameWorkspaceId, setRenameWorkspaceId] = useState(null);
  const [renameWorkspaceName, setRenameWorkspaceName] = useState("");
  const [renameQueueId, setRenameQueueId] = useState(null);
  const [renameQueueName, setRenameQueueName] = useState("");
  const [deleteQueueShow, setdeleteQueueShow] = useState(false);
  const [moveQueuehow, setmoveQueuehow] = useState(false);
  const [duplicateQueueShow, setduplicateQueueShow] = useState(false);
  const duplicateQueueModal = () => setduplicateQueueShow(true);

  const moveQueuehowModal = () => {
    setWorkSpaceNameId({
      workSpaceName: "",
      wsId: "",
    });
    setmoveQueuehow(true);
  };

  const deleteQueueModal = () => setdeleteQueueShow(true);

  const navigate = useNavigate();

  const handleQueueList = (e, wsId) => {
    const apiParams = {
      data: {
        wsId: wsId,
        search: "",
        page: 1,
        pageSize: 10,
        orderColumn: "",
      },
      onSuccess: () => {},
      onErrors: () => {},
    };

    dispatch(getQueueRequest(apiParams));
  };
  const handleDeleteWorkSpace = (wsId) => {
    const apiParams = {
      data: {
        id: wsId,
      },
      onSuccess: (res) => {
        // dispatch(getWorkSpaceRequest({data: {
        //   search: "",
        //   page: 1,
        //   pageSize: 30,
        //   orderColumn: "",
        // },}))
      },
      onErrors: () => {},
    };
    dispatch(deleteWorkSpaceRequest(apiParams));
  };
  const handleDeleteQueue = () => {
    const apiParams = {
      data: {
        id: activeQueue?.queueId || "",
        workspaceid: workSpaces?.activeWorkSpace?.wsId || "",
      },
      onSuccess: () => {
        // dispatch(
        //   getQueueRequest({
        //     data: {
        //       wsId: workSpaces?.activeWorkSpace?.wsId,
        //       search: "",
        //       page: 1,
        //       pageSize: 10,
        //       orderColumn: "",
        //     },
        //     // onSuccess:()=>{

        //     //   dispatch(
        //     //     getWorkSpaceByIdRequest({
        //     //       data: {
        //     //         wsId: workSpaces?.activeWorkSpace?.wsId,
        //     //       },
        //     //       onSuccess: () => {

        //     //       },
        //     //     })
        //     //   );
        //     // }
        //   })
        // );
        setdeleteQueueShow(false);
      },
      onErrors: (err) => {
        console.log("err", err);
      },
    };
    dispatch(deleteQueueRequest(apiParams));
  };

  const handleActiveSpace = (wsId, workSpaceName, queueCount) => {
    dispatch(clearActiveWorkSpaceRequest({ data: {} }));

    dispatch(
      activeWorkSpaceRequest({
        data: {
          wsId: wsId,
          workSpaceName: workSpaceName,
          queueCount: queueCount,
        },
      })
    );
    // const index = workSpaces?.workspaces?.findIndex(
    //   (item) => item.wsId === wsId
    // );
    // setActiveIndex(index);
  };
  const handleActiveQueue = (queueName, queueId, queueEmailId = "") => {
    dispatch(clearActiveQueueRequest({ data: {} }));
    dispatch(
      activeQueueRequest({
        data: {
          queueName: queueName,
          queueId: queueId,
          queueEmailId: queueEmailId,
        },
      })
    );
  };
  // const display=false;
  const handleRenameConfirm = () => {
    const apiParams = {
      data: {
        workspaceName: renameWorkspaceName,
        wsId: renameWorkspaceId,
      },
      onSuccess: () => {
        setRenameWorkspaceId(null);
        setRenameWorkspaceName("");
        // dispatch(getWorkSpaceRequest({data: {
        //   search: "",
        //   page: 1,
        //   pageSize: 30,
        //   orderColumn: "",
        // },}))
      },
      onErrors: () => {},
    };

    dispatch(updateWorkSpaceRequest(apiParams));
  };
  const handleRenameQueueConfirm = (queueData) => {
    const apiParams = {
      data: {
        queueName: renameQueueName,
        queueId: renameQueueId,
        queueTypeId: queueData?.queueTypeId,
        queueTypeName: queueData?.queueTypeName,
        queueEmailId: queueData.queueEmailId,
        queueFieldsJson: JSON.stringify(FieldCaptureJSON),
        regionId: queueData?.regionId,
        wsId: queueData?.wsId,
        shortRegName: queueData?.shortRegName,
      },
      onSuccess: () => {
        setRenameQueueId(null);
        setRenameQueueName("");
        dispatch(
          getQueueRequest({
            data: {
              wsId: queueData?.wsId,
              search: "",
              page: 1,
              pageSize: 10,
              orderColumn: "",
            },
          })
        );
      },
      onErrors: () => {},
    };
    dispatch(updateQueueRequest(apiParams));
  };
  const initialValues = {
    wsId: "",
  };
  // Define the validation schema using Yup
  const validationSchema = Yup.object().shape({
    allDocsDeleted: Yup.boolean().oneOf(
      [true],
      "Confirm all points above to delete this queue."
    ),
    usageDataDeleted: Yup.boolean().oneOf(
      [true],
      "Confirm your understanding and consent to these irreversible actions:"
    ),
  });
  const handleMoveQueue = (qid) => {
    const apiParams = {
      data: {
        queueId: qid,
        desitnationWsId: workSpaceNameId.wsId,
      },
      onSuccess: (res) => {
        // dispatch(
        //   getWorkSpaceByIdRequest({
        //     data: {
        //       wsId: workSpaces?.activeWorkSpace?.wsId,
        //     },
        //     onSuccess: () => {
        //       dispatch(
        //         getQueueRequest({
        //           data: {
        //             wsId: workSpaces?.activeWorkSpace?.wsId,
        //             search: "",
        //             page: 1,
        //             pageSize: 10,
        //             orderColumn: "",
        //           },
        //           onSuccess: () => {
        //             dispatch(
        //               getWorkSpaceByIdRequest({
        //                 data: { wsId: workSpaceNameId.wsId },
        //                 onSuccess: () => {
        //                   dispatch(
        //                     getQueueRequest({
        //                       data: {
        //                         wsId: workSpaceNameId.wsId,
        //                         search: "",
        //                         page: 1,
        //                         pageSize: 10,
        //                         orderColumn: "",
        //                       },
        //                     })
        //                   );
        //                 },
        //               })
        //             );
        //           },
        //         })
        //       );
        //     },
        //   })
        // );

        setmoveQueuehow(false);
      },
    };
    dispatch(
      moveQueueInWorkSpaceRequest(apiParams, workSpaces?.activeWorkSpace?.wsId)
    );
  };
  const handleDuplicateQueue = (values) => {
    const selectedSettings =
      Object.keys(values)
        .filter((key) => values[key] === true && key !== "queueName")
        .join(", ") || "";
    const apiParams = {
      data: {
        queueId: activeQueue.queueId,
        newQueueName: values.queueName,
        newQueueEmailId: `${values.queueName}@gmail.com`,
        settingsToCopy: selectedSettings,
      },
      onSuccess: () => {
        setduplicateQueueShow(false);
      },
      onErrors: () => {},
    };
    dispatch(duplicateQueueRequest(apiParams, workSpaces.activeWorkSpace.wsId));
  };
  const handleMoveQueueClick = () => {
    if (!workSpaceNameId || !workSpaceNameId.wsId) {
      setErrorMsgForMoveQueue("Please select a space.");
    } else {
      setErrorMsgForMoveQueue("");
      handleMoveQueue(activeQueue.queueId);
    }
  };
  // Function to handle the closing of the modal
  const handleCloseModal = () => {
    setWorkSpaceNameId({
      workSpaceName: "",
      wsId: "",
    }); // Clear the selected workspace value
    setmoveQueuehow(false); // Hide the modal
  };
  const handleGetDocuments = (qId, wId) => {
    const apiParams = {
      data: {
        wsId: wId || "",
        queueId: qId || "",
        search: "",
        page: 1,
        pageSize: 10,
        orderColumn: "",
      },
      onSuccess: () => {},
      onErrors: () => {},
    };
    dispatch(getDocumentListByQueueRequest(apiParams));
  };
  useEffect(()=>{
if(afterReviewActiveSpace?.wsId){
  handleQueueList(null,afterReviewActiveSpace?.wsId);
  handleGetDocuments(afterReviewActiveSpace?.queueId,afterReviewActiveSpace?.wsId)
}
  },[afterReviewActiveSpace?.wsId])
  const [activeKey, setActiveKey] = useState(null);

  useEffect(() => {
    if (afterReviewActiveSpace?.wsId) {
      setActiveKey(afterReviewActiveSpace.wsId); // Set active key from afterReviewActiveSpace
    }
  }, [afterReviewActiveSpace]);

  const handleAccordionClick = (wsId) => {
    setActiveKey((prevKey) => (prevKey === wsId ? null : wsId)); // Toggle accordion item
  };

  return (
    <>
      <div className="left-list-width">
        <div className="document-layout-leftside">
          <div className="create-section-wrappper">
            <Form.Select aria-label="Default select example">
              <option>A-Z</option>
              <option value="1">Z-A</option>
              <option value="2">Newest</option>
              <option value="3">Oldest</option>
              <option value="4">To review first</option>
            </Form.Select>
            {/* ===== Hide show searchbar ===== */}
            {/* <Form.Group className="search-workspace" controlId="exampleForm.ControlInput1">
                                    <Form.Control className="border-0" type="text" placeholder="Search" />
                                    <a href="#" className="clearAll-icon"><i className="icon-x_icon"></i></a>
                                </Form.Group> */}
            <a href="#">
              <span className="create-btn">
                <i className="icon-search"></i>
              </span>
            </a>

            <Dropdown as={NavItem} align="end" className="dots-dropdown">
              <Dropdown.Toggle as={NavLink} className="nav-user">
                <a href="#">
                  <span className="create-btn">
                    <i className="icon-plus"></i>
                  </span>
                </a>
              </Dropdown.Toggle>
              <Dropdown.Menu className="">
                <Dropdown.Item
                  onClick={() => {
                    setErrorMsg("");
                    newWorkspaceShowModal();
                  }}
                  className=" d-flex align-items-center"
                >
                  <i className="icon-add-folder fnt-15 me-2"></i> Create New
                  workspace
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setWorkSpaceId("");
                    setNewQueueshow(true);
                  }}
                  className=" d-flex align-items-center"
                >
                  <i className="icon-add-note fnt-18 me-2"></i> Create New
                  category
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="link-color fw-bold px-3">All documents</div>
          <div className="workspace-listing custom-scroll">
            <Accordion defaultActiveKey={"0"} activeKey={activeKey}>
              {workSpaces?.workspaces?.length > 0 &&
                workSpaces?.workspaces?.map((item, index) => (
                  <Accordion.Item
                    eventKey={item.wsId}
                    className="position-relative"
                    key={item.wsId}
                  >
                    <div>
                      <Accordion.Header
                        onClick={(e) => {
                          // Prevent expansion if queueCount is 0
                          if (item.queueCount === 0) {
                            e.stopPropagation(); // Stop the click event from propagating and expanding the item
                            dispatch(clearActiveQueueRequest({ data: {} }));

                            handleActiveSpace(
                              item.wsId,
                              item.workspaceName,
                              item.queueCount
                            );
                          } else {
                            dispatch(clearActiveQueueRequest({ data: {} }));
                            handleActiveSpace(
                              item.wsId,
                              item.workspaceName,
                              item.queueCount
                            );
                            handleQueueList(e, item.wsId);
                          }
                          handleAccordionClick(item.wsId);
                          dispatch(setWsIdAndQueueId({data:{}}));

                        }}
                      >
                        {item.queueCount !== 0 && (
                          <i className="icon-triangle fnt-6 me-1"></i>
                        )}
                        <OverlayTrigger
                          overlay={
                            <Tooltip id={"t-info"}>
                              {item.workspaceName}
                            </Tooltip>
                          }
                          placement="left"
                        >
                          <span
                            className={`truncate truncate-workspacelist ${
                              item.queueCount === 0
                                ? "emptyWorkSpaceWrapper"
                                : ""
                            }`}
                          >
                            {item.workspaceName}
                          </span>
                        </OverlayTrigger>
                        {item.queueCount === 0 && (
                          <OverlayTrigger
                            overlay={
                              <Tooltip id={"t-info"}>
                                {item.workspaceName}
                              </Tooltip>
                            }
                            placement="left"
                          >
                            <div className="onHoverEmptyWorkSpace">
                              Empty Space
                            </div>
                          </OverlayTrigger>
                        )}
                      </Accordion.Header>

                      <Dropdown
                        as={NavItem}
                        align="end"
                        className="h-dots-dropdown"
                      >
                        <Dropdown.Toggle as={NavLink} className="nav-user">
                          <span className="">
                            <i className="icon-v-dots"></i>
                          </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            onClick={() => {
                              setWorkSpaceId(item.wsId);
                              setNewQueueshow(true);
                              handleActiveSpace(
                                item.wsId,
                                // item.workspaceName,
                                item.queueCount
                              );
                            }}
                            className="d-flex align-items-center"
                          >
                            <i className="icon-add-note fnt-18 me-2"></i> Create
                            New Category
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="d-flex align-items-center"
                            onClick={() => {
                              handleActiveSpace(item.wsId, item.workspaceName);
                              setRenameWorkspaceId(item.wsId);
                              setRenameWorkspaceName(item.workspaceName);
                            }}
                          >
                            <i className="icon-rename fnt-15 me-2"></i> Rename
                            Space
                          </Dropdown.Item>
                          {item.queueCount === 0 ? (
                            <Dropdown.Item
                              // disabled={item.queueCount === 0 ? false :true}
                              className={`text-danger d-flex align-items-center`}
                              onClick={() => {
                                handleDeleteWorkSpace(item.wsId);
                              }}
                            >
                              <i className="icon-delete fnt-18 me-2"></i> Delete
                              Space
                            </Dropdown.Item>
                          ) : (
                            <Dropdown.Item
                              className={`text-danger d-flex align-items-center ${
                                item.queueCount === 0 ? "" : ""
                              }`}
                              onClick={(e) => {
                                e.stopPropagation();
                                // handleDeleteWorkSpace(item.wsId);
                              }}
                            >
                              <OverlayTrigger
                                overlay={
                                  <Tooltip id={"t-info"}>
                                    {
                                      "Only empty workspaces can be deleted. Please delete all nested queues beforehand."
                                    }
                                  </Tooltip>
                                }
                                placement="right"
                              >
                                <span className="list-disable">
                                  <i className="icon-delete fnt-18 me-2"></i>{" "}
                                  Delete Space
                                </span>
                              </OverlayTrigger>
                            </Dropdown.Item>
                          )}
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>

                    {renameWorkspaceId === item.wsId && (
                      <div className="renameInput renameWorkspace">
                        <Form.Control
                          className="border-0"
                          type="text"
                          placeholder="Enter new workspace name"
                          value={renameWorkspaceName}
                          onChange={(e) =>
                            setRenameWorkspaceName(e.target.value)
                          }
                        />
                        <div className="renameIconOption">
                          <a
                            href="#"
                            onClick={() => setRenameWorkspaceId(null)}
                          >
                            <i className="icon-x_icon"></i>
                          </a>
                          <a
                            href="#"
                            className={`checkUpdateBtn ${
                              workSpaces.activeWorkSpace.workSpaceName ===
                              renameWorkspaceName
                                ? "pe-none"
                                : ""
                            }`}
                          >
                            <i
                              className="icon-checkmark"
                              onClick={() =>
                                handleRenameConfirm(item.workSpaceName)
                              }
                            ></i>
                          </a>
                        </div>
                      </div>
                    )}

                    {item.queueCount > 0 && (
                      <Accordion.Body className="py-0 pe-3">
                        <div className="queue-list-wrapper">
                          <ul className="queue-list-inner">
                            {item?.queueList?.length > 0 &&
                              item?.queueList.map((qitem, index) => (
                                <li
                                  className={`queue-list ${
                                    (activeQueue.queueEmailId ===
                                      qitem.queueEmailId &&
                                      activeQueue.queueId === qitem.queueId) ||
                                    afterReviewActiveSpace?.queueId ===
                                      qitem.queueId
                                      ? "active"
                                      : ""
                                  } position-relative`}
                                  key={qitem.queueId}
                                  onClick={() => {
                                    handleActiveQueue(
                                      qitem.queueName,
                                      qitem.queueId,
                                      qitem.queueEmailId
                                    );
                                  dispatch(setWsIdAndQueueId({data:{}}));

                                    // handleGetDocuments(qitem.queueId,qitem.wsId)
                                  }}
                                >
                                  <div className="listInputGroup">
                                    <OverlayTrigger
                                      overlay={
                                        <Tooltip id={"t-info"}>
                                          {qitem.queueName} (
                                          {qitem?.shortRegName})
                                        </Tooltip>
                                      }
                                      placement="top"
                                    >
                                      <span
                                        className="truncate truncate-workspacelist"
                                        onClick={() =>
                                          handleGetDocuments(
                                            qitem.queueId,
                                            qitem.wsId
                                          )
                                        }
                                      >
                                        {qitem.queueName} ({qitem?.shortRegName}
                                        )
                                      </span>
                                    </OverlayTrigger>
                                    <div>
                                      <div className="d-flex align-items-center gap-2 onHoverOption">
                                        <span className="queue-counter">
                                          {qitem?.documentCount || 0}
                                        </span>
                                        <Dropdown
                                          as={NavItem}
                                          align="end"
                                          className="queue-list-dropdpwn"
                                        >
                                          <Dropdown.Toggle
                                            as={NavLink}
                                            className="nav-user"
                                          >
                                            <span className="">
                                              <i className="icon-v-dots"></i>
                                            </span>
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu className="">
                                            <Dropdown.Item
                                              className="d-flex align-items-center"
                                              onClick={() => {
                                                handleActiveQueue(
                                                  qitem.queueName,
                                                  qitem.queueId,
                                                  qitem.queueEmailId
                                                );
                                                setRenameQueueId(qitem.queueId);
                                                setRenameQueueName(
                                                  qitem.queueName
                                                );
                                              }}
                                            >
                                              <i className="icon-rename fnt-18 me-2"></i>{" "}
                                              Rename
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              href="#/action-2"
                                              onClick={moveQueuehowModal}
                                              className="d-flex align-items-center"
                                            >
                                              <i className="icon-log-in fnt-15 me-2"></i>{" "}
                                              Move Category
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              href="#/action-3"
                                              onClick={duplicateQueueModal}
                                              className="d-flex align-items-center"
                                            >
                                              <i className="icon-folder me-2"></i>{" "}
                                              Duplicate Category
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              className="d-flex align-items-center"
                                              onClick={() => {
                                                handleActiveQueue(
                                                  qitem.queueName,
                                                  qitem.queueId
                                                );
                                                dispatch(
                                                  getQueueOnlyRequest({
                                                    data: {
                                                      wsId: workSpaces
                                                        .activeWorkSpace.wsId,
                                                      queueId:
                                                        activeQueue.queueId,
                                                    },
                                                  })
                                                );
                                                navigate(BASIC_SETTING_ROUTE);
                                              }}
                                            >
                                              <i className="icon-setting fnt-18 me-2"></i>{" "}
                                              Category Setting
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              className="text-danger d-flex align-items-center"
                                              onClick={() => {
                                                deleteQueueModal();
                                                handleActiveQueue(
                                                  qitem.queueName,
                                                  qitem.queueId
                                                );
                                              }}
                                            >
                                              <i className="icon-delete fnt-18 me-2"></i>{" "}
                                              Delete Category
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </div>
                                    </div>
                                    {renameQueueId === qitem.queueId && (
                                      <div className="renameInput renameWorkspace renameQueue">
                                        <Form.Control
                                          className="border-0"
                                          type="text"
                                          placeholder="Enter new queue name"
                                          value={renameQueueName}
                                          onChange={(e) =>
                                            setRenameQueueName(e.target.value)
                                          }
                                        />
                                        <div className="renameIconOption">
                                          <a
                                            href="#"
                                            onClick={() =>
                                              setRenameQueueId(null)
                                            }
                                          >
                                            <i className="icon-x_icon"></i>
                                          </a>
                                          <a
                                            href="#"
                                            className={`checkUpdateBtn ${
                                              activeQueue.queueName ===
                                              renameQueueName
                                                ? "pe-none"
                                                : ""
                                            }`}
                                          >
                                            <i
                                              className="icon-checkmark"
                                              onClick={() =>
                                                handleRenameQueueConfirm(qitem)
                                              }
                                            ></i>
                                          </a>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </Accordion.Body>
                    )}
                  </Accordion.Item>
                ))}
              {/* {
                <a data-tooltip-id="my-tooltip" data-tooltip-content="Hello world!">wew
                  </a>
              } */}
            </Accordion>
          </div>
        </div>
        {/* ==== Delete queue settings modal ==== */}
        {deleteQueueShow && (
          <ModalComponent
            centered={true}
            show={deleteQueueShow}
            onHide={setdeleteQueueShow}
            scrollable={true}
            size="lg"
            title={"Delete category"}
            headerClassName={"border-0 pb-3 px-4"}
            bodyClassName={"pt-0 px-4"}
            body={
              <>
                {/* <Row>
                <Col>
                  <p className="fnt-14 fw-bold mb-2">
                    Will be permanently deleted together with 05 document.
                  </p>
                  <p className="fnt-14">
                    Confirm your understanding and your consent with these
                    irreversible actions:
                  </p>
                </Col>

                <Col md="12" className="mb-3">
                  <div className="fw-bold">
                    What other settings do you want to duplicate?
                  </div>
                  <div className="d-flex gap-3 mt-3 justify-content-between">
                    <Form.Group
                      className="mb-3 "
                      controlId="formBasicCheckbox11"
                    >
                      <Form.Check
                        type="checkbox"
                        label="All docs and data will be deleted*"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 "
                      controlId="formBasicCheckbox22"
                    >
                      <Form.Check
                        type="checkbox"
                        label="Usage data will be deleted.*"
                      />
                    </Form.Group>
                  </div>
                </Col>
                <Col md="12" className="text-center">
                  <Button variant="primary" onClick={() => handleDeleteQueue()}>
                    Delete
                  </Button>
                </Col>
              </Row> */}
                <Formik
                  initialValues={{
                    allDocsDeleted: false,
                    usageDataDeleted: false,
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => {
                    handleDeleteQueue(values);
                  }}
                >
                  {({ values, handleChange, handleSubmit, touched }) => (
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col>
                          <p className="fnt-14 fw-bold mb-2">
                            Will be permanently deleted together with 05
                            documents.
                          </p>
                          <p className="fnt-14">
                            Confirm your understanding and your consent with
                            these irreversible actions:
                          </p>
                          {values.allDocsDeleted && values.usageDataDeleted
                            ? ""
                            : touched.allDocsDeleted &&
                              touched.usageDataDeleted && (
                                <span className="text-danger">
                                  Confirm your understanding and consent to
                                  these irreversible actions:
                                </span>
                              )}
                        </Col>

                        <Col md="12" className="mb-3">
                          <div className="fw-bold">
                            What other settings do you want to duplicate?
                          </div>
                          <div className="d-flex gap-3 mt-3 justify-content-between">
                            {/* <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox11"
                          > */}
                            <div>
                              <Field
                                type="checkbox"
                                name="allDocsDeleted"
                                id="formBasicCheckbox11"
                              />
                              <label
                                className="ms-2"
                                htmlFor="formBasicCheckbox11"
                              >
                                All docs and data will be deleted*
                              </label>
                              {values.allDocsDeleted && values.usageDataDeleted
                                ? ""
                                : touched.allDocsDeleted &&
                                  touched.usageDataDeleted && (
                                    <span className="text-danger d-block">
                                      Confirm all points above to delete this
                                      queue.
                                    </span>
                                  )}
                              {/* <ErrorMessage
                              name="allDocsDeleted"
                              component="div"
                              className="text-danger"
                            /> */}
                              {/* </Form.Group> */}

                              {/* <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox22"
                          > */}
                            </div>
                            <div>
                              <Field
                                type="checkbox"
                                name="usageDataDeleted"
                                id="formBasicCheckbox22"
                              />
                              <label
                                className="ms-2"
                                htmlFor="formBasicCheckbox22"
                              >
                                Usage data will be deleted.*
                              </label>
                              {/* <ErrorMessage
                              name="usageDataDeleted"
                              component="div"
                              className="text-danger"
                              /> */}
                              {/* </Form.Group> */}
                            </div>
                          </div>
                        </Col>
                        <Col md="12" className="text-center">
                          <Button
                            disabled={queueLoading ? true : false}
                            variant="primary"
                            type="submit"
                          >
                            Delete
                            {queueLoading && (
                              <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                              />
                            )}
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  )}
                </Formik>
              </>
            }
          />
        )}

        {/* ==== Move queue modal ==== */}
        {moveQueuehow && (
          <ModalComponent
            centered={true}
            show={moveQueuehow}
            size="md"
            onHide={handleCloseModal}
            backdrop={"static"}
            // scrollable={true}
            title={"Move queue"}
            headerClassName={"border-0 pb-2 px-4"}
            bodyClassName={"pt-0 px-4"}
            body={
              <>
                <Row>
                  <Col>
                    <p className="fnt-14">
                      Select a space you wish to move category to:
                    </p>
                  </Col>
                  <div
                    className="custom-select-dropdown position-relative mb-4"
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === "workspace" ? null : "workspace"
                      )
                    }
                  >
                    <div className="customSelectValue" name="wsId" id="wsId">
                      {workSpaceNameId?.workSpaceName
                        ? workSpaceNameId?.workSpaceName
                        : "Select Space"}
                      <span className="customSelectArrow">
                        <i className="icon-chevron_right"></i>
                      </span>
                    </div>
                    {openDropdown === "workspace" && (
                      <>
                        <ul className="customSelectOption custom-scroll">
                          {workSpaces?.workspaces?.length > 0 &&
                            workSpaces?.workspaces?.map((item, index) => {
                              return (
                                <li
                                  className="customSelectOptionList"
                                  key={item.wsId}
                                  as={Form.Control}
                                  value={item.wsId}
                                  name="wsId"
                                  onClick={(e) => {
                                    setWorkSpaceNameId({
                                      workSpaceName: item.workspaceName,
                                      wsId: item.wsId,
                                    });
                                    dispatch(
                                      getQueueRequest({
                                        data: {
                                          wsId: item.wsId,
                                          search: "",
                                          page: 1,
                                          pageSize: 10,
                                          orderColumn: "",
                                        },
                                      })
                                    );
                                    setOpenDropdown(null); // Close the dropdown after selection
                                    setErrorMsgForMoveQueue(""); // Clear any previous error
                                  }}
                                >
                                  {item.workspaceName}
                                </li>
                              );
                            })}
                        </ul>
                      </>
                    )}

                    {errorMsgForMoveQueue && (
                      <span className="text-danger">
                        {errorMsgForMoveQueue}
                      </span>
                    )}
                  </div>
                  <Col md="12" className="text-center">
                    <Button
                      disabled={workSpaces.loading ? true : false}
                      variant="primary"
                      onClick={() => handleMoveQueueClick()}
                    >
                      {workSpaces.loading && (
                        <Spinner
                          as="span"
                          animation="grow"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      )}
                      Move
                    </Button>
                  </Col>
                </Row>
              </>
            }
          />
        )}
        {/* ==== Duplicate queue settings modal ==== */}
        {duplicateQueueShow && (
          <ModalComponent
            centered={true}
            show={duplicateQueueShow}
            onHide={setduplicateQueueShow}
            backdrop={"static"}
            scrollable={true}
            title={"Duplicate category settings"}
            headerClassName={"border-0 pb-2 px-4"}
            bodyClassName={"pt-0 px-4"}
            body={
              // <>
              //   <Row>
              //     <Col>
              //       <p className="fnt-14">
              //         Schema definition of Credit notes queue will be duplicated.
              //         Documents and emails are not subjects of this duplication.
              //       </p>
              //     </Col>
              //     <Col md="12" className="mb-3">
              //       <FloatingLabel
              //         controlId="floatingInput"
              //         label="Queue name"
              //         className="mb-3"
              //       >
              //         <Form.Control
              //           type="email"
              //           placeholder="Credit notes (Duplicate)"
              //         />
              //       </FloatingLabel>
              //     </Col>
              //     <Col md="12" className="mb-3">
              //       <div className="fw-bold">
              //         What other settings do you want to duplicate?
              //       </div>
              //       <div className="d-flex gap-3 mt-3">
              //         <Form.Group className="mb-3 " controlId="formBasicCheckbox">
              //           <Form.Check type="checkbox" label="Permissions" />
              //         </Form.Group>
              //         <Form.Group
              //           className="mb-3 "
              //           controlId="formBasicCheckbox2"
              //         >
              //           <Form.Check type="checkbox" label="Automation" />
              //         </Form.Group>
              //         <Form.Group
              //           className="mb-3 "
              //           controlId="formBasicCheckbox3"
              //         >
              //           <Form.Check type="checkbox" label="Email" />
              //         </Form.Group>
              //         <Form.Group
              //           className="mb-3 "
              //           controlId="formBasicCheckbox4"
              //         >
              //           <Form.Check type="checkbox" label="Extensions" />
              //         </Form.Group>
              //       </div>
              //     </Col>
              //     <Col md="12" className="text-center">
              //       <Button variant="primary" onClick={()=>handleDuplicateQueue()}>duplicate</Button>
              //     </Col>
              //   </Row>
              // </>
              <Formik
                initialValues={{
                  queueName: `${activeQueue.queueName}_Duplicate` || "",
                  permissions: false,
                  automation: false,
                  email: false,
                  extensions: false,
                }}
                onSubmit={handleDuplicateQueue}
              >
                {({ values }) => (
                  <FormikForm>
                    <Row>
                      <Col>
                        <p className="fnt-14">
                          Schema definition of Credit notes queue will be
                          duplicated. Documents and emails are not subjects of
                          this duplication.
                        </p>
                      </Col>
                      <Col md="12" className="mb-3">
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Category name"
                          className="mb-3"
                        >
                          <Field
                            as={Form.Control}
                            type="text"
                            name="queueName"
                            placeholder="Credit notes (Duplicate)"
                            value={values.queueName}
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md="12" className="mb-3">
                        <div className="fw-bold">
                          What other settings do you want to duplicate?
                        </div>
                        <div className="d-flex gap-3 mt-3">
                          <Field
                            type="checkbox"
                            name="permissions"
                            checked={values.permissions}
                          />
                          <Form.Check.Label>Permissions</Form.Check.Label>
                          <Field
                            type="checkbox"
                            name="automation"
                            checked={values.automation}
                          />
                          <Form.Check.Label>Automation</Form.Check.Label>
                          <Field
                            type="checkbox"
                            name="email"
                            checked={values.email}
                          />
                          <Form.Check.Label>Email</Form.Check.Label>
                          <Field
                            type="checkbox"
                            name="extensions"
                            checked={values.extensions}
                          />
                          <Form.Check.Label>Extensions</Form.Check.Label>
                        </div>
                      </Col>
                      <Col md="12" className="text-center">
                        <Button
                          variant="primary"
                          type="submit"
                          disabled={workSpaces.loading ? true : false}
                        >
                          {workSpaces.loading && (
                            <Spinner
                              as="span"
                              animation="grow"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            />
                          )}
                          Duplicate
                        </Button>
                      </Col>
                    </Row>
                  </FormikForm>
                )}
              </Formik>
            }
          />
        )}
      </div>
    </>
  );
};

export default SidebarSubDrawer;
/*
<Accordion defaultActiveKey={"0"}>
            {workSpaces?.workspaces?.length > 0 &&
              workSpaces?.workspaces?.map((item, index) => (
                <Accordion.Item
                  eventKey={item.wsId}
                  className="position-relative"
                >
                  <div>
                    {item.queueCount === 0 ? (
                      <Accordion.Header>
                        <>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id={"t-info"}>
                                {item.workspaceName}
                              </Tooltip>
                            }
                            placement="top"
                          >
                            <span className="truncate truncate-workspacelist emptyWorkSpaceWrapper">
                              {item.workspaceName}
                            </span>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id={"t-info"}>
                                {item.workspaceName}
                              </Tooltip>
                            }
                            placement="top"
                          >
                            <div className="onHoverEmptyWorkSpace">
                              Empty WorkSpace
                            </div>
                          </OverlayTrigger>
                        </>
                      </Accordion.Header>
                    ) : (
                      <>
                        <Accordion.Header
                          onClick={(e) => {
                            handleActiveSpace(item.wsId, item.workspaceName);
                            handleQueueList(e, item.wsId);
                          }}
                        >
                          <i className="icon-triangle fnt-8 me-1"></i>
                          {item.queueCount === 0 ? (
                            <>
                              <OverlayTrigger
                                overlay={
                                  <Tooltip id={"t-info"}>
                                    {item.workspaceName}
                                  </Tooltip>
                                }
                                placement="top"
                              >
                                <span className="truncate truncate-workspacelist emptyWorkSpaceWrapper">
                                  {item.workspaceName}
                                </span>
                              </OverlayTrigger>
                              <div className="onHoverEmptyWorkSpace">
                                Empty WorkSpace
                              </div>
                            </>
                          ) : (
                            <OverlayTrigger
                              overlay={
                                <Tooltip id={"t-info"}>
                                  {item.workspaceName}
                                </Tooltip>
                              }
                              placement="top"
                            >
                              <span className="truncate truncate-workspacelist">
                                {item.workspaceName}
                              </span>
                            </OverlayTrigger>
                          )}
                        </Accordion.Header>
                      </>
                    )}
                    <Dropdown
                      as={NavItem}
                      align="end"
                      className="h-dots-dropdown"
                    >
                      <Dropdown.Toggle as={NavLink} className="nav-user">
                        <span className="">
                          <i className="icon-v-dots"></i>
                        </span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="">
                        <Dropdown.Item
                          onClick={() => {
                            setWorkSpaceId(item.wsId);
                            setNewQueueshow(true);
                          }}
                          className="d-flex align-items-center"
                        >
                          <i className="icon-add-note fnt-18 me-2"></i> Create
                          New queue
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="d-flex align-items-center"
                          onClick={() => {
                            setRenameWorkspaceId(item.wsId);
                            setRenameWorkspaceName(item.workspaceName);
                          }}
                        >
                          <i className="icon-rename fnt-15 me-2"></i> Rename
                          workspace
                        </Dropdown.Item>
                        <OverlayTrigger
                          overlay={
                            <Tooltip id={"t-info"}>
                              {
                                "Only empty workspace can be deleted.Please delete all nested queues beforehan"
                              }
                            </Tooltip>
                          }
                          placement="right"
                        >
                          <Dropdown.Item
                            className="text-danger d-flex align-items-center"
                            onClick={() => {
                              handleDeleteWorkSpace(item.wsId);
                            }}
                          >
                            <i className="icon-delete fnt-18 me-2"></i> Delete
                            workspace
                          </Dropdown.Item>
                        </OverlayTrigger>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  {renameWorkspaceId === item.wsId && (
                    <div className="renameInput renameWorkspace">
                      <Form.Control
                        className="border-0"
                        type="text"
                        placeholder="Enter new workspace name"
                        value={renameWorkspaceName} // Display the workspace name
                        onChange={(e) => setRenameWorkspaceName(e.target.value)}
                      />
                      <div className="renameIconOption">
                        <a href="#" onClick={() => setWorkSpaceId(null)}>
                          <i className="icon-x_icon"></i>
                        </a>
                        <a href="#" className="checkUpdateBtn">
                          <i
                            className="icon-checkmark"
                            onClick={() => handleRenameConfirm()}
                          ></i>
                        </a>
                      </div>
                    </div>
                  )}

                  <Accordion.Body className="py-0 pe-3">
                    <div className="queue-list-wrapper">
                      <ul className="queue-list-inner">
                        {item?.queueList?.length > 0 &&
                          item?.queueList.map((qitem, index) => (
                            <li
                              className={`queue-list ${
                                activeQueue.queueEmailId ===
                                  qitem.queueEmailId &&
                                activeQueue.queueId === qitem.queueId
                                  ? "active"
                                  : ""
                              } position-relative`}
                              style={{ cursor: "pointer" }}
                              key={qitem.queueId}
                              onClick={() => {
                                handleActiveQueue(
                                  qitem.queueName,
                                  qitem.queueId,
                                  qitem.queueEmailId
                                );
                              }}
                            >
                              <div className="listInputGroup">
                                <OverlayTrigger
                                  overlay={
                                    <Tooltip id={"t-info"}>
                                      {qitem.queueName} ({qitem?.shortRegName})
                                    </Tooltip>
                                  }
                                  placement="top"
                                >
                                  <span className="truncate truncate-workspacelist">
                                    {qitem.queueName} ({qitem?.shortRegName})
                                  </span>
                                </OverlayTrigger>
                                <div>
                                  <div className="d-flex align-items-center gap-2 onHoverOption">
                                    <span className="queue-counter">0</span>
                                    <Dropdown
                                      as={NavItem}
                                      align="end"
                                      className="queue-list-dropdpwn"
                                    >
                                      <Dropdown.Toggle
                                        as={NavLink}
                                        className="nav-user"
                                      >
                                        <span className="">
                                          <i className="icon-v-dots"></i>
                                        </span>
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu className="">
                                        <Dropdown.Item
                                          className="d-flex align-items-center"
                                          onClick={() => {
                                            setRenameQueueId(qitem.queueId);
                                            setRenameQueueName(qitem.queueName);
                                          }}
                                        >
                                          <i className="icon-rename fnt-18 me-2"></i>{" "}
                                          Rename
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                          href="#/action-2"
                                          onClick={moveQueuehowModal}
                                          className="d-flex align-items-center"
                                        >
                                          <i className="icon-log-in fnt-15 me-2"></i>{" "}
                                          Move Queue
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                          href="#/action-3"
                                          onClick={duplicateQueueModal}
                                          className="d-flex align-items-center"
                                        >
                                          <i className="icon-folder me-2"></i>{" "}
                                          Duplicate Queue
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                          className="d-flex align-items-center"
                                          onClick={() => {
                                            handleActiveQueue(
                                              qitem.queueName,
                                              qitem.queueId
                                            );
                                            navigate(BASIC_SETTING_ROUTE);
                                          }}
                                        >
                                          <i className="icon-setting fnt-18 me-2"></i>{" "}
                                          Queue Setting
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                          // href="#/action-5"
                                          onClick={() => {
                                            deleteQueueModal();
                                            handleActiveQueue(
                                              qitem.queueName,
                                              qitem.queueId
                                            );
                                          }}
                                          className="text-danger d-flex align-items-center"
                                        >
                                          <i className="icon-delete fnt-18 me-2"></i>{" "}
                                          Delete queue
                                        </Dropdown.Item>
                                    
          //                             </Dropdown.Menu>
          //                           </Dropdown>
          //                         </div>
          //                       </div>
          //                       {renameQueueId === qitem.queueId && (
          //                         <div className="renameInput renameWorkspace renameQueue">
          //                           <Form.Control
          //                             className="border-0"
          //                             type="text"
          //                             placeholder="Enter new queue name"
          //                             value={renameQueueName} // Display the queue name
          //                             onChange={(e) =>
          //                               setRenameQueueName(e.target.value)
          //                             }
          //                           />
          //                           <div className="renameIconOption">
          //                             <a
          //                               href="#"
          //                               onClick={() => setRenameQueueId(null)}
          //                             >
          //                               <i className="icon-x_icon"></i>
          //                             </a>
          //                             <a href="#" className="checkUpdateBtn">
          //                               <i
          //                                 className="icon-checkmark"
          //                                 onClick={() =>
          //                                   handleRenameQueueConfirm(qitem)
          //                                 }
          //                               ></i>
          //                             </a>
          //                           </div>
          //                         </div>
          //                       )}
          //                     </div>
          //                   </li>
          //                 ))}
          //             </ul>
          //           </div>
          //         </Accordion.Body>
          //       </Accordion.Item>
          //     ))}
          // </Accordion>
          */
