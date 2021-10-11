import React, {useContext, useState} from 'react';
import { Input } from "reactstrap";
import { ProductContext } from "../components/ProductProvider.js";

function EditInputProduct({product, i, handleSave}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    console.log("newTitle", title);
    const {categories} = useContext(ProductContext);
    return (
        <>
            
            <Input defaultValue={product.title} onChange={(e) => setTitle(e.target.value)} type="text"  name="title" id="exampleTitle1"/>
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
    )
}

export default EditInputProduct
