import React, {useState} from 'react';
import "./Category.js";
import { CartContext } from '../components/CartProvider.js';
import { Container, Card, CardTitle,CardSubtitle, Button,CardText, CardImg,Row,Col,CardBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Shopping.css";

function Shopping() {
    const shoppingCart = React.useContext(CartContext);
    console.log("shoppingCart",shoppingCart);
    return (
        <div>
            <Container className="menuItem " >
                <Row className=" justify-content-center mt-3 ">
                {shoppingCart.cart.map((shoppingCartItem,i) => {
                    return(
                        <Col xs ={10}sm={9} md={12} lg={8} key={i} className=" mb-2  menuColumn">
                            <Card className="border-2 d-flex flex-md-row  menuCard" style={{height:"100%",position:"relative"}}>
                                    <Button className="d-flex justify-content-center" style={{ width:"25px",height:"25px", alignItems:"center", position:"absolute", top:"0", left:"0", color:"red", fontSize:"22px", border:"1px solid ", cursor:"pointer"}} onClick={() => shoppingCart.removeFromCart(i)}>X</Button>
                                <CardImg className="menuImg"   style={{height:"100%", width:"50%", objectFit:"cover" }} src={shoppingCartItem.image.url} alt="Card image cap" />
                                <CardBody className="menuBody " style={{height:"100%", width:"50%", position:"relative"}}>
                                    <CardTitle className="menuTitle mb-md-3" tag="h5"><b>Title: </b>{shoppingCartItem.title}</CardTitle>
                                    <CardText className=" menuTitle mb-md-5  "><b>ID:</b>{shoppingCartItem._id}</CardText>
                                    <div className="priceAndOrder"  style={{backgroundColor:"", alignItems:"center", display:"flex",justifyContent:"space-between"}}>
                                        <div className="menuOrderDiv ">
                                            <CardText className="menuOrder menuOrderIcon " >-</CardText>
                                            <CardText className="menuOrderNumber menuOrderIcon"></CardText>
                                            <CardText className="menuOrder menuOrderIcon" >+</CardText>
                                        </div>
                                        <div className="">
                                            <CardSubtitle tag="h6" className=" menuPrice  ">{shoppingCartItem.price}€</CardSubtitle>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                }

                )}
                {/* <Button className="menuButton" onClick={() => shoppingCart.removeFromCart(categoryProduct)} >ORDER</Button> */}
                </Row>
                </Container>
        </div>
    )
}

export default Shopping
