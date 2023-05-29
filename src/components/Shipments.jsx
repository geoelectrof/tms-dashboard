import { useSelector } from "react-redux"
import { LinkContainer } from "react-router-bootstrap"
import { Container, Row, Col, Button } from "react-bootstrap"

const Shipments = () => {
    const { shipments } = useSelector(state => state.shipments)
    console.log('shipments', shipments)

    return (
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold">Shipments</h1>
            <p className="text-secondary">7 total shipments</p>
          </Col>
          <Col className=" d-flex align-items-center justify-content-end">
            <select name="status" id="status">
              <option value="Filter by">Filter by</option>
              <option value="In transit">In transit</option>
              <option value="Delivered">Delivered</option>
              <option value="Delayed">Delayed</option>
            </select>
            <Button
              variant="primary text-white fw-bold w-5 rounded-pill"
              className="new-invoice-btn"
            >
              + New Invoice
            </Button>
          </Col>
        </Row>
        {shipments.map((shipment) => {
          // console.log('shipment', shipment)
          return (
            <div key={shipment.id}>
              <h1>{shipment.id}</h1>
              <h2>{shipment.customerName}</h2>
              <LinkContainer to={`/shipments/${shipment.id}`}>
                <button>More info</button>
              </LinkContainer>
            </div>
          );
        })}
      </Container>
    );
}
export default Shipments