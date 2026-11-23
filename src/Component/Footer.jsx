import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button,Nav} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const Footer = () => {
  return (
    <footer className="bg-black text-white pt-5">
 <Container>
      <Row>
        <Row/>

        <Col>
         <img src="lupin.favicon.png" alt="Logo"  height={100} width={180}  />
        
        <p>Your ultimate destination for the best movies and shows</p>
        </Col>
        {/*2nd column*/}
<Col>
        <h5>Quick Links</h5>
        <Nav> 
          <Nav.Link 
          href="/Home">Home
          </Nav.Link>
          <Nav.Link
           href="/Movies">Movies
           </Nav.Link>
          <Nav.Link
           href="/TV Shows">TV Shows
           </Nav.Link>
          <Nav.Link 
          href="/About Us">About Us
          </Nav.Link>
          <Nav.Link 
          href="/Contact">Contact
          </Nav.Link>
        </Nav>
        </Col>

          {/*3rd column*/}
        <Col>
        <h5>Support</h5>
        <Nav> 
          <Nav.Link 
          href="/Help Center">Help Center
          </Nav.Link>
          <Nav.Link
           href="/Terms of Service">Terms of Service
           </Nav.Link>
          <Nav.Link
           href="/FAQs"> FAQs
           </Nav.Link>
          <Nav.Link 
          href="/Privacy Policy">Privacy Policy
          </Nav.Link>
          <Nav.Link 
          href="/Report a Problem">Report of a Problem
          </Nav.Link>
        </Nav>
        </Col>
       
        {/*4th column*/}
         <Col>
        <h5>Newsletter</h5>
        <p>   Subscribe to our newsletter to get the latest updates on movies and shows from LUPIN CINEMA.</p>
        
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label></Form.Label>
         <Button type='button' style={{ backgroundColor: '#0d6efd', borderColor: '#0d6efd' }}>Subscribe</Button>
      </Form.Group>
    
    </Form>
  
        </Col>

        <Col>
        <h5>Contact Us</h5>
        <Nav> 
          <Nav.Link 
          href="https://www.facebook.com/filmoneng/" target=''>Facebook
          </Nav.Link>
          <Nav.Link
           href="https://www.instagram.com/filmone_studios/" target=''>Instagram
           </Nav.Link>
          <Nav.Link
           href="https://x.com/FilmOneng" target=''>Twitter
           </Nav.Link>
          <Nav.Link 
          href="https://www.youtube.com/c/FilmOneNG" target=''>Youtube
          </Nav.Link>
        </Nav>
        </Col>


      </Row>

    <Row className='border-top border-secondary mt-3 pt-3 py-4'>
      <Col>
      <h5>Stay Updated</h5>
      <p>Check our website to stay informed about the latest news and updates.</p>

      
      </Col>

      <Col>
       <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="www.lupincinema.com" />
      </Form.Group>
     <Button type='button' style={{ backgroundColor: '#0d6efd', borderColor: '#0d6efd' }}>Subscribe</Button>
    </Form>
  
      
      </Col>


      
    </Row>

    <Row className='border-top border-secondary mt-3 pt-3 py-4'>
      <Col>&copy; 2026 LUPIN CINEMA. All rights reserved.</Col>
    </Row>
    </Container>
    </footer>
  )
}

export default Footer