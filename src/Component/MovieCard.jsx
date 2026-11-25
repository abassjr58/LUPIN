import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const MovieCard = ({movie}) => {
  return (
    <Card className='movie-card position-relative border-0' >
        {/*Movie Poster*/}
      <Card.Img variant="top" src={movie.poster} alt={movie.title}/>
      {/*Top-Right Age Ratings Badge*/}
     <Badge bg="dark" className='movie-rating position-absolute top-0 end-0 m-2 p-3'>{movie.rating}</Badge>

     {/* overlay content */}
     <div className="movie-overlay ">

        <div className='text-center'>
        <Button variant='danger' size='sm' className='trailer' >
            <span>▶</span> Play Trailer 
        </Button>
        </div>

        <div className='bg-black text-white h-100 mt-2 pt-3'>
        
        {/*Movie Title*/}
        <Card.Title>
            {movie.title}
        </Card.Title>

        {/* Duration and Rating now */}
        <div>
            <span>🕒 {movie.duration} |</span>
            <span> {movie.rating}</span>
        </div>


        {/* Buy ticket */}
   <div className='border-top border-secondary mt-3 py-1'>
     <button className='buy'>Buy Ticket </button>
     </div>
    {/*More info */}
    <a href=""> More Info →</a>
    
    </div>
    </div>
    </Card>
  )
}

export default MovieCard