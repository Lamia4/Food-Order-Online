import React, { useEffect , useState} from 'react';
import { Container, Card, CardTitle,CardSubtitle, Button,CardText, CardImg,Row,Col,CardBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Pizza.css";
import { useParams } from 'react-router';
import { CartContext } from '../components/CartProvider.js';


function Category() {
    let {categoryName} = useParams();
    const [categoryProducts, setCategoryProducts] = useState([]);
    const currentCart = React.useContext(CartContext);
    console.log("cart",currentCart);


    const getCategoryProducts = async (e) => {
        const result = await fetch(`http://localhost:3438/api/products/${categoryName}`,
        {

            method: "GET",
           
        }).then(response=> response.json())
        .then(data=>{
            setCategoryProducts(data.products);
          
        });
        return result;

    };
    
       
    useEffect(() => {
        getCategoryProducts(); 
    },[])
           
        
    
    return (
        <div>
             <Container className="menuItem " >
                    <Row className="smCenter justify-content-center productRow mt-3">
                    {
                        categoryProducts.map((categoryProduct, i)=>{
                            
                            return(
                                    <Col xs ={10}sm={9} md={12} lg={9} key={i} style={{height:""}} className=" mb-2  menuColumn">
                                        <Card className="border-2 d-flex flex-md-row" style={{height:"100%"}}>
                                            <CardImg className="menuImg" top  style={{height:"100%", width:"50%", objectFit:"cover"}} src={categoryProduct.image["url"]} alt="Card image cap" />
                                            <CardBody className="menuBody " style={{height:"100%", width:"50%"}}>
                                                <CardTitle style={{textTransform:"capitalize"}} className="menuTitle mb-md-3 " tag="h5">{categoryProduct.title}</CardTitle>
                                                <CardText className="menuText mb-md-5 ">{categoryProduct.description}</CardText>
                                                <CardSubtitle tag="h6" className="mb-md-5  menuSubtitle  ">{categoryProduct.price}€</CardSubtitle>
                                                
                                                    
                                                    <div className="menuButtonDiv">

                                                    <Button className="menuButton" onClick={() => currentCart.addToCart(categoryProduct)} >ORDER</Button>
                                                    </div>
                                                
                                            </CardBody>
                                        </Card>
                                    </Col>



                            );
                        })
                    }

                        {/* <Col xs ={10}sm={9} md={12} lg={9} style={{height:"45vh"}} className=" mb-2  menuColumn">
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
                        </Col> */}
                    </Row>
            </Container>
        </div>
    )
}

export default Category
