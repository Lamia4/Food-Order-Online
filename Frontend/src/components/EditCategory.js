import React, { useState, useContext } from 'react';
import {Card, CardTitle, Button, CardImg,Col,CardBody, CardText} from 'reactstrap';
import { Link } from "react-router-dom";
import EditCategoryPicture from "../components/EditCategoryPicture.js";
import EditInputCategory from "../components/EditInputCategory.js";
import {deleteCategory, editCategory} from '../API/getCategories.js';
import deleteImage from "../API/deleteImage.js";
import { ProductContext } from "./ProductProvider.js";

function EditCategory({category, i, getCategoriesData}) {

    const [isEditable, setIsEditable] = useState(false);
    const [chosenProduct, setChosenProduct] = useState(false);
    const [key, setKey] = useState("");
    const [newCategory, setNewCategory] = useState({name:category.name, image:category.image});
    const { changedCategory} = useContext(ProductContext);

    const handleRemove = async(category)=>{
        await deleteCategory(category._id);
        await deleteImage({public_id:category.image.public_id});
        getCategoriesData()
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
        await editCategory(category._id, changedCategory.name, changedCategory.image );
        setChosenProduct(false);
        setIsEditable(false);
        getCategoriesData()
    }
    return (
        <>
            <Col key={i} xs ={10} md={6} lg={4} style={{height:"55vh"}} className=" mb-3">
                <div className="categoryCardEdit">
                    <Card className="d-flex " style={{color:"black", height:"100%"}}  inverse >
                      {chosenProduct?
                      <EditCategoryPicture category={category} key={i} newCategory={newCategory} setNewCategory={setNewCategory}/>
                      :
                      <CardImg  src={category.image["url"]} style={{height
                      :"100%"}}/>

                      }
                       <CardBody className="cardBodyEdit">
                      {chosenProduct? 
                      <EditInputCategory category={category} key={i} newCategory={newCategory} setNewCategory={setNewCategory}/>
                      :
                        <>                   
                            <CardTitle>
                                <h1>{category.name}</h1>
                            </CardTitle>
                        </>
                      }                  
                        {isEditable ?
                        <>
                        <Button className="categoryButtonEdit1" onClick={() => handleCancelEdit()}>Cancel Edit</Button>
                        <Button className="categoryButtonEdit2" onClick={() => handleSave()}>Save</Button>
                        </>
                        :
                        <>
                        <Link to={`/products/${category.name.toLowerCase()}`}><Button className="categoryButton">See more</Button></Link>
                        <Button className="categoryButtonEdit" onClick={()=>handleEdit(category.key)}>Edit</Button>
                        <Button className="categoryButtonDelete" onClick={()=>handleRemove(category)}>Delete</Button>
                        </>
                        }

                        </CardBody>
                    </Card>
                </div>
            </Col>
        </>
    )
}

export default EditCategory