import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Form from 'react-bootstrap/Form';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Nav from "react-bootstrap/Nav";
const SubHeader = ({Link,newWorkspaceShowModal,filterShowModal,mediaUploadShowModal}) => {
  return (
    <Row>
    <Col className="d-flex align-items-center mb-3">
        <div className="mainTitle">
            <Breadcrumb>
                <Breadcrumb.Item href="#">Documents</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Datagain
                </Breadcrumb.Item>
                <Breadcrumb.Item active className="d-flex gap-1">India
                    <Dropdown as={NavItem} className="w-100 breadcrumb-head-dropdown" align="start">
                        <Dropdown.Toggle as={NavLink}
                        >
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="breadcrumb-dropdown">
                            <div className="fnt-14 mb-2 fw-normal"><span className="opacity-70 me-2">Email address:</span> <span className=" opacity-100">Datagain Org-conage-6dbb5d@Datagain.Dice.app</span> <i className="icon-copy link-color ms-2"></i></div>
                            <div className="fnt-14 mb-2  fw-normal"><span className="opacity-70 me-2">Category ID:</span> <span className=" opacity-100">11444491144449</span> <i className="icon-copy link-color ms-2"></i> </div>
                        </Dropdown.Menu>
                    </Dropdown>
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
    </Col>
    <Col md="auto" className="d-flex align-items-center mb-3 gap-3">

        <Link title="Queue settings" id="t-1"   >
            <span className="filter-btn" onClick={newWorkspaceShowModal}><i className="icon-setting"></i></span>
        </Link>
        <Form className="search-group main-search-group">
            <Form.Group className="search-group" controlId="exampleForm.ControlInput1">
                <Form.Control className="border-0" type="text" placeholder="Search" />
                <span> <i className="icon-search"></i></span>
            </Form.Group>
        </Form>
        <Dropdown as={NavItem} className="dots-dropdown">
            <Dropdown.Toggle as={NavLink} className="nav-user">
                <Link title="Filter" id="t-2" >
                    <span className="filter-btn"><i className="icon-filter"></i></span>
                </Link>
            </Dropdown.Toggle>
            <Dropdown.Menu className="">
                <div className="px-2 mb-2"><Form.Control type="email" placeholder="Search filter" className="filter-search-input" /></div>
                <Dropdown.Item href="#/action-1" onClick={filterShowModal}>Status</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Amount Due</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Supplier Name</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Vendor Name</Dropdown.Item>
                <Dropdown.Item href="#/action-5">Issue Date</Dropdown.Item>
                <Dropdown.Item href="#/action-6">Total Tax</Dropdown.Item>
                <Dropdown.Item href="#/action-7">Received at</Dropdown.Item>
                <Dropdown.Item href="#/action-8">Labels</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <div className="group-filter-btn">

            <Nav variant="pills" className="flex-column">
                <Nav.Item>
                    <Nav.Link title="Documents" id="t-3" eventKey="first">
                        <span className="group-icon-link"><i className="icon-file"></i></span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link title="Emails" id="t-4" eventKey="second">
                        <span className="group-icon-link border-end-0"><i className="icon-mail"></i></span>
                    </Nav.Link>
                </Nav.Item>
            </Nav>

        </div>
        <a href="#" className="btn btn-primary" onClick={mediaUploadShowModal}>Upload</a>
    </Col>
</Row>
  )
}

export default SubHeader;