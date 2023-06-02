import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { hideNewShipmentModal } from "../features/newShipmentModal/newShipmentModalSlice";

function NewShipmentModal() {
    const dispatch = useDispatch()
    const show = useSelector(state => state.newShipmentModal.show)

    return (
      <>
        <Modal show={show} onHide={() => dispatch(hideNewShipmentModal())}>
          <Modal.Header closeButton>
            <Modal.Title>ADD NEW SHIPMENT</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => dispatch(hideNewShipmentModal())}
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => dispatch(hideNewShipmentModal())}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default NewShipmentModal;
