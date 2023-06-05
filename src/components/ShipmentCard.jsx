import { LinkContainer } from "react-router-bootstrap";
import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeShipment } from "../features/transports/shipmentsSlice";
import { openConfirmationModal } from "../features/confirmationModal/confirmationModalSlice";
import { showWarningModal } from "../features/warningModal/warningModalSlice";
import { FaArrowRight } from "react-icons/fa";

const ShipmentCard = ( {id, originAddress, destinationAddress, status, carrierName, handleRemoveShipment}) => {
 
  const dispatch = useDispatch()
  
  return (
    <>
      <LinkContainer to={`/shipments/${id}`}>
        <Row className="shipment-card bg-light rounded-1 p-3 text-dark my-3 align-items-center g-2">
          <Col sm={12} md={1}>
            <span className="fs-5"># {id}</span>
          </Col>
          <Col sm={12} md={3}>

              <span className="text-muted fs-6">From</span>{" "}
              <span className="fs-6 text-primary fw-bold">{originAddress}</span>

          </Col>
          <Col sm={12} md={3}>
            <span className="text-muted fs-6">To</span>{" "}
            <span className="fs-6 text-primary fw-bold">
              {destinationAddress}
            </span>
          </Col>
          <Col sm={12} md={2}>
            <span className="fs-6 text-primary fw-bold">{carrierName}</span>
          </Col>
          <Col sm={12} md={2}>
            <span className="text-end">{status}</span>
          </Col>
          <Col className="text-end" sm={12} md={1}>
            <FaArrowRight className="align-end" />
          </Col>
        </Row>
      </LinkContainer>
      {/* <button
        onClick={() => {
          dispatch(
            showWarningModal({ warningMessage: "Delete shipment?", id: id })
          );
        }}
      >
        delete
      </button> */}
    </>
  );
}
export default ShipmentCard