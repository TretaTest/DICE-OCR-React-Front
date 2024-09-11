import React from "react";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const ModalComponent = ({
  show,
  onHide,
  title,
  body,
  footer,
  size = "md",
  centered = true,
  backdrop = true,
  keyboard = true,
  scrollable = false,
  headerClassName,
  bodyClassName,
  ...props
}) => {
  return (
    <Modal
      size={size}
      show={show}
      onHide={onHide}
      centered={centered}
      backdrop={backdrop}
      keyboard={keyboard}
      scrollable={scrollable}
      {...props}
    >
      <Modal.Header closeButton className={headerClassName ? headerClassName :''}>
        {title &&<Modal.Title>{title}</Modal.Title>}
      </Modal.Header>
      {body && <Modal.Body className={bodyClassName ? bodyClassName:''}>{body}</Modal.Body>}
    </Modal>
  );
};

export default ModalComponent;
