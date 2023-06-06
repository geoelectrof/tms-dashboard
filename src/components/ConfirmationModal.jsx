import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeConfirmationModal } from "../features/confirmationModal/confirmationModalSlice";

export default function ConfirmationModal() {

    const dispatch = useDispatch()
    const show = useSelector(state => state.confirmationModal.open)
    const operation = useSelector(state => state.confirmationModal.operation)

    return (
        <Modal
            show={show}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
                Shipment {operation} succesfully
            </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
            <Button variant="primary text-white" onClick={() => dispatch(closeConfirmationModal())}>Close</Button>
        </Modal.Footer>
        </Modal>
    );
}
