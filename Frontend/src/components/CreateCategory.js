import React, {useContext, useEffect, useState} from 'react'
import {postCategory} from "../API/getCategories"; 
import {
    CardImg, Button, Row, Col, Input,FormGroup,Label
  } from 'reactstrap';
import {ProductContext} from "./ProductProvider.js";
import {getCategories} from '../API/getCategories.js';
import uploadImage from "../API/uploadImage.js";
import deleteImage from "../API/deleteImage.js";


function CreateCategory({getCategoriesData}) {
    const [image, setImage] = useState("")
    const {  categories, setCategories, inputTitle, setInputTitle} = useContext(ProductContext);


    useEffect(() => {
        getCategories()
        .then(categories => {
            setCategories(categories);
        })
    },[]);

    const styleUpload = {
        display: image ? "block" : "none"
    }
    const handleImage = async (e) =>{
        e.preventDefault();

        const file = e.target.files[0];
        let formData = new FormData();
        formData.append('file', file);

        
        const data = await uploadImage(formData);
        console.log("data", data);
        console.log("image id:", data.public_id);
        setImage(data);
        
    }

    const handleRemoveImage = async () =>{
        const imagePublicId = {public_id:image.public_id};
        const data = await deleteImage(imagePublicId);
        console.log("data result:",data);     

        setImage(false)
    }
    const handleAddCategory = async () =>{
        const newCategory = 
        {
            name: inputTitle,
            image: image,
        }

        console.log(" new category", newCategory)
        console.log(newCategory);
        setCategories(...categories, newCategory);
        await postCategory(newCategory);


        setInputTitle("");
        setImage("");
        getCategoriesData();
    }
    const handleInputTitle = (e) =>{
        setInputTitle(e.target.value)
    }
    return (
        <div style={{marginBottom:"20px"}}>
            <Row xs={1} md={2} lg={3}  className="create_product mb-5 justify-content-center ">
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
                         
                           
                        <FormGroup style={{display:"flex", justifyContent:"flex-end"}}>
                            <Button onClick={handleAddCategory} style={{width:"200px",backgroundColor:"#A61C3C", color:"white", 
                            textTransform:"uppercase", fontWeight:"700", border:"none", borderRadius:"10px"}}>Add</Button>
                        </FormGroup>
                </Col>
        </Row>

        </div>
    )
}

export default CreateCategory