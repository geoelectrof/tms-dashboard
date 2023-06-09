import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";


const Navigation = () => {
  return (
    <nav>
      <Navbar collapseOnSelect expand="md" bg="light" className="bg-light">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="#home">
              Transport logo
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer
                to="/"
                activeClassName="text-primary"
                className="nav-item nav-link"
              >
                <Nav.Link>Summary</Nav.Link>
              </LinkContainer>

              <LinkContainer
                to="/shipments"
                activeClassName="text-primary"
                className="nav-item nav-link"
              >
                <Nav.Link>Shipments</Nav.Link>
              </LinkContainer>

              <LinkContainer
                to="/performance"
                activeClassName="text-primary"
                className="nav-item nav-link"
              >
                <Nav.Link>Performance</Nav.Link>
              </LinkContainer>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}
export default Navigation