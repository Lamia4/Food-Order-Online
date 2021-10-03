import React, {useState, useEffect} from 'react';
import {
  CardImg, CardText, Button, Row, Col, Input,FormGroup,Label
} from 'reactstrap';
import sampleImg from "../img/pizza2.jpg";
import "./CreateProduct.css";
import getCategories from '../API/getCategories.js';


function CreateProduct() {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");

    useEffect(() => {
        getCategories()
        .then(categories => {
            setCategories(categories);
        })
    },[]);

    // const [image, setImage] = useState(false);
    const handleRemove = () =>{

    }
    const handleUpload = () =>{
        
    }
    const handleCategory = (e) =>{
        setCategory(e.target.value);
        
    }
    // const styleUpload = {
    //     display: image ? "block" : "none"
    // }
    return (
            <Row xs={1} md={2} lg={3} className="" style={{justifyContent:"center", display:"flex",marginBottom:"25px" }}>
                <Col className=" mb-5 " style={{justifyContent:"center", display:"flex"}}>
                        <FormGroup className="upload " >
                            <Input type="file" name="file" id="file_up" onChange={handleUpload} />
                            <div  id="file_img" >
                                <CardImg top width="100%"  src={sampleImg} alt="sample Image" />
                                <CardText className="removeImg" onClick={handleRemove}>X</CardText>
                            </div>
                        </FormGroup>
                </Col>
                <Col className=" formCard" style={{justifyContent:"",flexDirection:"column", display:"flex", backgroundColor:" darkorange"}} >
                        <FormGroup className="" style={{width:"100%", margin:"15px 0"}}>
                            <Label for="category_id"> <b>Product ID: </b></Label>
                            <Input type="text" required name="category_id" id="category_id" placeholder="Write a title" value="" />
                        </FormGroup>
                        <FormGroup className="" style={{width:"100%", margin:"10px 0"}}>
                            <Label for="exampleTitle"> <b>Title: </b></Label>
                            <Input type="text" required name="title" id="exampleTitle" placeholder="Write a title" value="" />
                        </FormGroup>
                        <FormGroup className="" style={{width:"100%", margin:"5px 0"}}>
                            <Label for="exampleDesc"> <b>Description: </b></Label>
                            <Input type="textarea" required name="desc" id="exampleDesc" placeholder="Write description" value=""/>
                        </FormGroup>
                        <FormGroup className="" style={{width:"100%", margin:"15px 0"}}>
                            <Label for="examplePrice"> <b>Price: </b></Label>
                            <Input type="text" required name="price" id="examplePrice" placeholder="Write price" value=""/>
                        </FormGroup>
                        <FormGroup className="" style={{width:"100%", margin:"15px 0"}}>
                            <Label for="exampleSelect"><b>Select a Category:</b> </Label>
                            <Input type="select" required name="select" value="" onChange={handleCategory}id="exampleSelect" >
                            <option value="">Please select a category</option>

                            {
                            categories.map((category)=>
                            {
                                return(
                                    <option value={"category=" + category._id} key={category._id} >{category.name}</option>
                                )
                            })
                        
                        }  
                           
                            </Input>
                        </FormGroup>
                        <FormGroup style={{display:"flex", justifyContent:"flex-end"}}>
                            <Button style={{width:"200px",backgroundColor:"white", color:"darkorange", textTransform:"uppercase", fontWeight:"700", border:"none", borderRadius:"10px"}}>Add</Button>
                        </FormGroup>
                </Col>
                {/* if it is on edit change button to UPDATE with useState */}
            </Row>
            
       
    )
}

export default CreateProduct