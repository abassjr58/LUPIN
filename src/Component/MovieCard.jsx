import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const MovieCard = ({movie}) => {
  return (
    <Card style={{ width: '18rem' }}>
        {/*Movie Poster*/}
      <Card.Img variant="top" src={movie.poster} />
      {/*Top-Right Age Ratings Badge*/}
     <Badge bg="dark">New</Badge>

     {/* overlay content */}
     <div className=''>


        <Button>
            <span>▶</span> Play Trailer
        </Button>
        {/*Movie Title*/}
        <Card.Title>
            {movie.title}
        </Card.Title>

        {/* Duration and Rating now */}
        <div>
            <span>🕒 {movie.duration}</span>
            <span>⭐ {movie.rating}</span>
        </div>


        {/* Buy ticket */}
    <button>Buy Ticket</button>
    {/*More info */}
    <a href=""> More Info →</a>
    </div>
    </Card>
  )
}

export default MovieCard