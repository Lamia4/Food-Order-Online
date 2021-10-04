import React, {useState, useEffect} from 'react';
import "./Category.js";
import { CartContext } from '../components/CartProvider.js';
import { Container, Card, CardTitle,CardSubtitle, Button,CardText, CardImg,Row,Col,CardBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Shopping.css";
import {LoginContext} from "../components/LoginProvider";
import CheckoutCard from '../components/CheckoutCard.js';

function Shopping() {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isFullOpacity, setIsFullOpacity] = useState(true);
    const shoppingCart = React.useContext(CartContext);
    const {getUser, isLogged} = React.useContext(LoginContext);
    console.log("shoppingCart",shoppingCart);
    const [total, setTotal] = useState(0);
    useEffect(() =>  {
        const totalPrice = () => {
            const total = shoppingCart.cart.reduce((first, item) => {
                return first + (item.price * item.quantity)
            },0)
            setTotal(total);
        }
        totalPrice();
    }, [shoppingCart.cart])

    const handleCheckout = ()=>{
        setIsCheckout(true);
        setIsFullOpacity(false);
    }
    
    return (
        <Container className="menuItem " style={{position: "relative"}}>
            <div style={{zIndex: isFullOpacity ? "3" : "1", opacity:isFullOpacity ? "1" : "0.3"}}>
                {isLogged? 
                (<h1 style={{marginTop:"25px"}}>Hi {getUser.name}</h1>) :
                null }
                <Row className=" justify-content-center mt-5 ">
                {shoppingCart.cart.map((shoppingCartItem,i) => {
                    return(
                        <Col xs ={10}sm={9} md={12} lg={9} key={i} className=" mb-2  menuColumnCart">
                            <Card className="border-2 d-flex flex-md-row" style={{height:"100%",position:"relative"}}>
                                    <Button className="d-flex justify-content-center" style={{ width:"25px",height:"25px", alignItems:"center", position:"absolute", top:"0", left:"0", color:"red", fontSize:"22px", border:"1px solid ", cursor:"pointer"}} onClick={() => shoppingCart.removeFromCart(i)}>X</Button>
                                <CardImg className="menuImg"   style={{height:"100%", width:"50%", objectFit:"cover" }} src={shoppingCartItem.image.url} alt="Card image cap" />
                                <CardBody className="menuBody " style={{height:"100%", width:"50%", position:"relative"}}>
                                    <CardTitle className="menuTitle mb-md-3" tag="h5"><b>Title: </b>{shoppingCartItem.title}</CardTitle>
                                    <CardText className=" menuTitle mb-md-5  "><b>ID:</b>{shoppingCartItem._id}</CardText>
                                    <div className="priceAndOrder"  style={{backgroundColor:"", alignItems:"center", display:"flex",justifyContent:"space-between"}}>
                                        <div className="menuOrderDiv ">
                                            <CardText className="menuOrder menuOrderIcon " onClick={() => shoppingCart.decrementCount(shoppingCartItem)}>-</CardText>
                                            <CardText className="menuOrderNumber menuOrderIcon">{shoppingCartItem.quantity}</CardText>
                                            <CardText className="menuOrder menuOrderIcon" onClick={() => shoppingCart.addToCart(shoppingCartItem)}>+</CardText>
                                        </div>
                                        <div className="">
                                            <CardSubtitle tag="h6" className=" menuPrice  ">{(shoppingCartItem.price * shoppingCartItem.quantity).toFixed(2)}€</CardSubtitle>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                }

                )}
                </Row>
                </div>
                
                    <Row className="justify-content-center mt-3 mb-0 cartFooterRow">
                        {shoppingCart.cart.length === 0?
                        (<p style={{textAlign: "center", fontSize: "25px", textTransform: "capitalize"}}>your cart is empty!</p>) :
                        (<>
                        <Col xs={8} md={6} lg={4} className=" summaryCardCol">
                        <CardText className ="summaryCard"><b>Summary:</b>{total.toFixed(2)}€</CardText>
                        </Col>
                        <Col className=" d-flex shoppingButton " xs={8} md={6} lg={4} style={{justifyContent:"space-between"}}>
                    <Button className="cartButton" style={{padding:"5px", borderRadius: "10px", backgroundColor: "darkorange", color: "white", border:"none"}}>
                        Go Back
                    </Button>
                    <Button onClick={handleCheckout} className="bg-success cartButton" style={{padding:"5px", borderRadius: "10px", color: "white", border:"none"}}>
                        Checkout
                    </Button>
                    </Col>
                    </>)
                    
                    }
                        
                    </Row>
                    <Row className="justify-content-center">
                    {isCheckout ? <CheckoutCard/> : ""}
                </Row>
        </Container>
    )
}

export default Shopping
