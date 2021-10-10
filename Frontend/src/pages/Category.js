import React, { useEffect , useState, useContext} from 'react';
import { Container, Card, CardTitle,CardSubtitle, Button,CardText, CardImg,Row,Col,CardBody, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Product.css";
import { useParams } from 'react-router';
import { CartContext } from '../components/CartProvider.js';
import CreateProduct from "../components/CreateProduct.js";
import { LoginContext } from "../components/LoginProvider.js";
import { deleteProduct, editProduct } from '../API/postProduct';
import deleteImage from '../API/deleteImage'
import { ProductContext } from "../components/ProductProvider.js";

function Category() {
    let {categoryName} = useParams();
    const {isEditable, setIsEditable, categoryProducts, setCategoryProducts,editProduct, categories} = useContext(ProductContext);
    const {admin} = useContext(LoginContext);
    const currentCart = useContext(CartContext);
    // const [price, setPrice] = useState("");
    // const [description, setDescription] = useState("");
    // const [title, setTitle] = useState("");
    const [key, setKey] = useState("");


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

    const handleRemove = async(category)=>{
        await deleteProduct(category._id);
        await deleteImage({public_id:category.image.public_id});
        getCategoryProducts();
    }

    const handleEdit = async(key)=>{
        setIsEditable(!isEditable);
        setKey(key);
        console.log("key", key);
    }
    console.log("products", categoryProducts);
    
    const handleCancelEdit = async() => {
        
        setIsEditable(false);
        console.log("editProduct", editProduct);
    }
        
    
    return (
        
             <Container className="menuItem  mb-0 mt-5" >
                    {admin && <CreateProduct/>} 
                    <Row className="smCenter justify-content-center productRow mt-3">

                    {



                        categoryProducts.map((product, i)=>(
                            
                            
                                    <Col xs ={10}sm={9} md={12} lg={9} key={i} className=" mb-3  menuColumn">

                                        <Card className="border-2 d-flex flex-md-row productCard">
                                            {admin && <span style={{position:"absolute", top:"0",left:"0",paddingLeft:"6px", width:"25px", height:"25px", color:"white",border:"1px solid ", cursor:"pointer", backgroundColor:"darkorange"}} 
                                            onClick={()=>handleRemove(product)}>X</span>}
                                            <CardImg className="productImg" top  style={{height:"100%", width:"50%", objectFit:"cover"}} src={product.image["url"]} alt="Card image cap" />
                                            <CardBody className="productBody " style={{height:"100%", width:"50%"}}>
                                                {isEditable? 
                                                <>
                                                <Input defaultValue={product.title} type="text"  name="title" id="exampleTitle1"/>
                                                <Input defaultValue={product.description} type="textarea" required name="desc" id="exampleDesc1" />
                                                <Input defaultValue={product.price} type="text" required name="price" id="examplePrice1"/>
                                                <Input defaultValue={product.category} type="select" required name="select" id="exampleSelect3" >
                                                <option>Please select a category</option>

                                                {
                                                categories.map((category)=>
                                                {
                                                    return(
                                                        <option value={category._id} key={category._id} >{category.name}</option>
                                                    )
                                                })
                                            
                                                }  
                           
                                                </Input> 
                                                </>
                        
                    
                                                :
                                                <>
                                                <CardTitle style={{textTransform:"capitalize"}} className="productTitle mb-md-3 ">{product.title}</CardTitle>
                                                <CardText className="productText mb-md-5 ">{product.description}</CardText>
                                                <CardSubtitle tag="h6" className="productPrice">{product.price}€</CardSubtitle>
                                                        </>
                                                        }
                                                    <div className="priceAndButtonDiv " style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                                                        {admin?
                                                        (isEditable?
                                                            <Button style={{padding: "5px 15px", borderRadius: "10px", background: "darkorange", color: "white", border:"none"}} className="productButton" onClick={() => handleCancelEdit()} > Cancel Edit</Button> :
                                                            <Button style={{padding: "5px 15px", borderRadius: "10px", background: "darkorange", color: "white", border:"none"}} className="productButton" onClick={()=>handleEdit(product.key)}>Edit
                                                            </Button>)
                                                            :
                                                        (<Button style={{padding: "5px", borderRadius: "10px", background: "darkorange", color: "white", border:"none"}} className="productButton" onClick={() => currentCart.addToCart(product)} >ORDER</Button>
                                                        )
                                                        }
                                                        
                                                    </div>
                                                
                                            </CardBody>
                                        </Card>
                                    </Col>

                        ))
                    }
                    </Row>
            </Container>
    )
}

export default Category