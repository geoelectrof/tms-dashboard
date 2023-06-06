import {Container, Row, Col, Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { calcPerformance } from "../features/transports/shipmentsSlice"

const Performance = () => {

  const dispatch = useDispatch()
  dispatch(calcPerformance())
  const {totalCost, avgCost} = useSelector(state => state.shipments)

  return (
    <Container className="pt-4">
        <Row className="pb-4">
          <Col>
            <h1 className="fw-bold">Performance</h1>
          </Col>
        </Row>
        <Row className="g-3"> 
          <Col sm={6} md={3} >
            <Card className="bg-light">
              <Card.Header>Total Shipments Cost:</Card.Header>
              <Card.Body>{totalCost}€</Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={3} >
            <Card className="bg-light">
              <Card.Header>Average Shipment Cost:</Card.Header>
              <Card.Body>{avgCost}€</Card.Body>
            </Card>
          </Col>
        </Row>
    </Container>
  )
}
export default Performance