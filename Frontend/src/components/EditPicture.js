import React, { useState } from 'react';
import { CardImg, Input, FormGroup } from "reactstrap";
import { ProductContext } from "../components/ProductProvider.js";
import deleteImage from "../API/deleteImage.js";

function EditPicture({product, i}) {
    
        const [showImage, setShowImage] = useState(true);
        const styleEdit = { 
            display: showImage? "block" : "none"
        }
        const removePicture = async () =>{
            const imagePublicId = {public_id:product.image.public_id};
            const data = await deleteImage(imagePublicId);
            console.log("data result:",data); 
            setShowImage(false)    
    
        }
            console.log("chosenpictureProduct", product.image.public_id);
    
    console.log("product", product);

    return (

        <>  
            <FormGroup className="upload1" style={{height: "55vh", position: "relative", width:"100%", maxWidth:"450px"}}> 
            <Input type="file" name="file" id="file_up"/>
            <div id="file_img" style={styleEdit}>
            <span onClick={removePicture}>X</span>
            {/* <span style={{position:"absolute", top:"0",left:"47%",paddingLeft:"6px", width:"25px", height:"25px", color:"white",border:"1px solid ", cursor:"pointer", backgroundColor:"darkorange"}} onClick={removePicture}>X</span> */}
            <CardImg className="productImg" top  style={{height:"55vh", width:"100%", objectFit:"cover", styleEdit}} src={showImage? product.image["url"] : ""} alt="Card image cap" />
            </div>
            </FormGroup>
            {/* <FormGroup className="upload">            
                <Input type="file" name="file" id="file_up"  onChange={(e)=>handleImage(e)}/>
                    <div id="file_img" style={styleUpload}>
                        <CardImg src={image ? image.url : ''} alt="image"/>
                        <span onClick={handleRemoveImage}>X</span>
                    </div>
            </FormGroup> */}
        </>
    )
}

export default EditPicture
