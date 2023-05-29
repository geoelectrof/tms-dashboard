import { LinkContainer } from "react-router-bootstrap";

const ShipmentCard = ( {id, originAddress, destinationAddress, status, carrierName}) => {
  return (
    <>
      {/* <div>ShipmentCard</div> */}
      <div>
        <h1>{id}</h1>
        <h2>{originAddress}</h2>
        <h2>{destinationAddress}</h2>
        <h2>{status}</h2>
        <h2>{carrierName}</h2>
        <LinkContainer to={`/shipments/${id}`}>
          <button>More info</button>
        </LinkContainer>
      </div>
    </>
  );
}
export default ShipmentCard