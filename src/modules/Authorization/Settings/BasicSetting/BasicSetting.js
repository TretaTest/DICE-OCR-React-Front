import React from "react";
import { Breadcrumb, Card, Col, Row, Tab,Form } from "react-bootstrap";
import { Regional } from "../../../../constants/ArrayObjects";
import { useLoaderData, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const BasicSetting = () => {
  const { activeQueue,activeWorkSpace } = useSelector((state) => ({
    activeQueue:state.queue.activeQueue||{},
    activeWorkSpace:state.workSpace.activeWorkSpace||{}
  }));
  return (
    <>
      <Tab.Pane eventKey="first">
        <Row className="align-items-center">
          <Col className="mb-3">
            <div className="mainTitle">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Settings </Breadcrumb.Item>
                <Breadcrumb.Item href="#">{activeWorkSpace?.workSpaceName} </Breadcrumb.Item>
                <Breadcrumb.Item href="#">{activeQueue?.queueName} </Breadcrumb.Item>
                <Breadcrumb.Item active className="d-flex gap-1">
                  {" "}
                  GeneralSettings
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </Col>
          <Col md="auto" className="mb-3">
            <a href="#" className="btn btn-primary">
              Save
            </a>
          </Col>
        </Row>
        <div className="setting-scroll custom-scroll">
          <Row>
            <Col md="12">
              <Card className="mb-4">
                <Card.Body className="p-4">
                  <Card.Title className="fnt-20 fw-bold mb-4">
                    General Settings
                  </Card.Title>
                  <Card.Text>
                    <Row>
                      <Col md="4">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="fw-medium">
                          Category Name
                          </Form.Label>
                          <Form.Control type="text" placeholder="" />
                        </Form.Group>
                      </Col>
                      <Col md="4">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="fw-medium">
                          Category ID
                          </Form.Label>
                          <div className="position-relative">
                            <Form.Control type="text" placeholder="" />

                            <span className="field-icon fnt-18">
                              <i className="icon-lock"></i>
                            </span>
                          </div>
                        </Form.Group>
                      </Col>
                      <Col md="4">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="fw-medium">
                            Document Regional format{" "}
                            <i className="icon-info fnt-16"></i>
                          </Form.Label>
                          <Form.Select aria-label="Default select example">
                            {Regional.map((item, index) => {
                              return <option value={index.Id}>{item.Name}</option>;
                            })}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="fw-medium">
                            Annotation Session timeout{" "}
                            <i className="icon-info fnt-16"></i>
                          </Form.Label>
                          <div className="timeout-input">
                            <Form.Control type="text" placeholder="" />
                            <Form.Control type="text" placeholder="" />
                            <Form.Control type="text" placeholder="" />
                          </div>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="12">
              <Card className="mb-4">
                <Card.Body className="p-4">
                  <Card.Title className="fnt-20 fw-bold mb-4 d-flex align-items-center justify-content-between">
                    Notifications Settings
                    <a href="#" className="fnt-18">
                      <span className="link-color">Save Changes</span>
                    </a>
                  </Card.Title>
                  <Card.Text>
                    <Row>
                      <Col md="4">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="fw-medium">
                            Get email alerts for chosen events.
                          </Form.Label>
                          <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="fw-medium fnt-18 mb-3">
                            Events to Notify you about
                          </Form.Label>
                          <div className="d-flex custom-switch-wrapper gap-5">
                            <Form.Check // prettier-ignore
                              type="switch"
                              id="custom-switch"
                              label="Deleted documents"
                            />
                            <Form.Check // prettier-ignore
                              type="switch"
                              id="custom-switch"
                              label="Postponed documents"
                            />
                            <Form.Check // prettier-ignore
                              type="switch"
                              id="custom-switch"
                              label="Unusable attachments"
                            />
                          </div>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="12">
              <Card className="mb-4">
                <Card.Body className="p-4">
                  <Card.Title className="fnt-20 fw-bold mb-4 d-flex align-items-center justify-content-between">
                    Document Settings
                    <a href="#" className="fnt-18">
                      <span className="link-color">
                        <i className="icon-setting"></i> Edit Criteria
                      </span>
                    </a>
                  </Card.Title>
                  <Card.Text>
                    <Row>
                      <Col md="4">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="fw-medium">
                            Split batch files{" "}
                            <i className="icon-info fnt-16 ms-2"></i>
                          </Form.Label>
                          <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="fw-medium fnt-18 mb-3">
                            Events to Notify you about
                          </Form.Label>
                          <div className="d-flex custom-switch-wrapper gap-5">
                            <Form.Check // prettier-ignore
                              type="switch"
                              id="custom-switch"
                              label="Enable delete recommendations to reduce billable documents"
                            />
                          </div>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="6" className="mb-3">
              <Card className="mb-4 h-100">
                <Card.Body className="p-4">
                  <Card.Title className="fnt-20 fw-bold mb-4 d-flex align-items-center justify-content-between">
                    Confirmed State Settings
                  </Card.Title>
                  <Card.Text>
                    <Row>
                      <Col md="12">
                        <Form.Group
                          className="mb-4"
                          controlId="exampleForm.ControlInput1"
                        >
                          <div className="d-flex custom-switch-wrapper">
                            <Form.Check // prettier-ignore
                              type="switch"
                              id="custom-switch"
                              label="Hide export button"
                            />
                            <i className="icon-info fnt-16 ms-2 lh-base"></i>
                          </div>
                        </Form.Group>
                      </Col>
                      <Col md="12">
                        <Form.Group
                          className=""
                          controlId="exampleForm.ControlInput1"
                        >
                          <div className="d-flex custom-switch-wrapper">
                            <Form.Check // prettier-ignore
                              type="switch"
                              id="custom-switch"
                              label="Show a confirmed state"
                            />
                            <i className="icon-info fnt-16 ms-2 lh-base"></i>
                          </div>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="6" className="mb-3">
              <Card className="mb-4 h-100">
                <Card.Body className="p-4">
                  <Card.Title className="fnt-20 fw-bold mb-4 d-flex align-items-center justify-content-between">
                    Advanced Settings
                    <a href="#" className="fnt-18">
                      <span className="link-color">Read More</span>
                    </a>
                  </Card.Title>
                  <Card.Text>
                    <Row>
                      <Col md="12">
                        <div className="d-flex align-items-center gap-3">
                          <div className="rounded-icon-box">
                            <i className="icon-mail"></i>
                          </div>
                          <div>
                            <span className="fw-bold">Email Inbox</span>
                            <div className="opacity-70">
                              Enables document ingestion into a queue over an
                              email.
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Tab.Pane>
    </>
  );
};

export default BasicSetting;
