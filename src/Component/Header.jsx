import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="bg-black">
      <Container>
        <Navbar.Brand href="/Home">
            <img src="lupin.favicon.png" alt="Logo" width={200} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Movies">Movies</Nav.Link>
            <Nav.Link href="/Booking">Booking</Nav.Link>
            <Nav.Link href="/Services">Services</Nav.Link>
             <Nav.Link href="/Contact">Contact</Nav.Link>
           <button style={{
             backgroundColor: 'goldenrod',
             color: 'white', 
             border: 'none',
              padding: '10px 20px',
               borderRadius: '5px',
               marginLeft: 'auto',
                cursor: 'pointer' }}
                 >
            Book Now
            </button>  

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;