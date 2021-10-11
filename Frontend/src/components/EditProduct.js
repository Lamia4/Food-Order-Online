import React, { useContext, useState} from 'react';
import { Card, CardTitle,CardSubtitle, Button,CardText, CardImg,Col,CardBody, } from 'reactstrap';
import { ProductContext } from "../components/ProductProvider.js";
import { deleteProduct, editProduct } from '../API/postProduct';
import deleteImage from '../API/deleteImage';
import EditInputProduct from "../components/EditInputProduct.js";
import EditPicture from "../components/EditPicture.js";

function EditProduct({product, i}) {
    const {categoryProducts, getCategoryProducts,editProduct, categories} = useContext(ProductContext);
    const [key, setKey] = useState("");
    const [isEditable, setIsEditable] = useState(false);
    const [chosenProduct, setChosenProduct] = useState(false);

    const handleRemove = async(category)=>{
        await deleteProduct(category._id);
        await deleteImage({public_id:category.image.public_id});
        await getCategoryProducts();
    }

    const handleEdit = async(key)=>{

        setChosenProduct(true);
        setIsEditable(!isEditable);
        setKey(key);
        console.log("key", key);
    }
    console.log("products", categoryProducts);
    
    const handleCancelEdit = async() => {
        setChosenProduct(false)
        setIsEditable(false);
    }

    const handleSave = async() => {
        setChosenProduct(false);
        setIsEditable(false);
        console.log("saved");
    }
    return (
        <Col xs ={10}sm={9} md={12} lg={9} key={i} className=" mb-3  menuColumn">

                                        <Card className="border-2 d-flex flex-md-row productCard">
                                            {chosenProduct? 
                                            <EditPicture product={product} i={i}/>
                                            :
                                            <>
                                            <span style={{position:"absolute", top:"0",left:"0",paddingLeft:"6px", width:"25px", height:"25px", color:"white",border:"1px solid ", cursor:"pointer", backgroundColor:"darkorange"}} 
                                            onClick={()=>handleRemove(product)}>X</span>
                                            <CardImg className="productImg" top  style={{height:"100%", width:"50%", objectFit:"cover"}} src={product.image["url"]} alt="Card image cap" />
                                            </>
                                            }
                                            <CardBody className="productBody " style={{height:"100%", width:"50%"}}>
                                                {chosenProduct? 
                                                <EditInputProduct product={product} i={i} handleSave={handleSave} handleRemove={handleRemove}/>
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
                                                            <Button style={{padding: "5px 15px", borderRadius: "10px", background: "darkorange", color: "white", border:"none"}} className="productButton" onClick={() => handleCancelEdit()} > Cancel Edit</Button>
                                                            <Button style={{padding: "5px 15px", borderRadius: "10px", background: "darkorange", color: "white", border:"none"}} className="productButton" onClick={() => handleSave()}>Save</Button>
                                                            </> 
                                                            :
                                                            <Button style={{padding: "5px 15px", borderRadius: "10px", background: "darkorange", color: "white", border:"none"}} className="productButton" onClick={()=>handleEdit(product.key)}>Edit
                                                            </Button>
                                                        }
                                                        
                                                    </div>
                                                
                                            </CardBody>
                                        </Card>
                                    </Col>
    )
}

export default EditProduct
