import React, { useContext, useState} from 'react';
import { Card, CardTitle,CardSubtitle, Button,CardText, CardImg,Col,CardBody, } from 'reactstrap';
import { ProductContext } from "./ProductProvider.js";
import {deleteProduct, editProduct} from '../API/postProduct';
import deleteImage from '../API/deleteImage';
import EditInputProduct from "./EditInputProduct.js";
import EditPicture from "./EditPicture.js";
import {LoginContext} from "../components/LoginProvider.js";

function EditProduct({product, i, getCategoryProducts}) {
    const {categoryProducts, changedProduct} = useContext(ProductContext);
    const [key, setKey] = useState("");
    const [isEditable, setIsEditable] = useState(false);
    const [chosenProduct, setChosenProduct] = useState(false);
    const [newProduct, setNewProduct] = useState({title:product.title, description:product.description, price:product.price, image:product.image});

    const {user} = useContext(LoginContext)
    const handleRemove = async(category)=>{
        await deleteProduct(category._id, user._id);
        await deleteImage({public_id:category.image.public_id});
        getCategoryProducts()
    }
    const handleEdit = async(key)=>{

        setChosenProduct(true);
        setIsEditable(!isEditable);
        setKey(key);
    }
    
    const handleCancelEdit = async() => {
        setChosenProduct(false)
        setIsEditable(false);
    }

    const handleSave = async() => {
        await editProduct(product._id, changedProduct.title, Number(changedProduct.price), changedProduct.description, changedProduct.image, changedProduct.category);
        setChosenProduct(false);
        setIsEditable(false);
        getCategoryProducts();
    }
    return (
        <Col xs ={10}sm={9} md={12} lg={9} key={i} className=" mb-3  menuColumn">

                                        <Card className="border-2 d-flex flex-md-row productCard">
                                            {chosenProduct? 
                                            <EditPicture product={product} key={i} newProduct={newProduct} setNewProduct={setNewProduct}/>
                                            :
                                            <>
                                            <span style={{position:"absolute", top:"0",left:"0",paddingLeft:"6px", width:"25px", height:"25px", color:"white",border:"1px solid ", cursor:"pointer", backgroundColor:"#A61C3C"}} 
                                            onClick={()=>handleRemove(product)}>X</span>
                                            <CardImg className="productImg" top  style={{height:"100%", width:"50%", objectFit:"cover"}} src={product.image["url"]} alt="Card image cap" />
                                            </>
                                            }
                                            <CardBody className="productBody " style={{height:"100%", width:"50%"}}>
                                                {chosenProduct? 
                                                <EditInputProduct product={product} i={i} handleSave={handleSave} handleRemove={handleRemove} newProduct={newProduct} setNewProduct={setNewProduct}/>
                                                :
                                                <>
                                                <CardTitle style={{textTransform:"capitalize"}} className="productTitle mb-md-3 ">{product.title}</CardTitle>
                                                <CardText className="productText mb-md-5 ">{product.description}</CardText>
                                                <CardSubtitle tag="h6" className="productPrice">{product.price}€</CardSubtitle>
                                                        </>
                                                        }
                                                    <div className="priceAndButtonDiv " style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                                                        {isEditable?
                                                            <>
                                                            <Button style={{padding: "5px 15px", borderRadius: "10px", background: "#A61C3C", color: "white", border:"none"}} className="productButton" onClick={() => handleCancelEdit()} > Cancel Edit</Button>
                                                            <Button style={{padding: "5px 15px", borderRadius: "10px", background: "#A61C3C", color: "white", border:"none"}} className="productButton" onClick={() => handleSave()}>Save</Button>
                                                            </> 
                                                            :
                                                            <Button style={{padding: "5px 15px", borderRadius: "10px", background: "#A61C3C", color: "white", border:"none"}} className="productButton" onClick={()=>handleEdit(product.key)}>Edit
                                                            </Button>
                                                        }
                                                        
                                                    </div>
                                                
                                            </CardBody>
                                        </Card>
                                    </Col>
    )
}

export default EditProduct
