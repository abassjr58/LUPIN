import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar  sticky="top" expand="lg" className="bg-black"  >
      <Container>
        <Navbar.Brand href="/">
            <img src="lupin.favicon.png" alt="Logo" width={200} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/booking">Booking</Nav.Link>
            <Nav.Link href="/service">Service</Nav.Link>
             <Nav.Link href="/contact">Contact</Nav.Link>
              <NavDropdown title="Movies" id="basic-nav-dropdown">
              <NavDropdown.Item href="/nowshowing">Now showing</NavDropdown.Item>
              <NavDropdown.Item href="/comingsoon">
                Coming soon
              </NavDropdown.Item>
              
            </NavDropdown>
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