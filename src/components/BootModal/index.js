import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const BootModal = (props) => {
  const { title, show, closemodal, cancel, children, shrecurr } = props;

  return (
    <>
      <Modal
        show={show}
        onHide={closemodal}
        // backdrop="static"
        // keyboard={false}
        // aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};

export default BootModal;
