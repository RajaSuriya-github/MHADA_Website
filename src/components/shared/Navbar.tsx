import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoSearch } from "react-icons/io5";
import logo from '../../assets/MhadaLogo.svg';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className='custom-px'>
        <Navbar.Brand href="#"><img src={logo} alt="Logo" className="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="nav-icon me-auto my-2 my-lg-0"
            // style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <Nav.Link href="#action3">Boards</Nav.Link>
            <Nav.Link href="#action4">Lottery Schemes</Nav.Link>
            <Nav.Link href="#action5">Application</Nav.Link>
            <Nav.Link href="#action6">Results</Nav.Link>
            <Nav.Link href="#action7">News</Nav.Link>
          </Nav>
          <Form className="d-flex align-items-center gap-4">
          <IoSearch />
            <button className='lgn-btn'>Login</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;