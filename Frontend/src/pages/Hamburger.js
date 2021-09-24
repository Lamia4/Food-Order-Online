import React from 'react';
import { Container, Card, CardTitle,CardSubtitle, Button,CardText, CardImg,Row,Col,CardBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Pizza.css";
import Hamburger2 from "../img/hamburger2.jpg";
import Hamburger4 from "../img/hamburger4.jpg";
import Hamburger7 from "../img/hamburger7.jpg";


function Hamburger() {
    return (
        <div>
             <Container className="menuItem " >
                    <Row className="smCenter justify-content-center productRow mt-3">
                        <Col xs ={10}sm={9} md={12} lg={9} style={{height:""}} className=" mb-2  menuColumn">
                            <Card className="border-2 d-flex flex-md-row" style={{height:"100%"}}>
                                <CardImg className="menuImg" top  style={{height:"100%", width:"50%", objectFit:"cover"}} src={Hamburger4} alt="Card image cap" />
                                <CardBody className="menuBody " style={{height:"100%", width:"50%"}}>
                                    <CardTitle className="menuTitle mb-md-3 " tag="h5">Vegan Burger</CardTitle>
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
                                <CardImg className="menuImg"   style={{height:"100%", width:"50%", objectFit:"cover" }} src={Hamburger2} alt="Card image cap" />
                                <CardBody className="menuBody " style={{height:"100%", width:"50%"}}>
                                    <CardTitle className="menuTitle mb-md-3 " tag="h5">Cheese Burger</CardTitle>
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
                                <CardImg className="menuImg"   style={{height:"100%", width:"50%", objectFit:"cover" }} src={Hamburger7} alt="Card image cap" />
                                <CardBody className="menuBody " style={{height:"100%", width:"50%"}}>
                                    <CardTitle className="menuTitle mb-md-3 " tag="h5">Spicy Burger</CardTitle>
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
                    </Row>
            </Container>
        </div>
    )
}

export default Hamburger
