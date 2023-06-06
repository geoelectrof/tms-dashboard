import { Container, Row, Col, Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap";

const Error = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1 className="mt-5">Page does not exist.</h1>
          <LinkContainer to="/shipments">
            <Button className="fs-5 text-white">
              Back to summary page
            </Button>
          </LinkContainer>
        </Col>
      </Row>
    </Container>
  );
}
export default Error