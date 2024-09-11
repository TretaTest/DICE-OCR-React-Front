import "../App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../constants/RouteNameConstant";
const SuccessModal = () => {
    const navigate=useNavigate()
  return (
    <>
      <section className="loginBg">
        <Container>
          <Row className="align-items-center justify-content-center h-100vh">
            <Col sm={6}>
              <Card className="loginCard">
                <Card.Body className="p-0">
                  <div className="mb-2 text-center">
                    <img
                      src="/Assets/images/check_fill.svg"
                      className="img-fluid"
                    />
                  </div>
                  <div className="fnt-22 fw-bold mb-2 text-center">
                    Password Changed!
                  </div>
                  <div className="fnt-16 mb-4 text-center">
                    Your password has been successfully reset.
                  </div>
                  <div className="d-grid gap-2 mx-5 my-4">
                    <Button variant="primary" size="lg" className="h-56 fnt-20" onClick={()=>navigate(LOGIN_ROUTE)}>
                      Login
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SuccessModal;
