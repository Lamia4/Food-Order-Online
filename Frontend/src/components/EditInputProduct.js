import React, {useContext} from 'react';
import { Input } from "reactstrap";
import { ProductContext } from "../components/ProductProvider.js";

function EditInputProduct({product, setNewProduct, newProduct}) {
    
    const {categories, setChangedProduct} = useContext(ProductContext);
    setChangedProduct(newProduct);
    return (
        <>
            
            <Input className="mb-2" defaultValue={product.title}  onChange={(e) => setNewProduct({...newProduct, title: e.target.value})} type="text"  name="title" id="exampleTitle1"/>
            <Input className="mb-2" defaultValue={product.description} onChange={(e) => setNewProduct({...newProduct, description: e.target.value})} type="textarea" required name="desc" id="exampleDesc1" />
            <Input className="mb-2" defaultValue={product.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} type="text" required name="price" id="examplePrice1"/>
            <Input className="mb-2" defaultValue={product.category} onChange={(e) => setNewProduct({...newProduct, category: e.target.value})} type="select" required name="select" id="exampleSelect3" >
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
