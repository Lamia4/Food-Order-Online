import React from 'react';
import { Carousel } from 'react-bootstrap';
import pizza from "../img/2.png";
import hamburger from "../img/1.png";
import dessert from "../img/3.png";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/Slider.css"

function Slider() {
    return (
        <Carousel interval={4000} className="slider">


      <Carousel.Item>
            <img className="d-block w-100" src= {hamburger} alt="First slide"/> 
      </Carousel.Item>


      <Carousel.Item>
        <img className="d-block w-100" src= {pizza} alt="First slide"/> 
      </Carousel.Item>


      

  <Carousel.Item>
      <img className="d-block w-100" src= {dessert} alt="First slide"/> 
      </Carousel.Item>

  </Carousel>
    )
}

export default Slider;