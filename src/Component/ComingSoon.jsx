import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieCard from "./MovieCard";
const ComingSoon = () => {
  const movies = [
    {
      id: 1,
      title: "KILL",
      rating: "PG-18",
      duration: "2h 15m",
      poster:
        "https://imgs.search.brave.com/7BrAn9Y801QiWnZDLziQdsfX0ayXHERc2-wo7TSVPuE/rs:fit:500:0:1:0/g:ce/aHR0cDovL3d3dy5p/bXBhd2FyZHMuY29t/L2ludGwvaW5kaWEv/MjAyNC9wb3N0ZXJz/L2tpbGwuanBn",
    },

    {
      id: 2,
      title: "TO KILL A MONKEY",
      rating: "PG-18",
      duration: "3h 15m",
      poster:
        "https://imgs.search.brave.com/WlrMv6obfk8kxAsMcrVqq8nYZrQGY78LmA6jCtiTSbY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ub2xs/eXdpcmUuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzA4/L1RvLUtpbGwtYS1t/b25rZXktMjAyMy1O/b2xseXdpcmUuanBl/Zz92ZXI9MTc4NjEz/MTU5Mg",
    },

    {
      id: 3,
      title: "MY HERO ACADEMIA",
      rating: "PG-14",
      duration: "1h 15m",
      poster:
        "https://imgs.search.brave.com/jsMG7-Sn0DKDADJErPMfEd0G14_oli98chfYMMOBUo0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFrOXB4SFdtdEwu/anBn",
    },

    {
      id: 4,
      title: "WHO AM I",
      rating: "PG-12",
      duration: "3h 15m",
      poster:
        "https://imgs.search.brave.com/lrNZz2yDaEefKX-fKvVpzbd9bwyMSzxZPKa4lrRMev0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS50aGVtb3ZpZWRi/Lm9yZy90L3AvdzIy/MF9hbmRfaDMzMF9m/YWNlL2pybE1mTmcx/dEx5cTJUVFlVanUx/Ulk5R1Y5MS5qcGc",
    },

    {
      id: 5,
      title: "BOSS BABY",
      rating: "PG-2",
      duration: "4h 15m",
      poster:
        "https://imgs.search.brave.com/Z8erQIBOjfmL-oJ3BulM8RhbBuQP8SyVCjzXRii8cMk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMyLnNob3d0aW1l/cy5jb20vcG9zdGVy/LzY2MHg5ODAvdGhl/LWJvc3MtYmFieS03/NjIxLmpwZw",
    },

    {
      id: 6,
      title: "The End",
      rating: "PG-18+",
      duration: "2h 10m",
      poster:
        "https://imgs.search.brave.com/wYwcbjEnGu2gcjUTrNeqzmKIYpifElDSka0yA-W9aO4/rs:fit:500:0:1:0/g:ce/aHR0cDovL3d3dy5p/bXBhd2FyZHMuY29t/LzIwMjQvcG9zdGVy/cy9lbmRfdmVyMi5q/cGc",
    },
  ];

  return (
    <div className="soon">
      <section className="coming soon text-white py-5 px-0">
        <Container fluid>
          <div>
            <h2 className='you'>Coming Soon</h2>
          </div>

          <Row>
            {movies.map((movie) => (
              <Col lg={2} key={movie.id}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ComingSoon;
