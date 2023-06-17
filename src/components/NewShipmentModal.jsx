import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { hideNewShipmentModal } from "../features/newShipmentModal/newShipmentModalSlice";
import { addShipment } from "../features/transports/shipmentsSlice";
import { openConfirmationModal } from "../features/confirmationModal/confirmationModalSlice";
import { useState } from "react";
import FormInput from "./FormInput";

function NewShipmentModal({ handleRemoveFilters }) {
    const dispatch = useDispatch()
    const show = useSelector(state => state.newShipmentModal.show)

    const [values, setValues] = useState({
      customerName: "",
      originAddress: "",
      destinationAddress: "",
      carrierName: "",
      cost: "",
      deliveryDate: "",
    })

    const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value.toString() });
    };

    return (
      <>
        <Modal show={show} onHide={() => dispatch(hideNewShipmentModal())}>
          <Modal.Header closeButton>
            <Modal.Title>ADD NEW SHIPMENT</Modal.Title>
          </Modal.Header>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(hideNewShipmentModal());
              dispatch(addShipment(values));
              dispatch(openConfirmationModal("added"));
              setValues({
                customerName: "",
                originAddress: "",
                destinationAddress: "",
                carrierName: "",
                cost: "",
                deliveryDate: "",
              });
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
                errorMessage="Please add a two decimals cost of shipment!"
                label="Shipment Cost €"
                min={0}
                step={0.01}
                pattern="^\d*(\.\d{0,2})?$"
                required={true}
                value={values.cost}
                onChange={onChange}
              />
              <FormInput
                name="deliveryDate"
                type="date"
                placeholder="dd-mm-yyyy"
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
                  dispatch(hideNewShipmentModal());
                  setValues({
                    customerName: "",
                    originAddress: "",
                    destinationAddress: "",
                    carrierName: "",
                    cost: "",
                    deliveryDate: "",
                  });
                }}
              >
                Close
              </Button>
              <Button
                type="submit"
                variant="primary text-white"
                onClick={handleRemoveFilters}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
}

export default NewShipmentModal;
