import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ACCESS_SETTING_ROUTE,
  AUTOMATION_SETTING_ROUTE,
  BASIC_SETTING_ROUTE,
  EMAIL_SETTING_ROUTE,
  FIELDS_TO_CAPTURE_ROUTE,
} from "../constants/RouteNameConstant";
import { Accordion } from "react-bootstrap";
const SettingSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  //   useEffect(()=>{
  // navigate(`${location.pathname}`)
  //   },[location.pathname])

  return (
    
      <Nav variant="pills" className="flex-column setting-leftside">
        <Nav.Item>
          <Nav.Link
            eventKey="first"
            onClick={() => navigate(BASIC_SETTING_ROUTE, { state: "first" })}
          >
            General Settings
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="second"
            onClick={() =>
              navigate(FIELDS_TO_CAPTURE_ROUTE, { state: "second" })
            }
          >
            Label Settings
          </Nav.Link>
        </Nav.Item>
        <Accordion className="navLinkAccordion">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Advanced Setting</Accordion.Header>
            <Accordion.Body>
              <Nav.Item>
                <Nav.Link
                  eventKey="third"
                  onClick={() =>
                    navigate(EMAIL_SETTING_ROUTE, { state: "third" })
                  }
                >
                  Email Setting
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="fourth"
                  onClick={() =>
                    navigate(AUTOMATION_SETTING_ROUTE, { state: "fourth" })
                  }
                >
                  Automation Setting{" "}
                </Nav.Link>
              </Nav.Item>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {/* <Nav.Item>
          <Nav.Link
            eventKey="third"
            onClick={() => navigate(EMAIL_SETTING_ROUTE, { state: "third" })}
          >
            Email Setting
          </Nav.Link>
        </Nav.Item> */}
        {/* <Nav.Item>
          <Nav.Link
            eventKey="fourth"
            onClick={() =>
              navigate(AUTOMATION_SETTING_ROUTE, { state: "fourth" })
            }
          >
            Automation Setting{" "}
          </Nav.Link>
        </Nav.Item> */}
        <Nav.Item>
          <Nav.Link
            eventKey="fifth"
            onClick={() =>
              navigate(AUTOMATION_SETTING_ROUTE, { state: "fifth" })
            }
          >
            User Access
          </Nav.Link>
        </Nav.Item>
      </Nav>
   
  );
};

export default SettingSidebar;
