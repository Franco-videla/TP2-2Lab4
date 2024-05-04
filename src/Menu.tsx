import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Nav } from 'react-bootstrap';

const Menu = () => {
  return (
    <Navbar className='mb-4' bg="secondary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Music House</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/instrumentos">Instrumentos</Nav.Link>
            <Nav.Link href="/DondeEstamos">Donde Estamos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
};

export default Menu;
