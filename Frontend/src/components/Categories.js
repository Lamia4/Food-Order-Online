import React from 'react'
import { Container, Card, CardTitle, Button, CardImg, CardImgOverlay,Row,Col,CardBody } from 'reactstrap';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Coffee from "../img/coffeeBag.jpg";
import Dessert1 from "../img/dessert1.jpg";
import Dessert2 from "../img/dessert2.jpg";
import Hamburger from "../img/hamburger.jpg";
import Pizza2 from "../img/pizza2.jpg";
import Cookie from "../img/cookie.jpg";
import "./Categories.css"

function Categories() {
    return (
        <div>
            <Container >
                <Row className="smCenter justify-content-md-space-between productRow mt-3">
                    {/* <Col sm ={10} md={6} lg={5} xl={4} className="border bg-success m-4" >
                        <Card className="d-flex  " inverse>
                            <CardImg style={{width:"100%", height:"100%"}}  src={Coffee} alt="Card image cap" />
                            <CardImgOverlay>
                                <CardBody>

                            <CardTitle style={{display:"flex", justifyContent:"center", alignItems:"center", border:"1px solid red", margin:"50% 0"}} tag="h5">Card Title
                            </CardTitle>
                            <Button className="d-flex justify-content-center bg-dark border"> Order Now</Button>
                                </CardBody>
                           
                            </CardImgOverlay>
                        </Card>
                    </Col> */}





                    {/* <Col sm ={10} md={6} lg={4} className="border  categoryCol">
                        <Card className="categoryContainer"  inverse>
                            <CardImg className="categoryImg" src={TurkishCoffee}  alt="Card image cap" />
                            <CardBody className="categoryInfo">
                                <CardTitle  tag="h5">Card Title
                                </CardTitle>
                                <Button className="categoryButton">See Now</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm ={10} md={6} lg={4} className="border  categoryCol">
                        <Card className=" categoryContainer"  inverse>
                            <CardImg className="categoryImg" src={Coffee} alt="Card image cap" />
                            <CardBody className="categoryInfo">
                                <CardTitle  tag="h5">Card Title
                                </CardTitle>
                                <Button className="">Order Now</Button>
                            </CardBody>
                        </Card>
                    </Col> */}


                    <Col  xs ={10} md={6} lg={4} style={{height:"55vh"}} className="categoryCol mr-auto">
                        <Card className="d-flex border imgEkleme  " style={{color:"black"}}  inverse >
                               <CardImg src={Dessert1} style={{height
                            :"100%"}}/>
                                  
                                   <CardBody className="cardBody">
                                       <CardTitle className="mb-3">
                                       <Link to="/dessert"> <h1>Dessert</h1>  </Link>
                                       </CardTitle>
                                       <Button className="categoryButton">Order Now</Button>
                                   </CardBody>
                        </Card>
                    </Col>

                    <Col xs ={10} md={6} lg={4} style={{height:"55vh"}} className="categoryCol">
                        <Card className="d-flex border imgEkleme  " style={{color:"black"}}  inverse >
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
                   
                    <Col xs ={10} md={6} lg={4} style={{height:"55vh"}} className="categoryCol">
                        <Card className="d-flex border imgEkleme  " style={{color:"black"}}  inverse >
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
                    <Col  bg="light" style={{height:"55vh"}} xs ={10} md={6} lg={4}>
                        <Card className="d-flex border imgEkleme" inverse >
                        <CardBody className="cardBody">
                                       <CardTitle>
                                       <Link to="/kebab"> <h1>Kebab</h1></Link>
                                       </CardTitle>
                                       <Button className="categoryButton">Order Now</Button>
                                   </CardBody>
                        </Card>
                    </Col>
                    <Col xs ={10} md={6} lg={4} style={{height:"55vh"}} className="categoryCol">
                        <Card className="d-flex border imgEkleme  " style={{color:"black"}}  inverse >
                               <CardImg src={Dessert2} style={{height
                            :"100%"}}/>
                                  
                                   <CardBody className="cardBody">
                                       <CardTitle>
                                       <Link to="/dessert"> <h1>Dessert</h1></Link>
                                       </CardTitle>
                                       <Button className="categoryButton">Order Now</Button>
                                   </CardBody>
                        </Card>
                    </Col>
                    <Col  bg="light" style={{height:"55vh"}} xs ={10} md={6} lg={4}>
                        <Card className="d-flex border imgEkleme" inverse >
                        <CardBody className="cardBody">
                                       <CardTitle>
                                       <Link to="/kebab"> <h1>Kebab</h1></Link>
                                       </CardTitle>
                                       <Button className="categoryButton">Order Now</Button>
                                   </CardBody>
                        </Card>
                    </Col>
                    <Col xs ={10} md={6} lg={4} style={{height:"55vh"}} className="categoryCol">
                        <Card className="d-flex border imgEkleme  " style={{color:"black"}}  inverse >
                               <CardImg src={Cookie} style={{height
                            :"100%"}}/>
                                  
                                   <CardBody className="cardBody">
                                       <CardTitle>
                                       <Link to="/dessert"> <h1>Dessert</h1></Link>
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
