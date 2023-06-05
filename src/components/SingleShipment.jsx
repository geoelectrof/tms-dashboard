import { useParams } from "react-router"
import { LinkContainer } from "react-router-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { Button } from "react-bootstrap"
import { removeShipment, setShipmentStatusDelivered } from "../features/transports/shipmentsSlice"
import { openConfirmationModal } from "../features/confirmationModal/confirmationModalSlice"
import EditShipmentModal from "./EditShipmentModal"
import { showEditShipmentModal } from "../features/editShipmentModal/editShipmentModalSlice"
import ConfirmationModal from "./ConfirmationModal"
import { Navigate } from "react-router-dom"
import { showWarningModal } from "../features/warningModal/warningModalSlice"
import WarningModal from "./WarningModal"

const SingleShipment = () => {
    const { shipmentId } = useParams()
    const {shipments} = useSelector(state => state.shipments)
    const dispatch = useDispatch()
    const shipment = shipments.find(shipment => shipment.id == shipmentId)

    if (!shipment) {
      return <Navigate to="Error"/>
    }

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
        {/* <LinkContainer to="/shipments"> */}
          <Button
            variant="danger text-white"
            onClick={() => {
              // dispatch(removeShipment(shipment.id))
              // dispatch(openConfirmationModal("deleted"))
              dispatch(showWarningModal({warningMessage: "Delete shipment?", id: shipment.id}))
            }}
          >
            Delete shipment
          </Button>
        {/* </LinkContainer> */}
        <Button
          variant="secondary text-white"
          onClick={() => {
            dispatch(showEditShipmentModal())
          }}
        >
          Edit shipment
        </Button>
        {
          shipment.status !== "delivered" 
          && 
          <Button
            onClick={()=>dispatch(setShipmentStatusDelivered(shipmentId))}
          >Set status to delivered</Button>
        }
        <div>
          <LinkContainer to="/shipments">
            <Button>Back to shipments</Button>
          </LinkContainer>
        </div>
        <EditShipmentModal 
          shipmentId={shipmentId}
        />
        <ConfirmationModal />
        <WarningModal />
      </>
    );
}
export default SingleShipment