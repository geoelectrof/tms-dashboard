import { Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Card, Container, Row, Col } from "react-bootstrap"

const Summary = () => {

  const shipments = useSelector(state => state.shipments.shipments)
  const shipmentsTotalCount = shipments.length
  const shipmentsCountByStatus = shipments.reduce((acc, shipment) => {
    if (shipment.status == "in transit"){
      acc.inTransit = acc.inTransit + 1
      return acc
    } else if (shipment.status == "delivered") {
      acc.delivered = acc.delivered + 1
    } else if (shipment.status == "delayed") {
      acc.delayed++
    }
    return acc
  } , {inTransit: 0, delayed:0, delivered:0})

  return (
    <Container className="pt-4">
      <Row className="pb-4">
        <Col>
          <h1 className="fw-bold">Summary</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="bg-light">
            <Card.Body>
              Total Number of Shipments: {shipmentsTotalCount}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-secondary text-white">
            <Card.Body>
              Number of Shipments in Transit: {shipmentsCountByStatus.inTransit}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-danger text-white">
            <Card.Body>
              Number of Shipments Delayed: {shipmentsCountByStatus.delayed}
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="bg-primary text-white">
            <Card.Body>
              Number of Shipments Delivered: {shipmentsCountByStatus.delivered}
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
      {/* <Button variant="primary text-white fw-light">Hello world</Button>
      <Button variant="secondary text-white fw-bold">Hello world</Button>
      <Button variant="white text-secondary">Hello world</Button>
      <Button variant="danger text-secondary">Hello world</Button>
      <Button variant="warning text-secondary">Hello world</Button>
      <Button variant="info text-white">Hello world</Button>
      <Button variant="dark text-secondary">Hello world</Button>
      <Button variant="light text-secondary">Hello world</Button> */}
    </Container>
  );
}
export default Summary