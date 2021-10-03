import React from 'react'
import {Card, Container, Row, Col, CardBody, CardText, CardSubtitle, Button, CardImg, CardTitle} from "reactstrap";
import { CartContext } from './CartProvider.js';
import {SearchContext} from "./SearchProvider.js";
import "../pages/Product.css";


function SearchResult({products}) {
    const currentCart = React.useContext(CartContext);
    const searchedProducts = React.useContext(SearchContext);
   
    
    return (
      
            <Container className="menuItem2 " >
                <Row className="smCenter justify-content-center productRow">
                    { 
                        searchedProducts.products.map((product, i)=>{
                                return(
                                    <Col xs ={10}sm={9} md={12} lg={9} key={i}  className=" mb-3  menuColumn">
                                    <Card className="border-2 d-flex flex-md-row productCard" style={{height:"100%"}}>
                                        <CardImg className="productImg" top  style={{height:"100%", width:"50%", objectFit:"cover"}} src={product.image["url"]} alt="Card image cap" />
                                        <CardBody className="productBody " style={{height:"100%", width:"50%"}}>
                                            <CardTitle style={{textTransform:"capitalize"}} className="productTitle mb-md-3 " >{product.title}</CardTitle>
                                            <CardText className="productText mb-md-5 ">{product.description}</CardText>
                                                <div className="priceAndButtonDiv" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                                                    <CardSubtitle  tag="h6" className=" productPrice  ">{product.price}€</CardSubtitle>
                                                    <Button className="productButton" style={{padding: "5px", borderRadius: "10px", background: "darkorange", color: "white", border:"none"}} onClick={() => currentCart.addToCart(product)} >ORDER</Button>
                                                </div>
                                        </CardBody>
                                    </Card>
                                </Col>

                                )
                        })
                    }
                </Row>
            </Container>
     
    )
}

export default SearchResult