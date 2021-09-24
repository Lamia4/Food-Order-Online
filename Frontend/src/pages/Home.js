import React from 'react';
import Slider from "../pages/Slider";
import Categories from "../components/Categories.js";


function Home() {
    return (
        <div style={{position:"relative"}}>
            <Slider/>
            <Categories/>   
        </div>
    )
}

export default Home
