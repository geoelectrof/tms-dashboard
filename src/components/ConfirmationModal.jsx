import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeConfirmationModal } from "../features/confirmationModal/confirmationModalSlice";

export default function ConfirmationModal(props) {

    const dispatch = useDispatch()
    const show = useSelector(state => state.confirmationModal.open)
    const operation = useSelector(state => state.confirmationModal.operation)

    return (
        <Modal
        // {...props}
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
            Shipment {operation} succesfully
            </Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
            </p>
        </Modal.Body> */}
        <Modal.Footer>
            <Button variant="primary text-white" onClick={() => dispatch(closeConfirmationModal())}>Close</Button>
        </Modal.Footer>
        </Modal>
    );
}
