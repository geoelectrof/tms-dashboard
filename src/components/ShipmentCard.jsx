import { LinkContainer } from "react-router-bootstrap";
import { Row, Col } from "react-bootstrap";

const ShipmentCard = ( {id, originAddress, destinationAddress, status, carrierName}) => {
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
        </Row>
      </LinkContainer>
    </>
  );
}
export default ShipmentCard