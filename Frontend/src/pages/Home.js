import React from 'react';
import Slider from "../components/Slider.js";
import Categories from "../components/Categories.js";
import { Container } from "reactstrap";


function Home() {

    
    return (
        <div style={{position:"relative"}}>
            <Slider/>
            <form method="post" enctype="multipart/form-data" action="/upload">
    <input type="file" name="file"/>
    <input type="submit" value="Submit"/>
</form>
            <Container className=" mt-3">
                <Categories/>   
            </Container>   
        </div>
    )
}

export default Home
