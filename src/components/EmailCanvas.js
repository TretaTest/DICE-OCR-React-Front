import { Accordion, Form } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';

const EmailCanvas=({invoiceshow,setInvoiceShow})=>{
return (
    <Offcanvas
    placement="end"
    scroll="true"
    show={invoiceshow}
    onHide={setInvoiceShow}
    className="w-50"
  >
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>
        March development payment Invoice.pdf
      </Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body className="custom-scroll">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="fnt-14 mt-1">
              <i className="icon-mail_fill"></i>
            </div>
            <div className="d-flex flex-column ms-2 gap-2">
              <span className="fw-medium fnt-16">
                March development payment Invoice.pdf
              </span>
              <div className="d-flex align-items-center gap-3 flex-wrap">
                <div className="fnt-14">
                  <span className="fw-bold me-2">2 days ago</span>
                  <span className="opacity-70">from Sagar Sharma</span>
                </div>
                <div className="fnt-14">
                  <span className="opacity-70">
                    <i className="icon-file me-2"></i> RA623 - March-
                    2023Salary slip
                  </span>
                </div>
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            {/* ==== second accordion === */}
            <div className="nasted-accordion">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <div className="fnt-14 mt-1">
                      <div className="user-char">SS</div>
                    </div>
                    <div className="d-flex flex-column ms-2 gap-1">
                      <span className="fw-bold fnt-14">Sagar Sharma</span>
                      <div className="d-flex align-items-center gap-3">
                        <div className="fnt-14">
                          <span className="opacity-70">
                            Sagar.sharmadatagainservices.com
                          </span>
                        </div>
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="ps-3">
                      <div className="fnt-16">
                        <span className="opacity-70">
                          <i className="icon-file me-2"></i> Attached
                          documents
                        </span>
                        <span className="digit-badge ms-2">03</span>
                        <span className="status-badge ms-4">
                          <span className="badge-dot"></span> To Review
                        </span>
                      </div>
                      <div className="attached-doc-wrapper">
                        <div className="attached-item">
                          <a href="#1">
                            <div className="attached-item-images-block">
                              <img
                                src="/assets/images/pdf.png"
                                className="img-fluid"
                              />
                            </div>
                            <div className="attached-item-text">
                              <span>IndusInd Account xyz 12455</span>
                            </div>
                          </a>
                          <a href="#_" className="lightbox" id="1">
                            <iframe src="https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf" />
                          </a>
                        </div>
                        <div className="attached-item">
                          <a href="#1">
                            <div className="attached-item-images-block">
                              <img
                                src="/assets/images/pdf.png"
                                className="img-fluid"
                              />
                            </div>
                            <div className="attached-item-text">
                              <span>IndusInd Account xyz 12455</span>
                            </div>
                          </a>
                          <a href="#_" className="lightbox" id="1">
                            <iframe src="https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf" />
                          </a>
                        </div>
                        <div className="attached-item">
                          <a href="#1">
                            <div className="attached-item-images-block">
                              <img
                                src="/assets/images/pdf.png"
                                className="img-fluid"
                              />
                            </div>
                            <div className="attached-item-text">
                              <span>IndusInd Account xyz 12455</span>
                            </div>
                          </a>
                          <a href="#_" className="lightbox" id="1">
                            <iframe src="https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf" />
                          </a>
                        </div>
                      </div>
                      <div className="mt-4">
                        <a href="#" className="replay-fwrd-btn color-main">
                          <i className="icon-replay"></i> Replay
                        </a>
                        <a href="#" className="replay-fwrd-btn ms-3">
                          <i className="icon-forward"></i> Forward
                        </a>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="replay-box">
        <div className="replay-box-header">
          <div>
            <i className="icon-replay fnt-14 me-2"></i> Replay
          </div>
          <div>
            <i className="icon-x_rounded"></i>
          </div>
        </div>
        <div className="replay-box-body">
          <div className="mb-3">
            <Form.Select aria-label="Default select example">
              <option>Choose a template</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
          <div className="mb-3">
            <Form.Select aria-label="Default select example">
              <option>Choose a template</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
          <div className="mb-3">
            <Form.Control type="text" placeholder="Subject" />
          </div>
          <div className="mb-3">
            <Form.Control
              as="textarea"
              rows={6}
              placeholder="Description"
              className="bg-body-secondary"
            />
          </div>
          <div className="mb-3 d-flex gap-3">
            <a href="#" className="btn btn-primary py-2">
              Send
            </a>
            <a href="#" className="btn btn-outline-secondary py-2 px-4">
              Cancel
            </a>
          </div>
        </div>
      </div>
    </Offcanvas.Body>
  </Offcanvas>
)
}
export default EmailCanvas;