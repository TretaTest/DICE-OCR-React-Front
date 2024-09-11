import { useEffect, useState } from "react";
import { Accordion, Modal, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import ModalComponent from "../../../components/ModalComponent";
import {
  clearActiveWorkSpaceRequest,
  getWorkSpaceRequest,
  workSpaceRequest,
} from "../WorkSpace/redux/workSpaceAction";
import CreateQueue from "../WorkSpace/Queue/CreateQueue";
import "../../../App.css";
import {
  clearActiveQueueRequest,
  setWsIdAndQueueId,
  uploadInvoiceRequest,
} from "../WorkSpace/Queue/reudx/queueAction";
import EmailCanvas from "../../../components/EmailCanvas";
import SidebarSubDrawer from "../../../components/SidebarSubDrawer";
import { WORKSPACE_REQUIRED } from "../../../constants/ValidationMessageConstats";
import { useLocation, useNavigate } from "react-router-dom";
import { DOCUMENT_MAPPING_ROUTE } from "../../../constants/RouteNameConstant";
const Documents = () => {
  const [NewWorkspaceShow, setNewWorkspaceshow] = useState(false);
  const [errorFiles, setErrorFiles] = useState([]);
  const newWorkspaceShowModal = () => {
    dispatch(clearActiveWorkSpaceRequest({ data: {} }));
    setNewWorkspaceshow(true);
  };

  const [NewQueueShow, setNewQueueshow] = useState(false);
  const [workSpaceName, setWorkSpaceName] = useState("");
  const [filterShow, setFiltershow] = useState(false);
  const filterShowModal = () => setFiltershow(true);

  const [mediaUploadShow, setMediaUploadshow] = useState(false);
  const mediaUploadShowModal = () => {
    setMediaUploadshow(true);
  };
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0); // Single progress for all files
  const [invoiceshow, setInvoiceShow] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [workSpaceId, setWorkSpaceId] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    loading,
    workSpace,
    activeWorkSpace,
    activeQueue,
    activeQueueDocumentsList,
    afterReviewActiveSpace,
  } = useSelector((state) => ({
    loading: state.workSpace.loading || false,
    workSpace: state.workSpace.workspaces || [],
    activeWorkSpace: state.workSpace.activeWorkSpace || "",
    activeQueue: state.queue.activeQueue || {},
    activeQueueDocumentsList: state.queue.activeQueueDocumentsList,
    afterReviewActiveSpace: state.queue.afterReviewActiveSpace || {},
  }));

  const defaultSpaceName =
    workSpace?.find((item) => item.wsId === activeWorkSpace?.wsId)
      ?.workspaceName || "";

  useEffect(() => {
    const apiParams = {
      data: {
        search: "",
        page: 1,
        pageSize: 30,
        orderColumn: "",
      },
      onSuccess: (res) => {
        if (res?.length === 0) {
          setNewWorkspaceshow(true);
        } else {
          setNewWorkspaceshow(false);
        }
      },
      onErrors: () => {},
    };
    dispatch(getWorkSpaceRequest(apiParams));
    dispatch(clearActiveQueueRequest({ data: {} }));
    dispatch(clearActiveWorkSpaceRequest({ data: {} }));
  }, []);
  const invoiceShowOffcanvas = () => setInvoiceShow(true);
  const newQueueShowModal = () => {
    const apiParams = {
      data: {
        workspaceName: workSpaceName,
      },
      onSuccess: (res) => {
        setNewQueueshow(true);
        setNewWorkspaceshow(false);
        setErrorMsg("");
        setWorkSpaceName("");
        dispatch(
          getWorkSpaceRequest({
            data: {
              search: "",
              page: 1,
              pageSize: 30,
              orderColumn: "",
            },
          })
        );
      },
      onErrors: (err) => {},
    };
    if (
      !workSpaceName ||
      workSpaceName === "" ||
      workSpaceName === null ||
      !workSpaceName.length
    ) {
      setErrorMsg(WORKSPACE_REQUIRED);
    } else {
      dispatch(workSpaceRequest(apiParams));
    }
  };
  const Link = ({ id, children, title }) => (
    <OverlayTrigger
      overlay={<Tooltip id={id}>{title}</Tooltip>}
      placement="top"
    >
      <a href="#">{children}</a>
    </OverlayTrigger>
  );

  const handleWorkSpaceChange = (e) => {
    setWorkSpaceName(e.target.value);
    if (e.target.value.length > 0) {
      setErrorMsg("");
    } else {
      setErrorMsg(WORKSPACE_REQUIRED);
    }
  };

  const validateFile = (file) => {
    const allowedTypes = [
      "application/pdf",
      "image/png",
      "image/jpeg",
      "image/jpg",
    ];
    const maxSize = 10 * 1024 * 1024; // 10 MB

    return allowedTypes.includes(file.type) && file.size <= maxSize;
  };
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    let validFiles = [];
    let invalidFiles = [];
    selectedFiles.forEach((file) => {
      if (validateFile(file)) {
        validFiles.push(file);
      } else {
        invalidFiles.push(file);
      }
    });

    setErrorFiles(invalidFiles);
    setFiles(validFiles);
    if (validFiles.length > 0) {
      handleUpload(validFiles);
    }
  };

  // const handleUpload = (files) => {
  //   const formData = new FormData();
  //   formData.append("WorkspaceId",activeWorkSpace.wsId);
  //   formData.append("QueueId", activeQueue.queueId);
  //   formData.append("DocumentType", "1");
  //   formData.append("InnerWidth", "1024");
  //   formData.append("InnerHeight", "768");

  //   files.forEach(file => {
  //     formData.append("PostedFile", file);
  //   });

  //   // Initialize progress to 0%
  //   setUploadProgress(0);

  //   // Simulate progress
  //   const simulateProgress = setInterval(() => {
  //     setUploadProgress(prevProgress => {
  //       const newProgress = Math.min(prevProgress + 10, 100);
  //       if (newProgress === 100) {
  //         clearInterval(simulateProgress);
  //       }
  //       return newProgress;
  //     });
  //   }, 500); // Increment every 300ms

  //   const apiParams = {
  //     data: formData,
  //     onSuccess: () => {
  //       clearInterval(simulateProgress);
  //       setUploadProgress(100);
  //     },
  //     onErrors: () => {
  //       clearInterval(simulateProgress);
  //       setUploadProgress(0);
  //       // Optionally update errorFiles here if needed
  //     },
  //   };

  //   dispatch(uploadInvoiceRequest(apiParams));
  // };
  const handleUpload = (files) => {
    const formData = new FormData();
    formData.append(
      "WorkspaceId",
      activeWorkSpace?.wsId
        ? activeWorkSpace?.wsId
        : afterReviewActiveSpace?.wsId
    );
    formData.append(
      "QueueId",
      activeQueue?.queueId
        ? activeQueue?.queueId
        : afterReviewActiveSpace?.queueId
    );
    formData.append("DocumentType", "1");
    formData.append("InnerWidth", "725");
    formData.append("InnerHeight", "935");

    files.forEach((file) => {
      formData.append("PostedFile", file);
    });

    // Reset progress to 0%
    setUploadProgress(0);

    // Simulate growing progress
    const simulateProgress = setInterval(() => {
      setUploadProgress((prevProgress) => {
        const newProgress = Math.min(prevProgress + 10, 95);
        return newProgress;
      });
    }, 1000); // Increment every 500ms, adjust timing as needed

    const apiParams = {
      data: formData,
      onSuccess: () => {
        clearInterval(simulateProgress);
        setUploadProgress(100); // Jump to 100% on success
        navigate(DOCUMENT_MAPPING_ROUTE);
      },
      onErrors: () => {
        clearInterval(simulateProgress);
        setUploadProgress(0); // Reset on error
        // Optionally update errorFiles here if needed
      },
    };

    dispatch(uploadInvoiceRequest(apiParams));
  };

  const handleRetry = (file) => {
    setErrorFiles(errorFiles.filter((f) => f.name !== file.name));
    handleUpload([file]); // Retry uploading the single file
  };
  useEffect(() => {
    if (location.state !== null) {
      dispatch(setWsIdAndQueueId({ data: location.state }));
    }
  }, [location]);
  return (
    <>
      {/* === Top Navbar ==== */}
      <Header />
      {/* ===== Sidebar ===== */}
      <Sidebar />
      <main className="content p-0">
        <div className="d-flex">
          <SidebarSubDrawer
            newWorkspaceShowModal={newWorkspaceShowModal}
            setNewQueueshow={setNewQueueshow}
            newQueueShowModal={newQueueShowModal}
            // moveQueuehowModal={moveQueuehowModal}
            // duplicateQueueModal={duplicateQueueModal}
            setWorkSpaceId={setWorkSpaceId}
            // deleteQueueModal={deleteQueueModal}
            state={location.state}
            setErrorMsg={setErrorMsg}
          />

          <div className="pt-4 ps-4 center-content-width">
            <Tab.Container id="left-tabs-example " defaultActiveKey="first">
              <Row className="justify-content-between">
                <Col xl="auto" className="d-flex align-items-center mb-3">
                  <div className="mainTitle">
                    <Breadcrumb>
                      <Breadcrumb.Item href="#">Documents</Breadcrumb.Item>
                      {(defaultSpaceName ||
                        afterReviewActiveSpace?.workSpaceName) && (
                        <>
                          <Breadcrumb.Item
                            href="#"
                            className={`${
                              defaultSpaceName && !activeQueue?.queueName
                                ? "active"
                                : ""
                            }`}
                          >
                            {defaultSpaceName ||
                              afterReviewActiveSpace?.workSpaceName}
                          </Breadcrumb.Item>
                          {(activeQueue.queueName ||
                            afterReviewActiveSpace?.queueName) && (
                            <Breadcrumb.Item active className="d-flex gap-1">
                              {activeQueue?.queueName ||
                                afterReviewActiveSpace?.queueName}
                              <Dropdown
                                as={NavItem}
                                className="w-100 breadcrumb-head-dropdown"
                                align="start"
                              >
                                <Dropdown.Toggle as={NavLink}></Dropdown.Toggle>
                                <Dropdown.Menu className="breadcrumb-dropdown">
                                  <div className="fnt-14 fw-normal">
                                    <span className="opacity-70 me-2">
                                      Email address:
                                    </span>{" "}
                                    <span className="opacity-100">
                                      {activeQueue?.queueEmailId}
                                    </span>{" "}
                                    <i className="icon-copy link-color ms-2"></i>
                                  </div>
                                  {/* <div className="fnt-14 mb-2  fw-normal">
                                  <span className="opacity-70 me-2">
                                    Category ID:
                                  </span>{" "}
                                  <span className=" opacity-100">
                                    {activeQueue.queueId}
                                  </span>{" "}
                                  <i className="icon-copy link-color ms-2"></i>{" "}
                                </div> */}
                                </Dropdown.Menu>
                              </Dropdown>
                            </Breadcrumb.Item>
                          )}
                        </>
                      )}
                    </Breadcrumb>
                  </div>
                </Col>
                <Col
                  xl="auto"
                  className="flex-wrap d-flex align-items-center mb-3 gap-3"
                >
                  <Link title="Category settings" id="t-1">
                    <span
                      className="filter-btn"
                      onClick={() => {
                        setErrorMsg("");
                        newWorkspaceShowModal();
                      }}
                    >
                      <i className="icon-setting"></i>
                    </span>
                  </Link>
                  <Form className="search-group main-search-group">
                    <Form.Group
                      className="search-group"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Control
                        className="border-0"
                        type="text"
                        placeholder="Search"
                      />
                      <span>
                        {" "}
                        <i className="icon-search"></i>
                      </span>
                    </Form.Group>
                  </Form>
                  <Dropdown as={NavItem} className="dots-dropdown">
                    <Dropdown.Toggle as={NavLink} className="nav-user">
                      <Link title="Filter" id="t-2">
                        <span className="filter-btn">
                          <i className="icon-filter"></i>
                        </span>
                      </Link>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="">
                      <div className="px-2 mb-2">
                        <Form.Control
                          type="email"
                          placeholder="Search filter"
                          className="filter-search-input"
                        />
                      </div>
                      <Dropdown.Item
                        href="#/action-1"
                        onClick={filterShowModal}
                      >
                        Status
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Amount Due
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Supplier Name
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-4">
                        Vendor Name
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-5">
                        Issue Date
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-6">Total Tax</Dropdown.Item>
                      <Dropdown.Item href="#/action-7">
                        Received at
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-8">Labels</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <div className="group-filter-btn">
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link title="Documents" id="t-3" eventKey="first">
                          <span className="group-icon-link">
                            <i className="icon-file"></i>
                          </span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link title="Emails" id="t-4" eventKey="second">
                          <span className="group-icon-link border-end-0">
                            <i className="icon-mail"></i>
                          </span>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                  <a
                    href="#"
                    className="btn btn-primary"
                    onClick={mediaUploadShowModal}
                  >
                    Upload
                  </a>
                </Col>
              </Row>
              <Row className="mt-4">
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Col md="12">
                      <Card>
                        <Card.Body>
                          <Table responsive>
                            <thead>
                              <tr>
                                <th>
                                  <Form.Check aria-label="option 1" />
                                </th>
                                <th>Status</th>
                                <th>Document name</th>
                                <th>Labels</th>
                                {/* <th>Document ID</th>
                                <th>Issue Date</th>
                                <th>Total Tax</th>
                                <th>Amount Due</th>
                                <th>Vendor Name</th>
                                <th>Modified at</th> */}
                                <th></th>
                              </tr>
                            </thead>
                            {activeQueueDocumentsList?.length > 0 ? (
                              <tbody className="">
                                {activeQueueDocumentsList?.map(
                                  (item, index) => {
                                    return (
                                      <tr id={index}>
                                        <td>
                                          <Form.Check aria-label="option 1" />
                                        </td>
                                        <td>
                                          <span className="status-badge">
                                            <span className="badge-dot pending-color"></span>{" "}
                                            {item?.documentStatus}
                                          </span>
                                        </td>
                                        <td>{item?.documentActualName}</td>
                                        {/* <td>N/A</td>
                                      <td>{item?.documentId}</td>
                                      <td>N/A</td>
                                      <td>N/A</td>
                                      <td>N/A</td>
                                      <td>N/A</td>
                                      <td>N/A</td> */}
                                        <td>-</td>
                                        <td>
                                          <Dropdown
                                            as={NavItem}
                                            className="dots-dropdown"
                                          >
                                            <Dropdown.Toggle
                                              as={NavLink}
                                              className="nav-user"
                                            >
                                              <div className="">
                                                <span className="dot-icon"></span>
                                                <span className="dot-icon"></span>
                                                <span className="dot-icon"></span>
                                              </div>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="">
                                              <Dropdown.Item href="#/action-1">
                                                My Account
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#/action-2">
                                                Settings
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#/action-3">
                                                Support
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#/action-3">
                                                Lock Screen
                                              </Dropdown.Item>
                                              <Dropdown.Item href="#/action-3">
                                                Logout
                                              </Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                      </tr>
                                    );
                                  }
                                )}
                              </tbody>
                            ) : (
                              <tbody>
                                <tr>
                                  <td colSpan="11" className="border-bottom-0">
                                    <div className="empty-documents-wrapper">
                                      <img
                                        src="/assets/images/empty-documents.svg"
                                        className="img-fluid"
                                      />
                                      <div className="fnt-20 fw-bold mt-3">
                                        Oh... It's empty here
                                      </div>
                                      <div className="fnt-16 opacity-50">
                                        Click below to upload some documents
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-primary py-2 mt-3"
                                        onClick={mediaUploadShowModal}
                                      >
                                        <i className="icon-import mx-1"></i>{" "}
                                        Upload
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            )}
                          </Table>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Col md="12">
                      <Card>
                        <Card.Body>
                          <Table responsive>
                            <thead>
                              <tr>
                                <th>Email subject</th>
                                <th>From</th>
                                <th>Received at</th>
                                <th>Last communication at</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody className="d-none">
                              <tr>
                                <td>
                                  <a
                                    href="#"
                                    className="text-dark"
                                    onClick={invoiceShowOffcanvas}
                                  >
                                    {" "}
                                    March development payment Invoice.pdf
                                  </a>
                                </td>
                                <td>sagar.sharma@datagainservices.com</td>
                                <td>1 Nov, 10:20 AM</td>
                                <td>1 Nov, 10:20 AM</td>
                                <td>
                                  <span className="doc-badge">
                                    <i className="icon-file"></i> 03
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                            <tbody>
                              <tr>
                                <td colSpan="11" className="border-bottom-0">
                                  <div className="empty-documents-wrapper">
                                    <img
                                      src="/assets/images/empty-email.svg"
                                      className="img-fluid"
                                    />
                                    <div className="fnt-20 fw-bold mt-3">
                                      You havent received any emails yet.
                                    </div>
                                    <div className="fnt-16 opacity-50">
                                      Send documents to the Dice email inbox
                                    </div>
                                    <Form.Group
                                      className="copyEmailWrapper w-50 mt-3"
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Button
                                        variant="primary"
                                        className="copyEmailBtn"
                                      >
                                        Copy Email
                                      </Button>
                                      <Form.Control
                                        className="border-0"
                                        type="text"
                                        placeholder=""
                                      />
                                    </Form.Group>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Tab.Pane>
                </Tab.Content>
              </Row>
            </Tab.Container>
          </div>
        </div>
      </main>
      {NewWorkspaceShow && (
        <ModalComponent
          title={"Create New Space"}
          show={NewWorkspaceShow}
          backdrop={"static"}
          onHide={setNewWorkspaceshow}
          centered={true}
          body={
            <Row>
              <Col>
                <div className="fnt-14 mb-4">
                  Spaces allow you to group different category together to
                  create a better organizational structure for your document
                  type or department
                </div>
              </Col>
              <Col md="12" className="mb-3">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Space name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Enter Space Name"
                    onChange={(e) => {
                      handleWorkSpaceChange(e);
                    }}
                    // isInvalid={!!errorMsg}
                  />
                  {errorMsg && <span className="text-danger">{errorMsg}</span>}
                </FloatingLabel>
              </Col>

              <Col md="12" className="text-center">
                <Button
                  disabled={loading ? true : false}
                  variant="primary"
                  onClick={newQueueShowModal}
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
          }
        />
      )}
      {NewQueueShow && (
        <CreateQueue
          NewQueueShow={NewQueueShow}
          setNewQueueshow={setNewQueueshow}
          workSpaceId={workSpaceId}
          newWorkspaceShowModal={newWorkspaceShowModal}
        />
      )}

      {/* ==== Filter modal ==== */}
      {filterShow && (
        <ModalComponent
          centered={true}
          show={filterShow}
          backdrop={"static"}
          onHide={setFiltershow}
          title={"Filter"}
          body={
            <>
              <Row>
                <Col md="12" className="mb-4">
                  <Form.Select aria-label="Default select example">
                    <option>Select Status</option>
                    <option value="1">Reviews</option>
                    <option value="2">Postpone</option>
                    <option value="3">Rejected</option>
                    <option value="4">Confirmed</option>
                    <option value="5">Exports</option>
                    <option value="6">Deleted</option>
                  </Form.Select>
                </Col>

                <Col md="12" className="text-center">
                  <Button variant="primary">Filter</Button>
                </Col>
              </Row>
            </>
          }
        />
      )}
      {/* ==== Media Upload modal ==== */}
      {mediaUploadShow && (
        <ModalComponent
          size="lg"
          centered={true}
          show={mediaUploadShow}
          backdrop={"static"}
          onHide={setMediaUploadshow}
          scrollable={true}
          title={
            <>
              Media Upload
              <span className="d-block fnt-14 fw-normal opacity-70">
                Add your documents here, and you can upload up to 10 files max
              </span>
            </>
          }
          headerClassName={"p-4 pb-0 border-bottom-0"}
          bodyClassName={"p-4 custom-scroll"}
          body={
            <>
              <Row>
                <Col md="12" className="mb-3">
                  <div className="dropzone-wrapper">
                    <div className="dropzone-desc">
                      <i className="icon-upload fnt-24"></i>
                      <p className="mt-2 mb-1">
                        Drag your file(s) or{" "}
                        <span className="fw-bold link-color">browse</span>{" "}
                      </p>
                      <p className="text-secondary">
                        Max 10 MB files are allowed
                      </p>
                    </div>
                    {/* <input type="file" name="img_logo" className="dropzone" /> */}
                    <Form.Group controlId="formFile" className="dropzone">
                      <Form.Control
                        type="file"
                        className="h-100"
                        // multiple
                        onChange={(e) => {
                          // setFiles(e.target.files);
                          handleFileChange(e);
                        }}
                      />
                    </Form.Group>
                  </div>
                </Col>
                <Col md="12" className="mb-2 fnt-14 opacity-70">
                  Only support .Pdf, .RaR and zip files
                  <div className="orLine">
                    {" "}
                    <span>OR</span>
                  </div>
                </Col>
                <Col md="12" className="mb-3">
                  <div className="fnt-16 fw-bold mb-3">Queue Email Address</div>
                  <Form.Group
                    className="copyEmailWrapper"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Button variant="primary" className="copyEmailBtn">
                      Copy Email
                    </Button>
                    <Form.Control
                      className="border-0"
                      type="text"
                      placeholder=""
                    />
                  </Form.Group>
                </Col>
                <Col md="12" className="">
                  <ul className="mediaUploadContent">
                    {files?.length > 0 &&
                      files?.map((file, index) => {
                        return (
                          <li className="mediaUploadItem" key={file.name}>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-center gap-2">
                                <img
                                  src="/assets/images/jpg-img.png"
                                  className="img-fluid"
                                />
                                <div className="fnt-12 fw-bold">
                                  {file.name}
                                  <div className="fw-normal opacity-70">
                                    {(file.size / 1024).toFixed(2)} KB
                                  </div>
                                </div>
                              </div>
                              <div>
                                <Link title="Cancel" id="t-info">
                                  <span className="text-secondary mx-1 fnt-22">
                                    <i className="icon-x_rounded x-fill"></i>
                                  </span>
                                </Link>
                              </div>
                            </div>
                            {/* Render ProgressBar with growing progress */}
                            <div className="">
                              <ProgressBar now={uploadProgress} animated />
                            </div>
                            {uploadProgress === 100 && (
                              <div className="text-success fnt-13">
                                Upload successful!
                              </div>
                            )}
                            {uploadProgress === 0 &&
                              errorFiles.includes(file) && (
                                <div className="text-danger">Upload failed</div>
                              )}
                          </li>
                        );
                      })}

                    {errorFiles?.map((file) => (
                      <li key={file.name} className="mediaUploadItem">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-2">
                            <img
                              src="/assets/images/jpg-img.png"
                              className="img-fluid"
                              alt="error-file-icon"
                            />
                            <div className="fnt-12 fw-bold">
                              {file.name}
                              <div className="fw-normal text-danger">
                                Upload failed
                              </div>
                            </div>
                          </div>
                          <div className="fnt-22">
                            <Link title="Delete" id="t-info">
                              <span className="text-secondary mx-1">
                                <i className="icon-delete_outline"></i>
                              </span>
                            </Link>
                            <Link
                              title="Repeat"
                              id="t-info"
                              onClick={() => handleRetry(file)}
                            >
                              <span className="text-secondary">
                                <i className="icon-repeat"></i>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </>
          }
        />
      )}

      {/* ==== Email Canvas ==== */}
      <EmailCanvas invoiceshow={invoiceshow} setInvoiceShow={setInvoiceShow} />
    </>
  );
};

export default Documents;
