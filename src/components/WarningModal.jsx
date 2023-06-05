import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { hideWarningModal } from "../features/warningModal/warningModalSlice";
import { openConfirmationModal } from "../features/confirmationModal/confirmationModalSlice";
import { removeShipment } from "../features/transports/shipmentsSlice";

const WarningModal = () => {

    const dispatch = useDispatch()
    const show = useSelector(state => state.warningModal.show)
    const warningMessage = useSelector(state => state.warningModal.warningMessage)
    const id = useSelector(state => state.warningModal.id)

    return (
        <Modal
        show={show}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
            {warningMessage}
            </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
            <Button 
                variant="primary text-white" 
                onClick={() => dispatch(hideWarningModal())}
            >
                Cancel
            </Button>
            <Button 
                variant="primary text-white" 
                onClick={() => {
                    dispatch(removeShipment(id));
                    dispatch(openConfirmationModal("deleted"));
                    dispatch(hideWarningModal())
                }}
            >
                Confirm
            </Button>
        </Modal.Footer>
        </Modal>
    )
};
export default WarningModal;
