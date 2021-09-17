import React from 'react'
import { Container, Card, CardTitle, Button, CardImg,Row,Col,CardBody } from 'reactstrap';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hamburger from "../img/hamburger.jpg";
import Pizza2 from "../img/pizza2.jpg";
import Cookie from "../img/cookie.jpg";
import "./Categories.css";

function Categories() {
    return (
        <div>
            <Container >
                <Row className="smCenter justify-content-md-space-between productRow mt-3">
                    <Col xs ={10} md={6} lg={4} style={{height:"55vh"}} className=" mb-2">
                        <Card className="d-flex" style={{color:"black", height:"100%"}}  inverse >
                               <CardImg src={Hamburger} style={{height
                            :"100%"}}/>
                                <CardBody className="cardBody">
                                    <CardTitle>
                                        <h1>Hamburger</h1>
                                    </CardTitle>
                                    <Link to="/hamburger"><Button className="categoryButton">See more</Button></Link>
                                </CardBody>
                        </Card>
                    </Col>
                    <Col xs ={10} md={6} lg={4} style={{height:"55vh"}} className=" mb-2">
                        <Card className="d-flex" style={{color:"black", height:"100%"}} inverse >
                               <CardImg src={Pizza2} style={{height
                            :"100%"}}/> 
                               <CardBody className="cardBody">
                                    <CardTitle>
                                        <h1>Pizza</h1> 
                                    </CardTitle>
                                    <Link to="/pizza" ><Button className="categoryButton">See more</Button></Link>
                                </CardBody>
                        </Card>
                    </Col>
                    <Col  xs ={10} md={6} lg={4} style={{height:"55vh"}} className=" mb-2">
                        <Card className="d-flex " style={{color:"black", height:"100%"}}  inverse >
                               <CardImg src={Cookie} style={{height
                            :"100%"}}/>
                                <CardBody className="cardBody">
                                    <CardTitle className="mb-3">
                                        <h1>Dessert</h1> 
                                    </CardTitle>
                                    <Link to="/dessert"><Button className="categoryButton">See more</Button></Link>
                                </CardBody>
                        </Card>
                    </Col>
                </Row>
      </Container>
    </div>
    )
}

export default Categories
