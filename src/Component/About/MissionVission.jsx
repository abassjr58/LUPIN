import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const MissionVission = () => {
  return (
    <div>

        <Container fluid="md">
      <Row className='p-5 align-items-center bg-body' >
        <Col>
        
       <h2> Our Mission</h2>
<p>
    Our mission is to provide an enjoyable and convenient movie entertainment experience by making it easier for users to discover movies, explore upcoming releases, and book their favourite films.
    
    We are committed to delivering a platform that values entertainment, accessibility, creativity, and customer satisfaction.
</p>
        </Col>



        <Col>
        
        
        
       <h2> Our Vision</h2>
<p>
    Our vision is to become a recognised and trusted digital cinema destination where movie lovers can explore entertainment, discover new stories, and enjoy convenient movie services.
    
    We aim to continuously improve our platform through modern technology, creative ideas, and a commitment to quality.
            
</p>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default MissionVission