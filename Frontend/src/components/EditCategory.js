import React, { useState } from 'react';
import {Card, CardTitle, Button, CardImg,Col,CardBody, CardText} from 'reactstrap';
import { Link } from "react-router-dom";
import EditCategoryPicture from "../components/EditCategoryPicture.js";
import EditInputCategory from "../components/EditInputCategory.js";

function EditCategory({category, i}) {

    const [isEditable, setIsEditable] = useState(false);
    const [chosenProduct, setChosenProduct] = useState(false);
    const [key, setKey] = useState("");
    const [newCategory, setNewCategory] = useState({});

    const handleRemove = async(category)=>{
        // await deleteProduct(category._id);
        // await deleteImage({public_id:category.image.public_id});
        // await getCategoryProducts();
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
        console.log("saved");;
    }
    return (
        <>
            <Col key={i} xs ={10} md={6} lg={4} style={{height:"55vh"}} className=" mb-3">
                <div className="categoryCard">
                    <Card className="d-flex " style={{color:"black", height:"100%"}}  inverse >
                      {chosenProduct?
                      <EditCategoryPicture category={category} key={i} newCategory={newCategory} setNewCategory={setNewCategory}/>
                      :
                      <CardImg  src={category.image["url"]} style={{height
                      :"100%"}}/>

                      }
                       <CardBody className="cardBody">
                      {chosenProduct? 
                      <EditInputCategory category={category} key={i} newCategory={newCategory} setNewCategory={setNewCategory}/>
                      :
                        <>
                             <CardText className="bg-danger" style={{width:"26px", height:"26px", position:"absolute", top:"1px", left:"1px",  textAlign:"center", cursor:"pointer"}} onClick={()=>handleRemove(category)}>X</CardText>
                                                
                            <CardTitle>
                                <h1>{category.name}</h1>
                            </CardTitle>
                        </>
                      }                  
                        {isEditable ?
                        <>
                        <Button className="categoryButton" onClick={() => handleCancelEdit()}>Cancel Edit</Button>
                        <Button className="categoryButton" onClick={() => handleSave()}>Save</Button>
                        </>
                        :
                        <Button className="categoryButton" onClick={()=>handleEdit(category.key)}>Edit</Button>
                        }

                        </CardBody>
                    </Card>
                </div>
            </Col>
        </>
    )
}

export default EditCategory

