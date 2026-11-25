import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const OurStory = () => {
  return (
    <div>

        <Container fluid="md">
      <Row className='p-5 align-items-center bg-white'>
        <Col> 
        <img src="/images 4.jpg" alt="" />
        </Col>
        <Col>

        <h2>Our Story</h2>
        <p>
            Lupin Cinema was created from a passion for movies, storytelling, and the magic of entertainment. We believe that every movie has a story to tell, every scene creates an emotion, and every cinematic experience has the power to bring people together.
    
    Our journey began with a simple idea: to create a modern platform where movie lovers can easily discover their favourite films, explore exciting new releases, watch trailers, and enjoy convenient movie booking services.
    
    As our vision continues to grow, we remain focused on making entertainment more accessible, enjoyable, and exciting. From action and adventure to romance, comedy, thriller, and drama, we want everyone to find something they love.
    
    Today, Lupin Cinema represents more than just movies. It represents creativity, imagination, connection, and unforgettable experiences. We are committed to building a platform that celebrates the world of cinema and makes every visit special.
        </p>
        </Col>
    
      </Row>
    </Container>
    </div>
  )
}

export default OurStory