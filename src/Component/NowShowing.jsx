import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCard from './MovieCard';
const NowShowing = () => {


const movies =  [
    {
        id:1,
        title: "Avengers: Endgame",
        rating: "PG-13",
        duration: "2h 15m",
        poster: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg"
    },

   
 {
    id:2,
        title: "Lupin",
        rating: "PG-14",
        duration: "3h 15m",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgNYeNr8syBYuV1CDO8KvQrQNYxNnP9KiMOE30mOo7pA&s=10"
    },


 {
    id:3,
        title: "Solo Leveling",
        rating: "PG-14",
        duration: "1h 15m",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0dYjNM_bajESvGuecmvW8BX5fZwtWdaJKKOsZE3bMVQ&s=10"
    },



     {
    id:4,
        title: "MR ROBOT",
        rating: "PG-12",
        duration: "3h 15m",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThQgAqjfQrslOGFvPaV7UFlonnCHn3aZYiBjjC6r1HUg&s=10"
    },



    {
    id:5,
        title: "Walking Dead",
        rating: "PG-18",
        duration: "4h 15m",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmGZrfbdmbPW8i_zqFLqoJEXq34iCobMRgUTwxAww8Kg&s=10"
    },

    {
    id:6,
        title:"Identity theft",
        rating: "PG-18+",
        duration:"2h 10m",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF4yuU5XbXzQrCbt6sjtkluVnOPFhcq9FKXz3h2mGPlA&s"
    },



]

  return (
      <Container>

<div>
    <p>Experience the magic </p>
    <h2>Now Showing</h2>
</div>


      <Row>
    {movies.map((movie)=>(
        <Col key={movie.id}>
            <MovieCard movie={movie}/>
        </Col>

        
    ))}
      


    
      </Row>




    </Container>
  )
}

export default NowShowing