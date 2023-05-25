import { useSelector } from "react-redux"
import { LinkContainer } from "react-router-bootstrap"

const Shipments = () => {
    const { shipments } = useSelector(state => state.shipments)
    console.log('shipments', shipments)

    return (
        <>
            <div>Shipments</div>
            {shipments.map(shipment => {
                // console.log('shipment', shipment)
                return (
                    <div key={shipment.id}>
                        <h1>{shipment.id}</h1>
                        <h2>{shipment.customerName}</h2>
                        <LinkContainer to={`/shipments/${shipment.id}`}>
                            <button>

                            More info
                            </button>
                        </LinkContainer>
                    </div>
                )
            })}
        </>
    )
}
export default Shipments