import React, {useState, useEffect, useContext} from 'react';
import "./Category.js";
import { CartContext } from '../components/CartProvider.js';
import { Container, Card, CardTitle,CardSubtitle, Button,CardText, CardImg,Row,Col,CardBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Shopping.css";
import {LoginContext} from "../components/LoginProvider";
import CheckoutCard from '../components/CheckoutCard.js';
import { useHistory} from "react-router-dom";
import {TokenContext} from "../components/TokenProvider.js";
import order from "../API/order.js";

function Shopping() {

    const {cart, setCart, total, setTotal, removeFromCart, decrementCount, addToCart} = useContext(CartContext);
    const {isLogged, user, isCheckout, setIsCheckout, isNoOpacity, setIsNoOpacity} = useContext(LoginContext);
    const {isTokenExpired, userToken} = useContext(TokenContext);
    const history = useHistory();

    useEffect(() =>  {
        const totalPrice = () => {
            const total = cart.reduce((first, item) => {
                return first + (item.price * item.quantity)
            },0)
            setTotal(total);
        }
        totalPrice();
        setIsNoOpacity(true);
        setIsCheckout(false);
    }, [cart])

    const handleCheckout = async ()=>{
        console.log("user von checkout", user);
        setIsCheckout(true);
        setIsNoOpacity(false);
        if(isLogged) {
   
            const result = isTokenExpired(userToken);
            if (result || isLogged) {
                console.log(user, cart, total);
                const userId = (user.id);
                console.log("userId", userId);
                const userCart = cart.map(cartItem => {
                    const obj = {productId : cartItem._id, 
                                quantity: cartItem.quantity}
                    return obj})
                console.log("userCart", userCart); 
                const totalP = total;
                console.log("total", totalP);
                const finalResponse = await order(userId, userCart, totalP);
                console.log("order", finalResponse);
                history.push("/success") 
            }      

        }
    }
    const handleGoBack = () => {
        history.push("/")

    } 
    
    return (
        <Container className="menuItem " style={{position: "relative"}}>
            <div>
            <div style={{zIndex: isNoOpacity ? "3" : "1", opacity:isNoOpacity ? "1" : "0.3"}}>
                {isLogged? 
                (<h1 style={{marginTop:"25px"}}>Hi {user.name}</h1>) :
                null }
                <Row className=" justify-content-center mt-5 ">
                {cart.map((shoppingCartItem,i) => {
                    return(
                        <Col xs ={10}sm={9} md={12} lg={9} key={i} className=" mb-2  menuColumnCart">
                            <Card className="border-2 d-flex flex-md-row" style={{height:"100%",position:"relative"}}>
                                    <Button className="d-flex justify-content-center" style={{ width:"25px",height:"25px", alignItems:"center", position:"absolute", top:"0", left:"0", color:"red", fontSize:"22px", border:"1px solid ", cursor:"pointer"}} onClick={() => removeFromCart(i)}>X</Button>
                                <CardImg className="menuImg"   style={{height:"100%", width:"50%", objectFit:"cover" }} src={shoppingCartItem.image.url} alt="Card image cap" />
                                <CardBody className="menuBody " style={{height:"100%", width:"50%", position:"relative"}}>
                                    <CardTitle className="menuTitle mb-md-3" tag="h5"><b>Title: </b>{shoppingCartItem.title}</CardTitle>
                                    <CardText className=" menuTitle mb-md-5  "><b>ID:</b>{shoppingCartItem._id}</CardText>
                                    <span className="priceAndOrder"  style={{backgroundColor:"", alignItems:"center", display:"flex",justifyContent:"space-between"}}>
                                        <span className="menuOrderDiv ">
                                            <CardText className="menuOrder menuOrderIcon " onClick={() => decrementCount(shoppingCartItem)}>-</CardText>
                                            <CardText className="menuOrderNumber menuOrderIcon">{shoppingCartItem.quantity}</CardText>
                                            <CardText className="menuOrder menuOrderIcon" onClick={() => addToCart(shoppingCartItem)}>+</CardText>
                                        </span>
                                        <span className="">
                                            <CardSubtitle tag="h6" className=" menuPrice  ">{(shoppingCartItem.price * shoppingCartItem.quantity).toFixed(2)}€</CardSubtitle>
                                        </span>
                                    </span>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                }

                )}
                </Row>
                </div>
                
                    <Row className="justify-content-center mt-3 mb-0 cartFooterRow">
                        {cart.length === 0?
                        (<CardText style={{textAlign: "center", fontSize: "25px", textTransform: "capitalize", color: "white"}}>your cart is empty! :(</CardText>) :
                        (<>
                        <Col xs={8} md={6} lg={4} className=" summaryCardCol">
                        <CardText className ="summaryCard" style={{color:"white"}}><b>Summary:</b>{total.toFixed(2)}€</CardText>
                        </Col>
                        <Col className=" d-flex shoppingButton " xs={8} md={6} lg={4} style={{justifyContent:"space-between"}}>
                    <Button onClick={handleGoBack} className="cartButton" style={{padding:"5px", borderRadius: "10px", backgroundColor: "#A61C3C", color: "white", border:"none"}}>
                        Go Back
                    </Button>
                    <Button onClick={handleCheckout} className="bg-success cartButton" style={{padding:"5px", borderRadius: "10px", color: "white", border:"none"}}>
                        Checkout
                    </Button>
                    </Col>
                    </>)
                    
                    }
                        
                    </Row>
                    </div>
                    <Row className="justify-content-center">
                    {isCheckout && <CheckoutCard/>}
                </Row>
        </Container>
    )
}

export default Shopping
