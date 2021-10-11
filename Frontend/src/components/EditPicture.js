import React, { useContext } from 'react';
import { CardImg } from "reactstrap";
import { ProductContext } from "../components/ProductProvider.js";

function EditPicture({product, i}) {
    
    // const {handleRemoveImage} = useContext(ProductContext);
    const showPicture = async() => {
            console.log("chosenpictureProduct", product.image.public_id);
    }
    console.log("product", product);

    return (
        <>
            <span style={{position:"absolute", top:"0",left:"47%",paddingLeft:"6px", width:"25px", height:"25px", color:"white",border:"1px solid ", cursor:"pointer", backgroundColor:"darkorange"}} 
            >X</span>
            <CardImg onClick={showPicture} className="productImg" top  style={{height:"100%", width:"50%", objectFit:"cover"}} src={product.image["url"]} alt="Card image cap" />
        </>
    )
}

export default EditPicture
