import { useParams } from "react-router"
import { LinkContainer } from "react-router-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { Button, Col, Row, Container, Badge } from "react-bootstrap";
import { removeShipment, setShipmentStatusDelivered } from "../features/transports/shipmentsSlice"
import { openConfirmationModal } from "../features/confirmationModal/confirmationModalSlice"
import EditShipmentModal from "./EditShipmentModal"
import { showEditShipmentModal } from "../features/editShipmentModal/editShipmentModalSlice"
import ConfirmationModal from "./ConfirmationModal"
import { Navigate } from "react-router-dom"
import { showWarningModal } from "../features/warningModal/warningModalSlice"
import WarningModal from "./WarningModal"
import {
  FaArrowLeft,
  FaPencilAlt,
  FaRegTrashAlt,
  FaCalendarCheck,
} from "react-icons/fa";


const SingleShipment = () => {
    const { shipmentId } = useParams()
    const {shipments} = useSelector(state => state.shipments)
    const dispatch = useDispatch()
    const shipment = shipments.find(shipment => shipment.id == shipmentId)

    if (!shipment) {
      return <Navigate to="Error"/>
    }

    return (
      <Container className="my-5">
        <Row>
          <Col>
            <LinkContainer to="/shipments">
              <button className="text-secondary fs-5 back-btn">
                <FaArrowLeft /> Back to shipments
              </button>
            </LinkContainer>
          </Col>
          <Col className="text-end">
            <Button
              variant="secondary text-white rounded-pill"
              onClick={() => {
                dispatch(showEditShipmentModal());
              }}
            >
              <FaPencilAlt /> Edit shipment
            </Button>
          </Col>
        </Row>
        <Container className="bg-light my-4 p-5">
          <Row className="py-2">
            <span className="text-muted fw-bold">Id:</span>
            <h3 className="text-primary"># {shipmentId}</h3>
          </Row>
          <Row className="py-2">
            <span className="text-muted fw-bold">Customer Name:</span>
            <h3 className="text-primary">{shipment.customerName}</h3>
          </Row>
          <Row className="py-2">
            <span className="text-muted fw-bold">Shipping Address:</span>
            <h3 className="text-primary">{shipment.originAddress}</h3>
          </Row>
          <Row className="py-2">
            <span className="text-muted fw-bold">Destination Address:</span>
            <h3 className="text-primary">{shipment.destinationAddress}</h3>
          </Row>
          <Row className="py-2">
            <span className="text-muted fw-bold">Carrier:</span>
            <h3 className="text-primary">{shipment.carrierName}</h3>
          </Row>
          <Row className="py-2">
            <span className="text-muted fw-bold">Shipment Cost:</span>
            <h3 className="text-primary">{shipment.cost}€</h3>
          </Row>
          <Row className="py-2">
            <span className="text-muted fw-bold">Estimated delivery date:</span>
            <h3 className="text-primary">
              {" "}
              {new Date(shipment.deliveryDate).toLocaleDateString("el-GR")}
            </h3>
          </Row>
          <Row className="py-2">
            <span className="text-muted fw-bold">Shipment status:</span>
            <h3 className="text-primary">
              <Badge
                className="p-1"
                bg={
                  shipment.status == "in transit"
                    ? "secondary"
                    : shipment.status == "delivered"
                    ? "primary"
                    : "danger"
                }
              >
                {shipment.status.toUpperCase()}
              </Badge>
            </h3>
          </Row>
        </Container>
        <Row>
          <Col className="text-end">
            {shipment.status !== "delivered" && (
              <Button
                onClick={() => dispatch(setShipmentStatusDelivered(shipmentId))}
                variant="primary text-white rounded-pill"
              >
                <FaCalendarCheck /> Set status to delivered
              </Button>
            )}
            <Button
              variant="danger text-white mx-4 rounded-pill"
              onClick={() => {
                // dispatch(removeShipment(shipment.id))
                // dispatch(openConfirmationModal("deleted"))
                dispatch(
                  showWarningModal({
                    warningMessage: "Delete shipment?",
                    id: shipment.id,
                  })
                );
              }}
            >
              <FaRegTrashAlt /> Delete shipment
            </Button>
          </Col>
        </Row>
        <EditShipmentModal shipmentId={shipmentId} />
        <ConfirmationModal />
        <WarningModal />
      </Container>
    );
}
export default SingleShipment