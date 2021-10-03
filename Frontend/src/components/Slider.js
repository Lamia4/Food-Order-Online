import React from 'react';
import { Carousel } from 'react-bootstrap';
import img from "../img/slid2.png";
import hamburger from "../img/hamburger.png";
import dessert from "../img/dessert.png";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Slider.css"

function Slider() {
    return (
        <Carousel interval={3000} className="slider">

      <Carousel.Item>
        <img className="d-block w-100" src= {img} alt="First slide"/> 
      </Carousel.Item>


      <Carousel.Item>
            <img className="d-block w-100" src= {hamburger} alt="First slide"/> 
      </Carousel.Item>


  <Carousel.Item>
      <img className="d-block w-100" src= {dessert} alt="First slide"/> 
      </Carousel.Item>

  </Carousel>
    )
}

export default Slider;