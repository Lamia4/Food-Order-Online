import React from 'react'
import { Container, Card, CardTitle,CardSubtitle, Button,CardText, CardImg,Row,Col,CardBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VegetarianPizza from "../img/vegetarian_pizza.jpg";
import VegetarianPizza2 from "../img/vegetarian_pizza2.jpg";
import Pizza2 from "../img/pizza2.jpg";
import Karepizza from "../img/karePizza.jpg";
import "./Pizza.css";

function Pizza() {
    return (
        <div>
            <Container >
                    <Row className="smCenter justify-content-center productRow mt-3">
                        <Col xs ={10}sm={9} md={12} lg={9} style={{height:""}} className=" mb-2  menuColumn">
                            <Card className="border-2 d-flex flex-md-row" style={{height:"100%"}}>
                                <CardImg className="menuImg" top  style={{height:"100%", width:"50%", objectFit:"cover"}} src={VegetarianPizza2} alt="Card image cap" />
                                <CardBody className="menuBody " style={{height:"100%", width:"50%"}}>
                                    <CardTitle className="menuTitle mb-md-3 " tag="h5">Peperoni Pizza</CardTitle>
                                    <CardText className="menuText mb-md-5 ">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <CardSubtitle tag="h6" className="mb-md-5  menuSubtitle  ">10.00€</CardSubtitle>
                                    <div className="menuOrderAndButton">
                                        <div className="menuOrderDiv ">
                                            <CardText className="menuOrder menuOrderIcon ">-</CardText>
                                            <CardText className="menuOrderNumber menuOrderIcon">1</CardText>
                                            <CardText className="menuOrder menuOrderIcon">+</CardText>
                                        </div>
                                        <div className="menuButtonDiv">

                                        <Button className="menuButton">ORDER</Button>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs ={10}sm={9} md={12} lg={9} style={{height:"45vh"}} className=" mb-2  menuColumn">
                            <Card className="border-2 d-flex flex-md-row" style={{height:"100%"}}>
                                <CardImg className="menuImg"   style={{height:"100%", width:"50%", objectFit:"cover" }} src={VegetarianPizza} alt="Card image cap" />
                                <CardBody className="menuBody " style={{height:"100%", width:"50%"}}>
                                    <CardTitle className="menuTitle mb-md-3 " tag="h5">Peperoni Pizza</CardTitle>
                                    <CardText className="menuText mb-md-5 ">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <CardSubtitle tag="h6" className="mb-md-5  menuSubtitle  ">10.00€</CardSubtitle>
                                    <div className="menuOrderAndButton">
                                        <div className="menuOrderDiv ">
                                            <CardText className="menuOrder menuOrderIcon ">-</CardText>
                                            <CardText className="menuOrderNumber menuOrderIcon">1</CardText>
                                            <CardText className="menuOrder menuOrderIcon">+</CardText>
                                        </div>
                                        <div className="menuButtonDiv">

                                        <Button className="menuButton">ORDER</Button>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs ={10}sm={9} md={12} lg={9} style={{height:"45vh"}} className=" mb-2  menuColumn">
                            <Card className="border-2 d-flex flex-md-row" style={{height:"100%"}}>
                                <CardImg className="menuImg"   style={{height:"100%", width:"50%", objectFit:"cover" }} src={Pizza2} alt="Card image cap" />
                                <CardBody className="menuBody " style={{height:"100%", width:"50%"}}>
                                    <CardTitle className="menuTitle mb-md-3 " tag="h5">Peperoni Pizza</CardTitle>
                                    <CardText className="menuText mb-md-5 ">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <CardSubtitle tag="h6" className="mb-md-5  menuSubtitle  ">10.00€</CardSubtitle>
                                    <div className="menuOrderAndButton">
                                        <div className="menuOrderDiv ">
                                            <CardText className="menuOrder menuOrderIcon ">-</CardText>
                                            <CardText className="menuOrderNumber menuOrderIcon">1</CardText>
                                            <CardText className="menuOrder menuOrderIcon">+</CardText>
                                        </div>
                                        <div className="menuButtonDiv">

                                        <Button className="menuButton">ORDER</Button>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        {/* <Col xs ={10} md={12} lg={9} style={{height:"45vh"}} className=" mb-2">
                            <Card className="cardColumn border-2 d-flex flex-row" style={{height:"100%"}}>
                                <CardImg className="menuImg" top  style={{height:"100%", width:"50%"}} src={Karepizza} alt="Card image cap" />
                                <CardBody className="menuBody " style={{height:"100%", width:"50%"}}>
                                    <CardTitle className="menuTitle mb-3 " tag="h5">Peperoni Pizza</CardTitle>
                                    <CardText className="menuText mb-5 ">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <CardSubtitle tag="h6" className="mb-5 pl-3 menuSubtitle  ">10.00€</CardSubtitle>
                                    <div className="menuOrderAndButton">
                                        <div className="menuOrderDiv ">
                                            <CardText className="menuOrder menuOrderIcon ">-</CardText>
                                            <CardText className="menuOrderNumber menuOrderIcon">1</CardText>
                                            <CardText className="menuOrder menuOrderIcon">+</CardText>
                                        </div>
                                        <Button className="menuButton">ORDER</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col> */}
                        {/* <Col xs ={10} md={6} lg={9}  style={{height:"45vh"}} className=" mb-2 bg-success">
                            <Card  className="cardColumn d-flex flex-row">
                                <CardImg className="menuImg" top  style={{height:"45vh", width:"50%"}} src={VegetarianPizza2} alt="Card image cap" />
                                <CardBody className="menuBody bg-danger" style={{height:"45vh", width:"50%"}}>
                                    <CardTitle tag="h5">Card title</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </Col> */}
                        
                    </Row>
            </Container>
        </div>
    )
}

export default Pizza
