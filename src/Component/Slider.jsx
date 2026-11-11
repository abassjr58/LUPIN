import Carousel from 'react-bootstrap/Carousel';

import Dooms from "../assets/slider/Dooms.jpg";
import Hunger from "../assets/slider/Hunger.jpg";
import Fury from "../assets/slider/Fury.jpg";
import StreetFighter from "../assets/slider/StreetFighter.jpg";
import Evil from "../assets/slider/Evil.jpg";
import Avengers from "../assets/slider/Avengers.jpg";
import Return from "../assets/slider/Return.jpg";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
       <img src={Dooms} alt="" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={Hunger} alt="" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={Fury} alt="" />
      </Carousel.Item>

 <Carousel.Item>
        <img src={StreetFighter} alt="" />
      </Carousel.Item>

 <Carousel.Item>
        <img src={Evil} alt="" />
      </Carousel.Item>


 <Carousel.Item>
        <img src={Avengers} alt="" />
      </Carousel.Item>


 <Carousel.Item>
        <img src={Return} alt="" />
      </Carousel.Item>

    </Carousel>
  );
}

export default Slider;