import React from 'react';
import Slider from "../pages/Slider";
import Footer from "../components/Footer.js";
import Categories from "../components/Categories.js";


function Home() {
    return (
        <div style={{position:"relative"}}>
            
            <Slider/>
            <Categories/>
            <Footer/>

        </div>
    )
}

export default Home
