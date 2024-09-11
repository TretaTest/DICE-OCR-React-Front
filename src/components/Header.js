import Navbar from "react-bootstrap/Navbar";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Cookies from "js-cookie";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../constants/RouteNameConstant";
import { clearActiveQueueDocListRequest, clearActiveQueueRequest, setWsIdAndQueueId } from "../modules/Authorization/WorkSpace/Queue/reudx/queueAction";
import { useDispatch } from "react-redux";
import { clearActiveWorkSpaceRequest } from "../modules/Authorization/WorkSpace/redux/workSpaceAction";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name=localStorage.getItem("name")||""
 const nameParts = name?.trim().split(' ');
  const firstNameInitial = nameParts[0]?.charAt(0)?.toUpperCase();
   const lastNameInitial = nameParts[nameParts.length - 1]?.charAt(0)?.toUpperCase();
  return (
    <Navbar expand="lg" fixed="top" className="bg-body-white px-5 py-0">
      <Container fluid>
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-1">
          <img
            src="/assets/images/logo.svg"
            className="nav-logo"
            alt="ANT logo"
          />
          <h1 className="nav-title-head">DICE</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex align-items-center gap-4 ms-auto">
            {/* <Form className="search-group-wrapper">
              <Form.Group
                className="search-group"
                controlId="exampleForm.ControlInput1"
              >
                <span className="icon-inputgroup">
                  <i className="icon-search"></i>
                </span>
                <Form.Control
                  className="border-0"
                  type="text"
                  placeholder="Search here..."
                />
              </Form.Group>
            </Form> */}
            <Dropdown
              as={NavItem}
              className="w-100 notification-head-dropdown"
              align="end"
            >
              <Dropdown.Toggle as={NavLink}>
                <div className="noti-icon-wrapper">
                  <i className="icon-bell"></i>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="notification-dropdown"></Dropdown.Menu>
            </Dropdown>
            <Dropdown as={NavItem} className="w-100">
              <Dropdown.Toggle as={NavLink} className="nav-user">
                {/* <img
                  src="/assets/images/avatar-icon.png"
                  className="navbar-profile-avatar me-3"
                /> */}
                <span className="loginUser-text">
                                        {`${firstNameInitial}${lastNameInitial}`}
                                    </span>
                <div className="d-lg-flex flex-column d-none me-2 downarrow-after fw-medium">
                  {localStorage.getItem("name")}
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="">
                <Dropdown.Item href="#/action-1">My Account</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Support</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Lock Screen</Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    localStorage.clear();
                    sessionStorage.clear();
                    Cookies.remove("userData");
                    Cookies.remove("name");
                    dispatch(clearActiveQueueRequest({ data: {} }));
                    dispatch(clearActiveWorkSpaceRequest({data:{}}))
                    dispatch(clearActiveQueueDocListRequest({data:{}}))
                    dispatch(setWsIdAndQueueId({data:{}}));
                    navigate(LOGIN_ROUTE);
                  }}
                >
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
