import React from "react";
import ReactDOM from "react-dom";
import Tag from "../Tag";
import "./style.css";

const Modal = ({
  title,
  cancel,
  logo,
  date,
  typeOftrans,
  result,
  amount,
  symb,
  crypto,
  fiatamount,
  withdrawal,
}) => {
  return ReactDOM.createPortal(
    <div className="modal-cover">
      <div className="modal">
          <div className="cancel">
            <img  src={cancel} alt="logog" />
          </div>
        <div className="title">{title}</div>
        <div className="same logo">
        <img src={logo} alt="logog" />
        </div>
        <div className="same typeoftrans">{typeOftrans}</div>
        <div className="same date">{date}</div>
        <div className="same pricing">
          <div>
            {amount} {symb}
          </div>
          <div>
            <Tag tag={result} />
          </div>
        </div>
        {crypto && <div className="crypto same" >{fiatamount} NGN</div>}
        {withdrawal && (
          <div className="last-container">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid gray",
              }}
            >
              <div>Bank Details</div>
              <div className="bank-details">
                <div>John Doe</div>
                <div>0123456789</div>
                <div>Access Bank</div>
              </div>
            </div>
            <div
              className="charge"
            >
              <div>Fee charged</div>
              <div>100 NGN</div>
            </div>
          </div>
        )}
      </div>
    </div>,
    document.querySelector("#modal-root")
  );
};

export default Modal;
