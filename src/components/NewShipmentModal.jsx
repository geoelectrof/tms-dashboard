import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { hideNewShipmentModal } from "../features/newShipmentModal/newShipmentModalSlice";
import { addShipment } from "../features/transports/shipmentsSlice";
import { useState } from "react";
import FormInput from "./FormInput";

function NewShipmentModal() {
    const dispatch = useDispatch()
    const show = useSelector(state => state.newShipmentModal.show)

    const {shipments} = useSelector(state => state.shipments)
    console.log(shipments)
    let { id: newid } = shipments.reduce((prev, current) => {
      return ((prev.id > current.id) ? prev : current)
    })
    newid = newid + 1


    const [values, setValues] = useState({
      id: newid,
      customerName: "",
      originAddress: "",
      destinationAddress: "",
      carrierName: "",
      estDeliveryDate: "",
      status: "in transit"
    })

    const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };

    const testShipment = {
      id: 1,
      customerName: "Papadopoulos Nikos",
      originAddress: "Athens",
      destinationAddress: "Thessaloniki",
      carrierName: "DHL",
      deliveryDate: "2023-06-25",
      status: "in transit",
    };

    return (
      <>
        <Modal show={show} onHide={() => dispatch(hideNewShipmentModal())}>
          <Modal.Header closeButton>
            <Modal.Title>ADD NEW SHIPMENT</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <FormInput
                name="customerName"
                type="text"
                placeholder="Customer Name"
                errorMessage="Username should be 3-16 characters and shouldn't include any special character!"
                label="Cutomer Name"
                pattern="^[A-Za-z0-9]{3,16}$"
                required={true}
                value={values.customerName}
                onChange={onChange}
              />
              <FormInput
                name="originAddress"
                type="text"
                placeholder="Origin Address"
                errorMessage="Username should be 3-16 characters and shouldn't include any special character!"
                label="Origin Address"
                pattern="^[A-Za-z0-9]{3,16}$"
                required={true}
                value={values.originAddress}
                onChange={onChange}
              />
              <FormInput
                name="destinationAddress"
                type="text"
                placeholder="Destination Address"
                errorMessage="Username should be 3-16 characters and shouldn't include any special character!"
                label="Destination Address"
                pattern="^[A-Za-z0-9]{3,16}$"
                required={true}
                value={values.destinationAddress}
                onChange={onChange}
              />
              <FormInput
                name="carrierName"
                type="text"
                placeholder="Carrier Name"
                errorMessage="Username should be 3-16 characters and shouldn't include any special character!"
                label="Carrier Name"
                pattern="^[A-Za-z0-9]{3,16}$"
                required={true}
                value={values.carrierName}
                onChange={onChange}
              />
              <FormInput
                name="estDeliveryDate"
                type="date"
                placeholder="Estimated Delivery Date"
                errorMessage="Username should be 3-16 characters and shouldn't include any special character!"
                label="Estimated Delivery Date"
                required={true}
                value={values.estDeliveryDate}
                onChange={onChange}
              />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                dispatch(hideNewShipmentModal());
                setValues({
                  customerName: "",
                  originAddress: "",
                  destinationAddress: "",
                  carrierName: "",
                  estDeliveryDate: "",
                })
              }}
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                dispatch(hideNewShipmentModal());
                dispatch(addShipment(values));
                setValues({
                  customerName: "",
                  originAddress: "",
                  destinationAddress: "",
                  carrierName: "",
                  estDeliveryDate: "",
                });
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default NewShipmentModal;
