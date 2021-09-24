import React from 'react';
import { Carousel } from 'react-bootstrap';
import img from "../img/slid1.png";
import Slid2 from "../img/slid2.png";
import Slid3 from "../img/slid3.png";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../pages/startSeite.css"

function Slider() {
    return (
        <Carousel interval={3000} className="slider">

      <Carousel.Item>
        <img className="d-block w-100" src= {img} alt="First slide"/> 
      </Carousel.Item>


      <Carousel.Item>
            <img className="d-block w-100" src= {Slid2} alt="First slide"/> 
      </Carousel.Item>


  <Carousel.Item>
      <img className="d-block w-100" src= {Slid3} alt="First slide"/> 
      </Carousel.Item>

  </Carousel>
    )
}

export default Slider;