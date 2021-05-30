import React, { useState } from 'react'
import Menu from '../../components/Menu'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const Investment = () => {
  const [show, setShow] = useState(true)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <div>
            <Menu />
            <div style={{width: '80%', margin: '40px auto'}}>
                <h1>Investment</h1>
            </div>
            <Button>New BTN</Button>
            <Modal 
    show={show} onHide={handleClose}
    >
        <Modal.Header 
        closeButton
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
      </Modal>
        </div>
    )
}

export default Investment
