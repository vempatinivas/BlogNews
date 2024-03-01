import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';



//import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarLinks({setCategory}) {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark">
      <Container>
        <Navbar.Brand href="/" className=''> NEWS <Badge bg="danger">Blog</Badge> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link onClick={()=> setCategory("business")}>Business</Nav.Link>
            <Nav.Link onClick={()=> setCategory("entertainment")}>Entertainment</Nav.Link>
            <Nav.Link onClick={()=> setCategory("general")}>General</Nav.Link>
            <Nav.Link onClick={()=> setCategory("health")}>Health</Nav.Link>
            <Nav.Link onClick={()=> setCategory("sports")}>Sports</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
    </>
  );
}

export default NavbarLinks;