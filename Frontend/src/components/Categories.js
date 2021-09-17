import React from 'react'
import { Container, Card, CardTitle, Button, CardImg,Row,Col,CardBody } from 'reactstrap';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dessert1 from "../img/dessert1.jpg";
import Dessert2 from "../img/dessert2.jpg";
import Hamburger from "../img/hamburger.jpg";
import Pizza2 from "../img/pizza2.jpg";
import Cookie from "../img/cookie.jpg";
import Kebab from "../img/kebab.jpg";
import "./Categories.css"

function Categories() {
    return (
        <div>
            <Container >
                <Row className="smCenter justify-content-md-space-between productRow mt-3">
                    <Col  xs ={10} md={6} lg={4} style={{height:"55vh"}} className=" mb-2">
                        <Card className="d-flex " style={{color:"black", height:"100%"}}  inverse >
                               <CardImg src={Dessert1} style={{height
                            :"100%"}}/>
                                <CardBody className="cardBody">
                                    <CardTitle className="mb-3">
                                        <Link to="/dessert"> <h1>Dessert</h1></Link>
                                    </CardTitle>
                                    <Button className="categoryButton">Order Now</Button>
                                </CardBody>
                        </Card>
                    </Col>
                    <Col xs ={10} md={6} lg={4} style={{height:"55vh"}} className=" mb-2">
                        <Card className="d-flex" style={{color:"black", height:"100%"}}  inverse >
                               <CardImg src={Hamburger} style={{height
                            :"100%"}}/>
                                <CardBody className="cardBody">
                                    <CardTitle>
                                       <Link to="/hamburger"> <h1>Hamburger</h1></Link>
                                    </CardTitle>
                                    <Button className="categoryButton">Order Now</Button>
                                </CardBody>
                        </Card>
                    </Col>
                    <Col xs ={10} md={6} lg={4} style={{height:"55vh"}} className=" mb-2">
                        <Card className="d-flex" style={{color:"black", height:"100%"}} inverse >
                               <CardImg src={Pizza2} style={{height
                            :"100%"}}/> 
                               <CardBody className="cardBody">
                                    <CardTitle>
                                       <Link to="/pizza"> <h1>Pizza</h1> </Link>
                                    </CardTitle>
                                    <Button className="categoryButton">Order Now</Button>
                                </CardBody>
                        </Card>
                    </Col>
                    <Col  xs ={10} md={6} lg={4} style={{height:"55vh"}} className=" mb-2">
                        <Card className="d-flex " style={{color:"black", height:"100%"}}  inverse >
                               <CardImg src={Cookie} style={{height
                            :"100%"}}/>
                                <CardBody className="cardBody">
                                    <CardTitle className="mb-3">
                                       <Link to="/dessert"> <h1>Dessert</h1>  </Link>
                                    </CardTitle>
                                    <Button className="categoryButton">Order Now</Button>
                                </CardBody>
                        </Card>
                    </Col>
                    <Col xs ={10} md={6} lg={4} style={{height:"55vh"}} className=" mb-2">
                        <Card className="d-flex categoryCard" style={{color:"black", height:"100%"}}  inverse >
                               <CardImg src={Kebab} style={{height
                            :"100%"}}/>
                                <CardBody className="cardBody">
                                    <CardTitle>
                                       <Link to="/kebab"> <h1>Kebab</h1></Link>
                                    </CardTitle>
                                    <Button className="categoryButton">Order Now</Button>
                                </CardBody>
                        </Card>
                    </Col>
                </Row>
      </Container>
    </div>
    )
}

export default Categories
