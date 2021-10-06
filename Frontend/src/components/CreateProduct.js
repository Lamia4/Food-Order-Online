import React, {useState, useEffect} from 'react';
import {
  CardImg, CardText, Button, Row, Col, Input,FormGroup,Label
} from 'reactstrap';
import sampleImg from "../img/pizza2.jpg";
import "./CreateProduct.css";
import getCategories from '../API/getCategories.js';
import postProduct from "../API/postProduct.js";


function CreateCategory() {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const [inputTitle, setInputTitle] = useState("");
    const [inputDesc, setInputDesc] = useState("");
    const [inputPrice, setInputPrice] = useState("");
    // const [inputImg, setInputImg] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        getCategories()
        .then(categories => {
            setCategories(categories);
        })
    },[]);

    const handleCategory = (e) =>{
        setCategory(e.target.value);
        
    }
    const handleRemove = () =>{

    }
    const handleImage = (e) =>{
        const file = e.target.files[0].name; // you can see the image info
        console.log("file info: ",file)
        if(file.type !== 'image/jpeg' && file.type !== 'image/png') return alert("File format is incorrect");
        setImage(file);
        console.log("image:",image)
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
            
        }
        console.log(newProduct);
        postProduct(newProduct);

        setInputTitle("");
        setInputDesc("");
        setInputPrice("");
        setCategory("");
    }
    return (

        <Row xs={1} md={2} lg={3}  className="create_product mb-5">
             <Col className=" imageColumn " style={{ display:"flex", alignItems:"center"}}>
             <FormGroup className="upload">            
                <Input type="file" name="file" id="file_up"  onChange={handleImage}/>
                    <div id="file_img" style={styleUpload}>
                        <CardImg src={image ? image.url : ''} alt=""/>
                        <span onClick={handleRemove}>X</span>
                    </div>
            </FormGroup>
            </Col>
            
            <Col className=" formCard " style={{justifyContent:"",flexDirection:"column", display:"flex", backgroundColor:" darkorange"}} >
                       
                       <FormGroup className="" style={{width:"100%", margin:"10px 0"}}>
                             <Label for="exampleTitle"> <b>Title: </b></Label>
                            <Input type="text"  name="title" id="exampleTitle" placeholder="Write a title" onChange={handleInputTitle} value={inputTitle} required />
                       </FormGroup>
                         <FormGroup className="" style={{width:"100%", margin:"15px 0"}}>
                             <Label for="exampleDesc"> <b>Description: </b></Label>
                             <Input type="textarea" required name="desc" id="exampleDesc" placeholder="Write description" value={inputDesc} onChange={handleInputDesc}/>
                         </FormGroup>
                         <FormGroup className="" style={{width:"100%", margin:"15px 0"}}>
                             <Label for="examplePrice"> <b>Price: </b></Label>
                             <Input type="text" required name="price" id="examplePrice" placeholder="Write price" value={inputPrice} onChange={handleInputPrice}/>
                         </FormGroup>
                         <FormGroup className="" style={{width:"100%", margin:"15px 0"}}>
                             <Label for="exampleSelect"><b>Select a Category:</b> </Label>
                             <Input type="select" required name="select" value={category} onChange={handleCategory} id="exampleSelect" >
                            <option value="">Please select a category</option>

                             {
                            categories.map((category)=>
                            {
                                return(
                                    <option value={category._id} key={category._id} >{category.name}</option>
                                )
                            })
                        
                        }  
                           
                            </Input>
                        </FormGroup>
                        <FormGroup style={{display:"flex", justifyContent:"flex-end"}}>
                            <Button onClick={handleAddProduct} style={{width:"200px",backgroundColor:"white", color:"darkorange", 
                            textTransform:"uppercase", fontWeight:"700", border:"none", borderRadius:"10px"}}>Add</Button>
                        </FormGroup>
                </Col>
        </Row>





       
    )
}

export default CreateCategory