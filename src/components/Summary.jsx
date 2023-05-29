import { Button } from "react-bootstrap"

const Summary = () => {
  return (
    <div>
        Summary
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