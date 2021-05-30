import React, {useState} from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import Tag from "../Tag";
import "./style.css";
import close from "../../assets/icons/cancel.png";
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const NewModal = (props) => {
  const { title, cancel, children, closemodal } = props
  const [show, setShow] = useState(true)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const Backdrop = styled("div")`
  position: fixed;
  z-index: 1040;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.5;
`;

  const RandomlyPositionedModal = styled(Modal)`
  position: fixed;
  width: 400px;
  z-index: 1040;
  border: 1px solid #e5e5e5;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  padding: 20px;
`;

  // const renderBackdrop = (props) => <Backdrop {...props} />;
  return ReactDOM.createPortal(
    <>
    <div className="modal-cover" onClick={closemodal}>
    <div className="my-modal">
          <div className="cancel" onClick={closemodal}>
            <img style={{cursor: 'pointer'}} src={close} alt="logog" />
          </div>
        <div className="title">{title}</div>
        <Button>Click Me!</Button>
       {
         children
       }
      </div>
      </div>
      {/* <Modal 
      show={show} onHide={handleClose}
      >
        <Modal.Header 
        // closeButton
        >
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you're reading this text in a modal!
        <Button>Click Me!</Button>

          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" 
          // onClick={handleClose}
          >
            Close
          </Button>
          <Button variant="primary" 
          // onClick={handleClose}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
      

     

{/* <div className="modal-example">
      <RandomlyPositionedModal
        show={show}
        onHide={() => setShow(false)}
        renderBackdrop={renderBackdrop}
        aria-labelledby="modal-label"
      >
        <div>
          <h4 id="modal-label">Text in a modal</h4>
          <p>
            Duis mollis, est non commodo luctus, nisi erat
            porttitor ligula.
          </p>
          <ModalExample />
        </div>
      </RandomlyPositionedModal>
    </div> */}

    </>,
    document.querySelector("#modal-root")
  );
};


// const NewModal = (props) => {
//   const { title, cancel, children, closemodal } = props

//   return (
//     <Modal 
//     // show={show} onHide={handleClose}
//     >
//         <Modal.Header 
//         // closeButton
//         >
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Woohoo, you're reading this text in a modal!
//         <Button>Click Me!</Button>

//           </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" 
//           // onClick={handleClose}
//           >
//             Close
//           </Button>
//           <Button variant="primary" 
//           // onClick={handleClose}
//           >
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//   )
// }

// NewModal.proptypes =  {
//     result: PropTypes.string
// }

export default NewModal;
