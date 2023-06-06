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
      <Row className="g-3"> 
        <Col sm={6} md={3} >
          <Card className="bg-light">
            <Card.Header>Total Shipments:</Card.Header>
            <Card.Body>{shipmentsTotalCount} Shipments</Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={3}>
          <Card className="bg-secondary text-white">
            <Card.Header>In Transit:</Card.Header>
            <Card.Body>{shipmentsCountByStatus.inTransit} Shipments</Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={3}>
          <Card className="bg-danger text-white">
            <Card.Header>Delayed:</Card.Header>
            <Card.Body>{shipmentsCountByStatus.delayed} Shipments</Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={3}>
          <Card className="bg-primary text-white">
            <Card.Header>Delivered:</Card.Header>
            <Card.Body>{shipmentsCountByStatus.delivered} Shipments</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default Summary