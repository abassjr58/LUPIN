import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const WhoWeAre = () => {
  return (
    <div>

        <Container fluid="md">
      <Row className='p-5 align-items-center bg-white'>
        <Col> 
        
       <h2> Who We Are</h2>
<p>
    Lupin Cinema is a modern digital cinema platform designed for people who love movies and entertainment. We combine creativity, technology, and convenience to provide an enjoyable experience for our visitors.
    
    We believe that movies are more than just pictures on a screen. They tell stories, inspire emotions, create memories, and bring people together.
    
    Through our platform, we aim to help movie lovers find their next favourite film while enjoying a smooth and user-friendly browsing experience.
</p>
        </Col>
        <Col> <img src="images 5.jpg" alt="" /></Col>
      </Row>
    </Container>
    </div>
  )
}

export default WhoWeAre