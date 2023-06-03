import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { LinkContainer } from "react-router-bootstrap"
import { Container, Row, Col, Button, Dropdown, Form } from "react-bootstrap"
import ShipmentCard from "./ShipmentCard"
import FiltersOffCanvas from "./FiltersOffCanvas"
import NewShipmentModal from "./NewShipmentModal"
import { openFiltersOffCanvas } from "../features/filtersOffCanvas/filtersOffCanvasSlice"
import { showNewShipmentModal } from "../features/newShipmentModal/newShipmentModalSlice"

const Shipments = () => {
  const { shipments } = useSelector((state) => state.shipments);
  console.log('shipments', shipments)

  const dispatch = useDispatch()
  
  const [filters, setFilters] = useState({status: [], carrierName:[] })
  const [filteredShipments, setFilteredShipments] = useState([])

  const carriers = [
    ...new Set(shipments.map((shipment) => shipment.carrierName)),
  ];

  const status = [
    ...new Set(shipments.map(shipment => shipment.status))
  ]

  const handleCarrierClick = (e) => {
    let newCarriersNameArray;
    if (e.currentTarget.checked) {
      newCarriersNameArray = filters.carrierName.concat(e.currentTarget.value)
    } else if (!e.currentTarget.checked) {
      newCarriersNameArray = filters.carrierName.filter(item => item !== e.currentTarget.value)
    }
    setFilters(filters => ({
      ...filters,
      carrierName: newCarriersNameArray
    }))
  };

  const handleStatusClick = (e) => {
    let newStatusArray;
    if (e.currentTarget.checked) {
      newStatusArray = filters.status.concat(e.currentTarget.value)
    } else if (!e.currentTarget.checked) {
      newStatusArray = filters.status.filter(item => item !== e.currentTarget.value)
    }
    setFilters(filters => ({
      ...filters,
      status: newStatusArray
    }))
  };

  const handleRemoveFilters = () => {
    setFilters({ status: [], carrierName: [] });
  }

  // ignores case-sensitive
  const getValue = (value) =>
    typeof value === "string" ? value.toUpperCase() : value;

  /**
   * Filters an array of objects (one level-depth) with multiple criteria.
   *
   * @param  {Array}  array: the array to filter
   * @param  {Object} filters: an object with the filter criteria
   * @return {Array}
   */
  function filterPlainArray(array, filters) {
    const filterKeys = Object.keys(filters);
    return array.filter((item) => {
      // validates all filter criteria
      return filterKeys.every((key) => {
        // ignores an empty filter
        if (!filters[key].length) return true;
        return filters[key].find(
          (filter) => getValue(filter) === getValue(item[key])
        );
      });
    });
  }

  let checkFilters = (filters) => {
    const filterKeys = Object.keys(filters);
    return filterKeys.some((key) => {
      return filters[key].length;
    });
  };

  useEffect(() => {
      setFilteredShipments(filterPlainArray(shipments, filters))  
    }
    ,[filters, shipments])

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold">Shipments</h1>
            <p className="text-secondary">7 total shipments</p>
          </Col>
          <Col>
           
          </Col>
          <Col className="text-end">
            <Button
              variant="primary text-white fw-bold w-5 rounded-pill mt-2"
              onClick={()=>dispatch(showNewShipmentModal())}
              // onClick={()=>dispatch(addShipment(testShipment))}
            >
              + New Shipment
            </Button>
            <div>
              <Button
                variant="primary text-white rounded-pill mt-2 mb-2"
                onClick={() => dispatch(openFiltersOffCanvas())}
              >
                Filter
              </Button>
            </div>
          </Col>
        </Row>
        {!checkFilters(filters)
          ? shipments.map((shipment) => {
              return (
                <ShipmentCard
                  key={shipment.id}
                  id={shipment.id}
                  originAddress={shipment.originAddress}
                  destinationAddress={shipment.destinationAddress}
                  carrierName={shipment.carrierName}
                  status={shipment.status}
                  // handleRemoveShipment={()=>dispatch(removeShipment(shipment.id))}
                />
              );
            }).reverse()
          : filteredShipments.length 
            ? (filteredShipments.map((shipment) => {
              return (
                <ShipmentCard
                  key={shipment.id}
                  id={shipment.id}
                  originAddress={shipment.originAddress}
                  destinationAddress={shipment.destinationAddress}
                  carrierName={shipment.carrierName}
                  status={shipment.status}
                  // handleRemoveShipment={()=>dispatch(removeShipment(shipment.id))}
                />
              );
            }))
            : <div>No items to display</div>
        }      
      </Container>
      <FiltersOffCanvas 
        filters={filters}
        carriers={carriers}
        status={status}
        handleCarrierClick={handleCarrierClick}
        handleStatusClick={handleStatusClick}
        checkFilters={checkFilters}
        handleRemoveFilters={handleRemoveFilters}
      />
      <NewShipmentModal />
    </>
  );
}
export default Shipments