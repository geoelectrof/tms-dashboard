import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Container, Row, Col, Button} from "react-bootstrap"
import ShipmentCard from "./ShipmentCard"
import FiltersOffCanvas from "./FiltersOffCanvas"
import NewShipmentModal from "./NewShipmentModal"
import ConfirmationModal from "./ConfirmationModal"
import { openFiltersOffCanvas } from "../features/filtersOffCanvas/filtersOffCanvasSlice"
import { showNewShipmentModal } from "../features/newShipmentModal/newShipmentModalSlice"
import WarningModal from "./WarningModal"
import { BsFilter } from "react-icons/bs";

const Shipments = () => {
  const { shipments } = useSelector((state) => state.shipments);

  const dispatch = useDispatch()
  
  const [filters, setFilters] = useState({status: [], carrierName:[] })
  const [filteredShipments, setFilteredShipments] = useState([])

  const carriers = [
    ...new Set(shipments.map((shipment) => shipment.carrierName.toUpperCase())),
  ];

  const status = [
    ...new Set(shipments.map(shipment => shipment.status.toUpperCase()))
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
      <Container className="pt-4">
        <Row>
          <Col>
            <h1 className="fw-bold">Shipments</h1>
          </Col>
          <Col className="text-end">
            <Button
              variant="primary text-white fw-bold w-5 rounded-pill mt-2 new-shipment-btn"
              onClick={() => dispatch(showNewShipmentModal())}
            >
              + New Shipment
            </Button>
            <div></div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              variant="primary text-white fw-bold rounded-pill mt-2 mb-2"
              onClick={() => dispatch(openFiltersOffCanvas())}
            >
              <BsFilter />
              Filters
            </Button>
            <Button
              variant="white text-danger remove-filters-btn  mt-2"
              className={!checkFilters(filters) && "d-none"}
              size="sm"
              disabled={!checkFilters(filters)}
              onClick={handleRemoveFilters}
            >
              Remove filters X
            </Button>
          </Col>
        </Row>
        {!checkFilters(filters) ? (
          shipments
            .map((shipment) => {
              return (
                <ShipmentCard
                  {...shipment}
                  key={shipment.id}
                />
              );
            })
            .reverse()
        ) : filteredShipments.length ? (
          filteredShipments.map((shipment) => {
            return (
              <ShipmentCard
                {...shipment}
                key={shipment.id}
              />
            );
          })
        ) : (
          <div className="text-center display-6 mt-5">
            No shipments to display
          </div>
        )}
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
      <NewShipmentModal handleRemoveFilters={handleRemoveFilters} />
      <WarningModal />
      <ConfirmationModal />
    </>
  );
}
export default Shipments