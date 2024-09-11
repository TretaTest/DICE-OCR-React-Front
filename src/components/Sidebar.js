import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  BASIC_SETTING_ROUTE,
  DASHBOARD_ROUTE,
  DOCUMENT_ROUTE,
  GET_HELP_ROUTE,
  INVITE_COLLEAGUE,
  MANAGE_ACCOUNT_ROUTE,
  SETTING_ROUTE,
  SUPPORT_ROUTE,
} from "../constants/RouteNameConstant";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSidebarDrawerRequest } from "../modules/Authorization/WorkSpace/Queue/reudx/queueAction";
const Sidebar = () => {
  // const [openSidebarDrawer, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { openSidebarDrawer } = useSelector((state) => ({
    openSidebarDrawer: state.queue.openSidebarDrawer,
  }));
  useEffect(() => {
    navigate(`${location.pathname}`);
  }, [location.pathname]);
  useEffect(() => {
    // Add or remove class based on openSidebarDrawer state
    const rootElement = document.getElementById("root");
    if (openSidebarDrawer) {
      rootElement.classList.add("Sidebar-open");
    } else {
      rootElement.classList.remove("Sidebar-open");
    }
  }, [openSidebarDrawer]);
  const getActiveKey = () => {
    switch (location.pathname) {
      case DASHBOARD_ROUTE:
        return "1";
      case DOCUMENT_ROUTE:
        return "2";
      case MANAGE_ACCOUNT_ROUTE:
        return "3";
      case INVITE_COLLEAGUE:
        return "4";
      case BASIC_SETTING_ROUTE:
        return "5";
      case SUPPORT_ROUTE:
        return "6";
      case GET_HELP_ROUTE:
        return "7";
      default:
        return "2";
    }
  };
  return (
    <Nav
      defaultActiveKey={getActiveKey()}
      className={`flex-column sidebar custom-scroll`}
    >
      {/* <Nav.Link href="#" onClick={() => setWorkSpaceDrawerOpen(!openWorkSpaceDrawer)}>
        <i className="icon-file"></i> WorkSpaces
      </Nav.Link> */}
      <a
        // href="#"
        eventKey="link-7"
        className="collase-line"
        onClick={() =>
          dispatch(setOpenSidebarDrawerRequest({data:!openSidebarDrawer}))
        }
      >
        <i className="icon-collase fnt-16"></i>
      </a>
      <Nav.Link href="#" eventKey="1" onClick={() => navigate("/dashboard")}>
        <i className="icon-dashboard"></i> <span>Dashboard</span>
      </Nav.Link>
      <Nav.Link href="#" eventKey="2" onClick={() => navigate(DOCUMENT_ROUTE)}>
        <i className="icon-file"></i> <span>Documents</span>
      </Nav.Link>
      <Nav.Link
        href="#"
        eventKey="3"
        onClick={() => navigate(MANAGE_ACCOUNT_ROUTE)}
      >
        <i className="icon-manage"></i> <span>Manage Accounts</span>
      </Nav.Link>
      <Nav.Link
        href="#"
        eventKey="4"
        onClick={() => navigate(INVITE_COLLEAGUE)}
      >
        <i className="icon-share"></i>
        <span>Invite Colleague</span>
      </Nav.Link>
      <Nav.Link href="#" eventKey="5" onClick={() => navigate(SETTING_ROUTE)}>
        <i className="icon-setting"></i>
        <span>Settings</span>
      </Nav.Link>
      <Nav.Link href="#" eventKey="6" onClick={() => navigate(SUPPORT_ROUTE)}>
        <i className="icon-support"></i>
        <span>Support</span>
      </Nav.Link>
      <Nav.Link href="#" eventKey="7" onClick={() => navigate(GET_HELP_ROUTE)}>
        <i className="icon-help"></i>
        <span>Get Help</span>
      </Nav.Link>
    </Nav>
  );
};
export default Sidebar;
