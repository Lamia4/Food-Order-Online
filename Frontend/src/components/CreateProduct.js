import React, {useState, useEffect, useContext} from 'react';
import {
  CardImg, Button, Row, Col, Input,FormGroup,Label
} from 'reactstrap';
import sampleImg from "../img/karePizza.jpg";
import "./CreateProduct.css";
import {getCategories} from '../API/getCategories.js';
import {postProduct} from '../API/postProduct.js';

import {ProductContext} from "../components/ProductProvider.js";
import {LoginContext} from "../components/LoginProvider.js";

function CreateProduct() {
    const {handleImage, image, setImage, categories, setCategories, category, setCategory, inputTitle, setInputTitle, inputDesc, setInputDesc, inputPrice, setInputPrice, categoryProducts, categoriesProduct, setCategoryProducts, handleRemoveImage} = useContext(ProductContext);

    const {user} = useContext(LoginContext)

    useEffect(() => {
        getCategories()
        .then(categories => {
            setCategories(categories);
        })
    },[]);


    const handleCategory = (e) =>{
        setCategory(e.target.value);    
    }

    
    
    const styleUpload = {
        display: image ? "block" : "none"
    }
    
    const handleInputTitle = (e) =>{
        setInputTitle(e.target.value)
    }
    const handleInputDesc = (e) =>{
        setInputDesc(e.target.value)
    }
    const handleInputPrice = (e) =>{
        setInputPrice(e.target.value)
    }
  
    const handleAddProduct = () =>{
        const newProduct = 
        {
            title: inputTitle,
            description: inputDesc,
            image: image,
            price: inputPrice,
            category: category, 
            userId: user._id,
        }

        console.log(newProduct);
        postProduct(newProduct);
        categoryProducts.unshift(newProduct);
        console.log("categoriesProduct", categoryProducts)
        console.log(newProduct);


        setInputTitle("");
        setInputDesc("");
        setInputPrice("");
        setCategory("");
        setImage("");
    }

    return (

        <Row xs={1} md={2} lg={3}  className="create_product mb-5">
             <Col className="imageColumn" style={{ display:"flex", alignItems:"center"}}>
             <FormGroup className="upload">            
                <Input type="file" name="file" id="file_up"  onChange={(e)=>handleImage(e)}/>
                    <div id="file_img" style={styleUpload}>
                        <CardImg src={image ? image.url : ''} alt="image"/>
                        <span onClick={handleRemoveImage}>X</span>
                    </div>
            </FormGroup>
            </Col>
            
            <Col className="formCard" style={{flexDirection:"column", display:"flex", backgroundColor:"#C58882"}} >
                       
                       <FormGroup style={{width:"100%", margin:"10px 0"}}>
                             <Label for="exampleTitle"><b>Title: </b></Label>
                            <Input type="text"  name="title" id="exampleTitle" placeholder="Write a title" onChange={handleInputTitle} value={inputTitle} required />
                       </FormGroup>
                         <FormGroup style={{width:"100%", margin:"15px 0"}}>
                             <Label for="exampleDesc"> <b>Description: </b></Label>
                             <Input type="textarea" required name="desc" id="exampleDesc" placeholder="Write description" value={inputDesc} onChange={handleInputDesc}/>
                         </FormGroup>
                         <FormGroup style={{width:"100%", margin:"15px 0"}}>
                             <Label for="examplePrice"> <b>Price: </b></Label>
                             <Input type="text" required name="price" id="examplePrice" placeholder="Write price" value={inputPrice} onChange={handleInputPrice}/>
                         </FormGroup>
                         <FormGroup style={{width:"100%", margin:"15px 0"}}>
                             <Label for="exampleSelect"><b>Select a Category:</b> </Label>
                             <Input type="select" required name="select" value={category} onChange={handleCategory} id="exampleSelect" >
                            <option>Please select a category</option>

                             {
                            categories.map((category)=>
                            {
                                return(
                                    <option value={category._id} key={category._id}>{category.name}</option>
                                )
                            })
                        
                        }  
                           
                            </Input>
                        </FormGroup>
                        <FormGroup style={{display:"flex", justifyContent:"flex-end"}}>
                            <Button onClick={handleAddProduct} style={{width:"200px",backgroundColor:"#A61C3C", color:"white", 
                            textTransform:"uppercase", fontWeight:"700", border:"none", borderRadius:"10px"}}>Add</Button>
                        </FormGroup>
                </Col>
        </Row>





       
    )
}

export default CreateProduct