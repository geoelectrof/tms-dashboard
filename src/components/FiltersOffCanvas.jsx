import { Offcanvas, Form, Button } from "react-bootstrap"
import { closeFiltersOffCanvas } from "../features/filtersOffCanvas/filtersOffCanvasSlice"
import { useDispatch, useSelector } from "react-redux"


const FiltersOffCanvas = ({ filters, carriers, status, handleCarrierClick, handleStatusClick }) => {

    const dispatch = useDispatch()
    const show = useSelector(state => state.filtersOffCanvas.open)
    console.log(filters.carrierName.includes("ACS"))

    return (
      <Offcanvas
        show={show}
        onHide={() => dispatch(closeFiltersOffCanvas())}
        placement="start"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            {/* <Form.Check
                type="checkbox"
                id="ACS"
                label="ACS"
                value="ACS"
                onChange={handleCarrierClick}
            /> */}

            <h6>Carriers</h6>
            {carriers.map(item => {
                const checked = filters.carrierName.includes(item);
                return (
                    <Form.Check 
                        key={item}
                        type="checkbox"
                        id={item}
                        label={item}
                        value={item}
                        checked={checked}
                        onChange={handleCarrierClick}
                    />
                )
            })}
            <h6 className="pt-4">Status</h6>
            {status.map(item => {
                const checked = filters.status.includes(item)
                return (
                  <Form.Check
                    key={item}
                    type="checkbox"
                    id={item}
                    label={item}
                    value={item}
                    checked={checked}
                    onChange={handleStatusClick}
                  />
                );
            })}
            <Button 
                variant="danger text-white" 
                className="mt-4"
                size="sm"
            >
                Remove filters
            </Button>
        </Offcanvas.Body>
      </Offcanvas>
    );
}
export default FiltersOffCanvas