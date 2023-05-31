import { Button } from "react-bootstrap"
import { useSelector } from "react-redux"

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
  console.log("inTransit", shipmentsCountByStatus.inTransit )
  console.log("delivered", shipmentsCountByStatus.delivered )

  return (
    <div>
        Summary
        <div>Total Number of Shipments: {shipmentsTotalCount}</div>
        <div>Number of Shipments in Transit: {shipmentsCountByStatus.inTransit}</div>
        <div>Number of Shipments in Delayed: {shipmentsCountByStatus.delayed}</div>
        <div>Number of Shipments in Delivered: {shipmentsCountByStatus.delivered}</div>
        <Button variant="primary text-white fw-light">Hello world</Button>
        <Button variant="secondary text-white fw-bold">Hello world</Button>
        <Button variant="white text-secondary">Hello world</Button>
        <Button variant="danger text-secondary">Hello world</Button>
        <Button variant="warning text-secondary">Hello world</Button>
        <Button variant="info text-white">Hello world</Button>
        <Button variant="dark text-secondary">Hello world</Button>
        <Button variant="light text-secondary">Hello world</Button>
    </div>
  )
}
export default Summary