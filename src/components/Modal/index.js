import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import Tag from "../Tag";
import "./style.css";
import close from "../../assets/icons/cancel.png";

const Modal = (props) => {
  const { title, cancel, children, closemodal } = props
  return ReactDOM.createPortal(
    <div className="modal-cover">
      <div className="modal">
          <div className="cancel" onClick={closemodal}>
            <img  src={close} alt="logog" />
          </div>
        <div className="title">{title}</div>
       {
         children
       }
      </div>
    </div>,
    document.querySelector("#modal-root")
  );
};

Modal.proptypes =  {
    result: PropTypes.string
}
export default Modal;
