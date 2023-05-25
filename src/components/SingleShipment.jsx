import { useParams } from "react-router"
import { LinkContainer } from "react-router-bootstrap"
import { useSelector } from "react-redux"

const SingleShipment = () => {
    const { shipmentId } = useParams()
    const {shipments} = useSelector(state => state.shipments)
    console.log('shipmentnew', shipments)
    const shipment = shipments.find(shipment => shipment.id == shipmentId)
    console.log(shipment)

    return (
      <>
        <div>SingleShipment</div>
        <h2>{shipmentId}</h2>
        <h3>{shipment.customerName}</h3>
        <h3>{shipment.originAdress}</h3>
        <LinkContainer to="/shipments">
          <button>Back to shipments</button>
        </LinkContainer>
      </>
    );
}
export default SingleShipment