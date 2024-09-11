import "../../../App.css";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../../../features/Layout";
import {
  setOpenSidebarDrawerRequest,
  uploadInvoiceDataSuccess,
} from "../WorkSpace/Queue/reudx/queueAction";
import { DOCUMENT_ROUTE } from "../../../constants/RouteNameConstant";
function DocMap() {
  const { invoice, openSidebarDrawer, activeQueue, activeWorkSpace } =
    useSelector((state) => ({
      invoice: state.queue.invoice || {},
      openSidebarDrawer: state.queue.openSidebarDrawer,
      activeQueue: state.queue.activeQueue || {},
      activeWorkSpace: state.workSpace.activeWorkSpace || {},
    }));

  const [activePage, setActivePage] = useState(1);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValueId, setSelectedValueId] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    navigate(`${location.pathname}`);
  }, [location.pathname]);
  // Function to handle child item click
  const handleChildItemClick = (id, value) => {
    setSelectedValueId(id);
    setSelectedValue(value);
  };

  // Function to handle input change
  const handleInputChange = (event, setionIndex, childIndex) => {
    // const invoiceData=JSON?.parse(invoice?.MappedFieldsWithValues)
    // console.log('before', invoiceData)

    // if (invoiceData[setionIndex] && invoiceData[setionIndex].children && invoiceData[setionIndex].children[childIndex]) {
    //   invoiceData[setionIndex].children[childIndex].default_value = event.target.value;
    // }
    // console.log('after', invoiceData)
    // dispatch(uploadInvoiceDataSuccess(invoiceData))
    setSelectedValue(event.target.value);
  };

  const HtmlRenderer = ({ htmlString }) => {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: htmlString || "",
        }}
      />
    );
  };

 
  return (
    <>
      {/* === Top Navbar ==== */}
      <Layout />
      <main className="content p-0">
        <Row className="m-0">
          <Col md="3" className="px-0">
            <div className="document-layout-leftside">
              <div className="document-layout-header">
                <span
                  className="text-dark cursor-pointer"
                  onClick={() =>
                    navigate(DOCUMENT_ROUTE, {
                      state: {
                        wsId: activeWorkSpace?.wsId,
                        workSpaceName:activeWorkSpace?.workSpaceName,
                        queueId: activeQueue.queueId,
                        queueName:activeQueue?.queueName
                      },
                    })
                  }
                >
                  <i className="icon-left-long-arrow fnt-12"></i> Review
                </span>
              </div>
              <div className="select-field-option">
                <Accordion defaultActiveKey={["0"]} alwaysOpen>
                  <ul className="select-field-option-ul custom-scroll">
                    {invoice?.MappedFieldsWithValues &&
                      JSON?.parse(invoice?.MappedFieldsWithValues.length > 0) &&
                      JSON?.parse(invoice?.MappedFieldsWithValues)
                        ?.filter((fItem, findex) => {
                          return fItem.hidden !== true;
                        })
                        ?.map((item, index) => {
                          return (
                            <>
                              <li
                                className="select-field-option-list"
                                id={index}
                              >
                                <Accordion.Item eventKey={index}>
                                  <Accordion.Header>
                                    {item.label}
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    {item.children?.length > 0 &&
                                      item.children
                                        ?.map((filterItem, findex) => {
                                          if (!("hidden" in filterItem)) {
                                            filterItem.hidden = false;
                                          }
                                          return filterItem;
                                          // Show items that either have hidden: false or do not have the hidden key
                                          // return (

                                          //   filterItem.hidden !== true ||
                                          //   filterItem.hidden === undefined
                                          // );
                                        })
                                        ?.filter((hItem) => {
                                          return (
                                            hItem.hidden !== true ||
                                            hItem.hidden === undefined
                                          );
                                        })
                                        ?.map((child, cindex) => {
                                          return (
                                            <div
                                              className="select-document-list cursor-pointer"
                                              onClick={() =>
                                                handleChildItemClick(
                                                  child.id,
                                                  child.default_value
                                                )
                                              }
                                            >
                                              <div className="select-document-item">
                                                {child.label}

                                                {/* Input field to show and edit the selected value */}
                                                {selectedValueId ===
                                                child.id ? (
                                                  <div className="">
                                                    <input
                                                      type="text"
                                                      className="form-control map-control"
                                                      value={selectedValue}
                                                      onChange={(e) =>
                                                        handleInputChange(
                                                          e,
                                                          index,
                                                          cindex
                                                        )
                                                      }
                                                    />
                                                  </div>
                                                ) : (
                                                  <div>
                                                    {child.default_value}
                                                    <span className="text-success ms-2">
                                                      <i className="icon-check"></i>
                                                    </span>
                                                  </div>
                                                )}
                                              </div>
                                              {/* <div className="select-document-item ">
                                              {child.id}
                                              <span className="text-success">
                                                <i className="icon-check"></i>
                                              </span>
                                            </div> */}
                                            </div>
                                          );
                                        })}
                                  </Accordion.Body>
                                </Accordion.Item>
                              </li>
                            </>
                          );
                        })}
                    <div className="m-4">
                      <a href="#" className="btn btn-primary d-block py-2">
                        Confirm
                      </a>
                    </div>
                  </ul>
                </Accordion>
              </div>
            </div>
          </Col>
          {/**center imge view */}
          <Col md="7" className="px-0">
            <div className="document-layout-centerside">
              <div className="document-layout-header text-center">
                <div className="text-dark fnt-18">{invoice?.FileName}</div>
              </div>
            </div>
            <div className="documentmain-view custom-scroll">
              <div id="dvParentImgViewer" class="col-md-6 position-relative">
                <div id="dvImgViewer" class="">
                  <g transform="matrix(0.9300000071525574, 0, 0, 0.9300000071525574, 50.39994870463046, -93.00000071525574)">
                    {/* <HtmlRenderer
                      htmlString={
                        invoice?.ImageWithSVGs &&
                        JSON?.parse(invoice.ImageWithSVGs)[0]?.ImageSVGsContent
                      }
                    /> */}
                    {invoice?.ImageWithSVGs?.length > 0 &&
                      JSON?.parse(invoice.ImageWithSVGs)?.map((item, index) => {
                        return (
                          <HtmlRenderer
                            htmlString={item?.ImageSVGsContent.replace(
                              `$$image_content$$`,
                              item.ImageContent
                            )}
                          />
                        );
                      })}
                  </g>
                </div>
              </div>
            </div>
          </Col>
          {/**thumbnail */}
          <Col md="2" className="px-0">
            <div className="document-layout-rightside">
              <div className="document-layout-header text-center"></div>
              <div className="thumbview-wrapper custom-scroll">
                <ul className="thumbview-ul">
                  {invoice?.ImageWithSVGs?.length > 0 &&
                    JSON?.parse(invoice.ImageWithSVGs)?.map((item, index) => {
                      return (
                        // <HtmlRenderer htmlString={item?.ImageSVGsContent}/>
                        <li
                          className={`thumbview-li ${
                            activePage === item.PageNumber ? "active" : ""
                          }`}
                        >
                          <a
                            className="text-dark"
                            href={`#svgPage_${item.PageNumber}`}
                            onClick={() => setActivePage(item.PageNumber)}
                          >
                            <img
                              src={item?.ImageContent}
                              className="thumbview-img"
                            />
                            <div className="fnt-14 fw-medium mt-2">
                              {item.PageNumber}
                            </div>
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default DocMap;
