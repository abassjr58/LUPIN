import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCard from '../MovieCard';
const NowShowing = () => {


const movies =  [
    {
        id:1,
        title: "AVENGERS:ENDGAME",
        rating: "PG-13",
        duration: "2h 15m",
        poster: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg"
    },

   
 {
    id:2,
        title: "LUPIN",
        rating: "PG-14",
        duration: "3h 15m",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgNYeNr8syBYuV1CDO8KvQrQNYxNnP9KiMOE30mOo7pA&s=10"
    },


 {
    id:3,
        title: "SOLO LEVELING",
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
        title: "WALKING DEAD",
        rating: "PG-18",
        duration: "4h 15m",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmGZrfbdmbPW8i_zqFLqoJEXq34iCobMRgUTwxAww8Kg&s=10"
    },

    {
    id:6,
        title:"The TERMINAL LIST",
        rating: "PG-18+",
        duration:"2h 10m",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF4yuU5XbXzQrCbt6sjtkluVnOPFhcq9FKXz3h2mGPlA&s"
    },
    {
    id:7,
        title:"JACKAL",
        rating:"PG-16+",
        duration:"3h 30m",
        poster:"https://imgs.search.brave.com/r1PEa3AyAW40vgc88CHamQNqeO4iP4-R26Ro1Vs4bWA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS50aGVtb3ZpZWRi/Lm9yZy90L3AvdzIy/MF9hbmRfaDMzMF9m/YWNlL2FtbHNSRVhm/MGF5a2dRNU5aZk9N/eHpBd21uVC5qcGc"
        },


 {
    id:8,
        title:"RIDE OR DIE",
        rating:"PG-18+",
        duration:"1h 10m",
        poster:"https://imgs.search.brave.com/kGj37bFI7MgHLXNf8Mq0YqAAp4UwH_5UusSyL0gPFmA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS50aGVtb3ZpZWRi/Lm9yZy90L3AvdzEz/MF9hbmRfaDE5NV9m/YWNlL3VXcUVudnB3/YTJVMjhRaGVNZFVk/RWNyNFUwTS5qcGc"
        },
    {
    id:9,
        title:"RAMPAGE",
        rating:"PG-13+",
        duration:"1h 15m",
        poster:"https://imgs.search.brave.com/IvjOr4syVtWTisENo62g_RgoJN9v7egihhLhAICoeLs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS50aGVtb3ZpZWRi/Lm9yZy90L3AvdzIy/MF9hbmRfaDMzMF9m/YWNlL3UyRUtyQ2hN/bFB3aEtHSmVQNm5Q/bk56OFA5Ri5qcGc"
        },
  {      
  id:10,
        title:"WEDNESDAY",
        rating:"PG-18",
        duration:"2h 15m",
        poster:"https://imgs.search.brave.com/Luxta-_g-YZDCJqlQD5BmlNdG8ttAFO0dvtuIyRhLvw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2RjL2Nm/LzI4L2RjY2YyODVk/ZDIzZjViNGY5ZGVk/YTVlMDZhMzAxNmNh/LmpwZw"
        },

        {      
  id:11,
        title:"VISION QUEST",
        rating:"PG-10",
        duration:"2h 15m",
        poster:"https://imgs.search.brave.com/hsAIoLTh8qjoyz8a7dA_yOpA6p53eIhvbiEPntgYwCM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL1daSUFB/ZVN3SU1ScWhCWVcv/cy1sNTAwLmpwZw"
        },


 {      
  id:12,
        title:"BEAST",
        rating:"PG-12",
        duration:"1h 30m",
        poster:"https://imgs.search.brave.com/6eCHR0q3gEsCtQQR8HY2HMO3HQNzQ7D1Ame9eZZ5hUc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS50aGVtb3ZpZWRi/Lm9yZy90L3AvdzIy/MF9hbmRfaDMzMF9m/YWNlLzNtajVmUllK/UVNBdUg4TmJ1bE5R/OWJmZXZWNi5qcGc"
        },



{      
  id:14,
        title:"TOM AND JERRY",
        rating:"PG-2+",
        duration:" 45m",
        poster:"https://imgs.search.brave.com/RgpxBO7UtPXM4_2FFXhdNNJSMK9VcoyQzdfC-8g4PbI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oNy5h/bGFteS5jb20vY29t/cC9FNU1XNzMvdG9t/LWFuZC1qZXJyeS1p/bi10aGUtaG9sbHl3/b29kLWJvd2wtdXMt/cG9zdGVyLWFydC10/b20tYW5kLWplcnJ5/LTE5NTAtRTVNVzcz/LmpwZw"
        },

{      
  id:15,
        title:"JUMANJI",
        rating:"PG-13",
        duration:"1h 30m",
        poster:"https://imgs.search.brave.com/QExlFgzpaKp_SfsOE-BUhpmsRlzVnqEhxnAluV_7t10/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFXdjRaTlhXUUwu/anBn"
        },


{      
  id:16,
        title:"SPY X FAMILY",
        rating:"PG-16",
        duration:"2h 30m",
        poster:"https://imgs.search.brave.com/yrP7Zge2rHqFuaCVTSadKehdbhdUDPV4Yemu9hU_dgA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMjUv/MDMvc3B5LXgtZmFt/aWx5LXNlYXNvbi0z/LW9mZmljaWFsLXBv/c3Rlci1mZWF0dXJp/bmctbG9pZC15b3It/YW55YS1hbmQtYm9u/ZC5qcGVnP3E9NDkm/Zml0PWNvbnRhaW4m/dz0xNDQ4Jmg9MjA0/OCZkcHI9Mg"
        
        },


]

  return (
    <section className='now-showing bg-dark text-white py-5 px-0'>
      <Container fluid>

        <div>
          <p>Experience the magic </p>
          <h2 className='me'>Now Showing</h2>
        </div>

        <Row className=''>
          {movies.map((movie) => (
            <Col lg={2} key={movie.id}>
              <MovieCard movie={movie}/>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  )
}

export default NowShowing