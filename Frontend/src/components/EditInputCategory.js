import React, { useContext } from 'react';
import { Input } from "reactstrap";
import { ProductContext } from "../components/ProductProvider.js";


function EditInputCategory({category, i, setNewCategory, newCategory}) {
    const {changedCategory, setChangedCategory} = useContext(ProductContext);
    setChangedCategory(newCategory);
    console.log("newCategory", newCategory);
    return (
        <div>
            <Input className="mb-2" defaultValue={category.name}  onChange={(e) => setNewCategory({...category, name: e.target.value})} type="text"  name="title" id="exampleTitle1"/>
        </div>
    )
}

export default EditInputCategory
