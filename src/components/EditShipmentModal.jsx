import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { hideEditShipmentModal } from "../features/editShipmentModal/editShipmentModalSlice";
// import { addShipment } from "../features/transports/shipmentsSlice"; --> hideShipment creation
import { openConfirmationModal } from "../features/confirmationModal/confirmationModalSlice";
import { useState } from "react";
import FormInput from "./FormInput";
import { editShipment } from "../features/transports/shipmentsSlice";

function EditShipmentModal({shipmentId}) {
    
    const dispatch = useDispatch();
    const show = useSelector((state) => state.editShipmentModal.show);
    const { shipments } = useSelector((state) => state.shipments);
    const shipment = shipments.find(
        (shipment) => shipment.id == shipmentId
    );

    const [values, setValues] = useState({
        id: shipmentId,
        customerName: shipment.customerName,
        originAddress: shipment.originAddress,
        destinationAddress: shipment.destinationAddress,
        carrierName: shipment.carrierName,
        deliveryDate: shipment.deliveryDate,
    });

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value.toString() });
        // console.log(e.target.name, e.target.value)
        // console.log(values)
        // console.log(typeof values.status)
    };

    return (
        <>
        <Modal show={show} onHide={() => dispatch(hideEditShipmentModal())}>
            <Modal.Header closeButton>
            <Modal.Title>EDIT SHIPMENT</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <FormInput
                name="customerName"
                type="text"
                placeholder="Customer Name"
                errorMessage="Please add customer's name!"
                label="Cutomer Name"
                required={true}
                value={values.customerName}
                onChange={onChange}
                />
                <FormInput
                name="originAddress"
                type="text"
                placeholder="Origin Address"
                errorMessage="Please add the addres of the shipment origin!"
                label="Origin Address"
                required={true}
                value={values.originAddress}
                onChange={onChange}
                />
                <FormInput
                name="destinationAddress"
                type="text"
                placeholder="Destination Address"
                errorMessage="Please add the address of the shipment destination!"
                label="Destination Address"
                required={true}
                value={values.destinationAddress}
                onChange={onChange}
                />
                <FormInput
                name="carrierName"
                type="text"
                placeholder="Carrier Name"
                errorMessage="Please add the carrier's name!"
                label="Carrier Name"
                required={true}
                value={values.carrierName}
                onChange={onChange}
                />
                <FormInput
                name="deliveryDate"
                type="date"
                placeholder="Estimated Delivery Date"
                errorMessage="Please choose an estimated delivery time!"
                label="Estimated Delivery Date"
                required={true}
                value={values.deliveryDate}
                onChange={onChange}
                />
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button
                variant="secondary"
                onClick={() => {
                dispatch(hideEditShipmentModal());
                setValues({
                  customerName: shipment.customerName,
                  originAddress: shipment.originAddress,
                  destinationAddress: shipment.destinationAddress,
                  carrierName: shipment.carrierName,
                  deliveryDate: shipment.deliveryDate,
                });
                }}
            >
                Close
            </Button>
            <Button
                variant="primary"
                onClick={() => {
                dispatch(hideEditShipmentModal());
                dispatch(editShipment(values));
                dispatch(openConfirmationModal("updated"));
                // setValues({
                //     customerName: "",
                //     originAddress: "",
                //     destinationAddress: "",
                //     carrierName: "",
                //     deliveryDate: "",
                // });
                }}
            >
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default EditShipmentModal;
