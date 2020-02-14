import React from "react";

import { Modal, Button } from "react-bootstrap";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false
    };
  }
  closeModal = () => this.setState({ openModal: false });
  openModal = () => {
    this.setState({ openModal: true });
  };

  render() {
    /*    let saveAndClose = () => {
             api.saveData()
            .then(() => this.setState({ open: false }))
            }
        */
    return (
      <div>
        <Button variant="primary" onClick={this.openModal}>
          Launch demo modal
        </Button>

        <Modal
          show={this.state.openModal}
          onHide={this.closeModal}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
            <Button variant="primary" onClick={this.closeModal}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default ModalExample;
