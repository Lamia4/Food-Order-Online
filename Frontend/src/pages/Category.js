import React, { useEffect , useState} from 'react';
import { Container, Card, CardTitle,CardSubtitle, Button,CardText, CardImg,Row,Col,CardBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Product.css";
import { useParams } from 'react-router';
import { CartContext } from '../components/CartProvider.js';
import CreateProduct from "../components/CreateProduct.js";


function Category() {
    let {categoryName} = useParams();
    // const [isAdmin, setIsAdmin] = useState(true);
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
        
             <Container className="menuItem  mb-0 mt-5" >
                    {/* {isAdmin && <CreateProduct/>}  */}
                    <Row className="smCenter justify-content-center productRow mt-3">

                    {



                        categoryProducts.map((categoryProduct, i)=>{
                            
                            return(
                                    <Col xs ={10}sm={9} md={12} lg={9} key={i} className=" mb-3  menuColumn">
                                        <Card className="border-2 d-flex flex-md-row productCard">
                                            <CardImg className="productImg" top  style={{height:"100%", width:"50%", objectFit:"cover"}} src={categoryProduct.image["url"]} alt="Card image cap" />
                                            <CardBody className="productBody " style={{height:"100%", width:"50%"}}>
                                                <CardTitle style={{textTransform:"capitalize"}} className="productTitle mb-md-3 " >{categoryProduct.title}</CardTitle>
                                                <CardText className="productText mb-md-5 ">{categoryProduct.description}</CardText>
                                                    <div className="priceAndButtonDiv " style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                                                        <CardSubtitle tag="h6" className="productPrice  ">{categoryProduct.price}€</CardSubtitle>
                                                        <Button style={{padding: "5px", borderRadius: "10px", background: "darkorange", color: "white", border:"none"}} className="productButton" onClick={() => currentCart.addToCart(categoryProduct)} >ORDER</Button>
                                                    </div>
                                                
                                            </CardBody>
                                        </Card>
                                    </Col>



                            );
                        })
                    }
                    </Row>
            </Container>
    )
}

export default Category