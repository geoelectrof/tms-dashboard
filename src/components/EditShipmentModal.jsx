import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { hideEditShipmentModal } from "../features/editShipmentModal/editShipmentModalSlice";
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
        cost: shipment.cost,
        deliveryDate: shipment.deliveryDate,
    });

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value.toString() });
    };

    return (
      <>
        <Modal show={show} onHide={() => dispatch(hideEditShipmentModal())}>
          <Modal.Header closeButton>
            <Modal.Title>EDIT SHIPMENT</Modal.Title>
          </Modal.Header>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(hideEditShipmentModal());
              dispatch(editShipment(values));
              dispatch(openConfirmationModal("updated"));
            }}
          >
            <Modal.Body>
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
                name="cost"
                type="number"
                placeholder="Cost"
                errorMessage="Please add the cost of the shipment!"
                label="Shipment Cost €"
                required={true}
                value={values.cost}
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
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary text-white"
                onClick={() => {
                  dispatch(hideEditShipmentModal());
                  setValues({
                    customerName: shipment.customerName,
                    originAddress: shipment.originAddress,
                    destinationAddress: shipment.destinationAddress,
                    carrierName: shipment.carrierName,
                    cost: shipment.cost,
                    deliveryDate: shipment.deliveryDate,
                  });
                }}
              >
                Close
              </Button>
              <Button type="submit" variant="primary text-white">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
}

export default EditShipmentModal;
