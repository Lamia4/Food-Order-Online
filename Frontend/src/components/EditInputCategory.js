import React, { useContext } from 'react';
import { Input } from "reactstrap";
import { ProductContext } from "../components/ProductProvider.js";
import "./EditCategory.css";

function EditInputCategory({category, i, setNewCategory, newCategory}) {
    const {changedCategory, setChangedCategory} = useContext(ProductContext);
    setChangedCategory(newCategory);
    console.log("newCategory", newCategory);
    return (
        <div>
            <Input className="mb-2 editCategoryInput" defaultValue={category.name}  onChange={(e) => setNewCategory({...newCategory, name: e.target.value})} type="text"  name="title" id="exampleTitle1"/>
        </div>
    )
}

export default EditInputCategory