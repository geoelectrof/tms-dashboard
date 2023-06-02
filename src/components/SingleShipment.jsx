import { useParams } from "react-router"
import { LinkContainer } from "react-router-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { Button } from "react-bootstrap"
import { removeShipment } from "../features/transports/shipmentsSlice"

const SingleShipment = () => {
    const { shipmentId } = useParams()
    const {shipments} = useSelector(state => state.shipments)
    const dispatch = useDispatch()
    const shipment = shipments.find(shipment => shipment.id == shipmentId)

    return (
      <>
        <div>SingleShipment</div>
        <h2>{shipmentId}</h2>
        <h3>{shipment.customerName}</h3>
        <h3>{shipment.originAddress}</h3>
        <h3>{shipment.destinationAddress}</h3>
        <h3>{shipment.carrierName}</h3>
        <h3>Estimated delivery date: {shipment.deliveryDate}</h3>
        <h3>{shipment.status}</h3>
        <LinkContainer to="/shipments">
        <button
          variant="danger text-white"
          onClick={() => dispatch(removeShipment(shipment.id))}
        >
          Delete shipment
        </button>
        </LinkContainer>
        <div>
        <LinkContainer to="/shipments">
          <Button>Back to shipments</Button>
        </LinkContainer>
        </div>
      </>
    );
}
export default SingleShipment