import { LinkContainer } from "react-router-bootstrap";
import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeShipment } from "../features/transports/shipmentsSlice";

const ShipmentCard = ( {id, originAddress, destinationAddress, status, carrierName, handleRemoveShipment}) => {
 
  const dispatch = useDispatch()
  
  return (
    <>
      {/* <div>ShipmentCard</div> */}
      <LinkContainer to={`/shipments/${id}`}>
        <Row className="">
          <Col sm={1}>
            <p>{id}</p>
          </Col>
          <Col>
            <p>
              <span className="text-muted fs-6">From</span> <span className="fs-5">{originAddress}</span>
            </p>
          </Col>
          <Col>
            <p>{destinationAddress}</p>
          </Col>
          <Col sm={1}>
            <p>{carrierName}</p>
          </Col>
          <Col>
            <p className="text-end">{status}</p>
          </Col>
          <Col>
          </Col>
        </Row>
      </LinkContainer>
            <button
              onClick={()=>dispatch(removeShipment(id))}
            >
              delete
            </button>
    </>
  );
}
export default ShipmentCard