import React from "react";
import { Breadcrumb, Card, Col, Row, Tab,Form } from "react-bootstrap";

const EmailSetting = () => {
  return (
    <>
      <Tab.Pane eventKey="third">
        <Row className="align-items-center">
          <Col className="mb-3">
            <div className="mainTitle">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Settings </Breadcrumb.Item>
                <Breadcrumb.Item active className="d-flex gap-1">
                  Email Setting
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </Col>
          <Col md="auto" className="mb-3 d-flex gap-3">
            <a href="#" className="btn btn-primary py-2">
              Save
            </a>
          </Col>
        </Row>
        <div className="setting-scroll custom-scroll">
          <Row>
            <Col md="12" className="mb-3">
              <div className="fw-bold mb-3">
                Datagain Org-conage-6dbb5d@Datagain.Dice.app{" "}
                <a href="#" className="link-color">
                  <i className="icon-copy"></i>
                </a>
              </div>
              <p className=" fw-medium">
                <span className="opacity-70">
                  By sending documents to your Rossum inbox email address,
                  documents get processed automatically to your queue. You can
                  provide this address to your s uppliers and they can send the
                  documents directly to your Rossum inbox.
                </span>{" "}
                <a href="#" className="opacity-100 link-color fst-italic">
                  Find more information
                </a>
              </p>
            </Col>
            <Col md="12" className="mb-3">
              <Card>
                <Card.Body className="p-3">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="d-flex gap-4 align-items-center fnt-18 fw-bold">
                      General Settings
                    </div>
                  </div>
                  <p className="pt-3 mb-0">
                    <span className="fw-bold">Email Setting - </span> Datagain
                    Org-conage-6dbb5d@Datagain.Dice.app{" "}
                    <a href="#" className="link-color">
                      <i className="icon-copy"></i>
                    </a>
                  </p>
                  <Row>
                    <Col md="4" className="mt-4">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="fnt-16 opacity-75 fw-medium">
                          Email prefix <i className="icon-info"></i>
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Datagain services"
                        />
                      </Form.Group>
                    </Col>
                    <Col md="4" className="mt-4">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="fnt-16 opacity-75 fw-medium">
                          Email name <i className="icon-info"></i>
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Purchase orders"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md="12" className="mb-3">
              <Card>
                <Card.Body className="p-3">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="d-flex gap-4 align-items-center fnt-18 fw-bold">
                      Sender Allowlist and Denylist
                    </div>
                  </div>
                  <p className="pt-3 mb-3">
                    Filter all emails coming to your inbox based on the sender's
                    email address.
                  </p>
                  <div className="custom-switch-wrapper">
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      label="Denylist — block emails from a specified list of addresses"
                      className="mb-3"
                    />
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      label="Allowlist — only accept emails from a specified list of email addresses"
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md="12" className="mb-3">
              <Card>
                <Card.Body className="p-3">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="d-flex gap-4 align-items-center fnt-18 fw-bold">
                      Smart Email Automation
                    </div>
                  </div>
                  <p className="pt-3 mb-3">
                    Filter all emails coming to your inbox based on the sender's
                    email address.
                  </p>
                  <Row>
                    <Col md="6" className="mb-4">
                      <div className="p-3 box-gray">
                        <a href="#" className="btn btn-outline-primary fnt-14">
                          Available after Upgrade
                        </a>
                        <p className="mb-0 mt-3">
                          You can still send 8 emails. Unlimited emails are
                          available after the upgrade.
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <div className="border-bottom"></div>
                  <div className="custom-switch-wrapper py-4 d-flex align-items-center justify-content-between">
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      label="Attachment Filtering"
                      className="fw-bold"
                    />
                    <a href="#" className="link-color fw-bold">
                      <i className="icon-settings"></i> Filtering rules
                    </a>
                  </div>
                  <div className="border-bottom"></div>
                  <div className="py-4 d-flex align-items-center justify-content-between">
                    <span className="fnt-18 fw-bold">
                      Notify the sender of emails without processable
                      attachments.
                    </span>
                    <div>
                      <a href="#" className="btn btn-automate mx-2">
                        Automate: Off
                      </a>
                      <a href="#" className="link-color fw-bold">
                        <i className="icon-settings"></i> Edit template
                      </a>
                    </div>
                  </div>
                  <p className="mb-0">
                    Occasionally, people forget to attach a document or the
                    document is damaged. Rossum can respond automatically in
                    these cases so the vendor can immediately send a correct
                    document. You can always check the response in the{" "}
                    <a href="#" className="link-color fw-bold fnt-16">
                      Email dashboard.
                    </a>
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Tab.Pane>
    </>
  );
};

export default EmailSetting;
