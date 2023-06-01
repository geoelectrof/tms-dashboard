import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { LinkContainer } from "react-router-bootstrap"
import { Container, Row, Col, Button, Dropdown, Form } from "react-bootstrap"
import ShipmentCard from "./ShipmentCard"
import FiltersOffCanvas from "./FiltersOffCanvas"
import { openFiltersOffCanvas } from "../features/filtersOffCanvas/filtersOffCanvasSlice"

const Shipments = () => {
  const { shipments } = useSelector((state) => state.shipments);

  const dispatch = useDispatch()
  
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedCarrier, setSelectedCarrier] = useState("");
  const [filters, setFilters] = useState({status: [], carrierName:[] })
  const [filtersActive, setFiltersActive] = useState(false)
  const [filteredShipments, setFilteredShipments] = useState([])


  const carriers = [
    ...new Set(shipments.map((shipment) => shipment.carrierName)),
  ];
  // console.log(carriers);

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
    setFiltersActive(checkFilters(filters))
    filtersActive && (
      setFilteredShipments(filterPlainArray(shipments, filters))
    )
  }
  ,[filters])

  console.log("filters", filters)


  // const handleSelectStatus = (e) => {
  //   setSelectedStatus(e.target.value);
  // };

  // const handleSelectCarrier = (e) => {
  //   console.log(e);
  //   console.log(e.target.value);
  //   console.log(e.target.checked);
  //   // setSelectedCarrier(e);
  // };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold">Shipments</h1>
            <p className="text-secondary">7 total shipments</p>
          </Col>
          <Col>
            {/* <Dropdown>
            <Dropdown.Toggle variant="primary text-white" id="dropdown-basic">
              {
                <span className="fw-bold">
                  {selectedCarrier || <span>Filter by Status: </span>}{" "}
                </span>
              }
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>

              <Form.Check
                type="checkbox"
                id="m&m"
                label="m&m"
                value="m&m"
                onChange={handleSelectCarrier}
                />
                </Dropdown.Item>
              <Dropdown.Item eventKey="DHL">DHL</Dropdown.Item>
              <Dropdown.Item eventKey="ACS">ACS</Dropdown.Item>
              <Dropdown.Item eventKey="UPS">UPS</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}

            {/* <Dropdown onSelect={handleSelectCarrier}>
            <Dropdown.Toggle variant="primary text-white" id="dropdown-basic">
              {
                <span className="fw-bold">
                  {selectedCarrier || <span>Filter by Status: </span>}{" "}
                </span>
              }
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="DHL">DHL</Dropdown.Item>
              <Dropdown.Item eventKey="ACS">ACS</Dropdown.Item>
              <Dropdown.Item eventKey="UPS">UPS</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
          </Col>
          <Col className="text-end">
            {/* <label>
            Filter by status:
            <select onChange={handleSelectStatus} name="status" id="status" className="selectpicker" title="choose one" >
              <option value="all">All shipments</option>
              <option value="in transit">In transit</option>
              <option value="delayed">Delayed</option>
              <option value="delivered">Delivered</option>
            </select>
          </label> */}
            <Button
              variant="primary text-white fw-bold w-5 rounded-pill mt-2"
              className="new-invoice-btn"
            >
              + New Invoice
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
        {!filtersActive
          ? shipments.map((shipment) => {
              return (
                <ShipmentCard
                  key={shipment.id}
                  // {...shipment}
                  id={shipment.id}
                  originAddress={shipment.originAddress}
                  destinationAddress={shipment.destinationAddress}
                  carrierName={shipment.carrierName}
                  status={shipment.status}
                />
              );
            })
          : filteredShipments.map((shipment) => {
              return (
                <ShipmentCard
                  key={shipment.id}
                  // {...shipment}
                  id={shipment.id}
                  originAddress={shipment.originAddress}
                  destinationAddress={shipment.destinationAddress}
                  carrierName={shipment.carrierName}
                  status={shipment.status}
                />
              );
            })}
        {/* {selectedStatus == "all"
        ? shipments.map((shipment) => {
            return (
              <ShipmentCard
                key={shipment.id}
                // {...shipment}
                id={shipment.id}
                originAddress={shipment.originAddress}
                destinationAddress={shipment.destinationAddress}
                carrierName={shipment.carrierName}
                status={shipment.status}
              />
            );
          })
        : shipments
            .filter((shipment) => shipment.status === selectedStatus)
            .map((shipment) => {
              return (
                <ShipmentCard
                  key={shipment.id}
                  // {...shipment}
                  id={shipment.id}
                  originAddress={shipment.originAddress}
                  destinationAddress={shipment.destinationAddress}
                  carrierName={shipment.carrierName}
                  status={shipment.status}
                />
              );
            })} */}
      </Container>
      <FiltersOffCanvas />
    </>
  );
}
export default Shipments