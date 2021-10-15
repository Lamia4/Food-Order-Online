import React, { useState, useEffect } from 'react';
import { CardImg, Input, FormGroup } from "reactstrap";
import deleteImage from "../API/deleteImage.js";
import uploadImage from "../API/uploadImage.js";
import "./EditCategory.css";

function EditCategoryPicture({category, i, newCategory, setNewCategory}) {
    const [showImage, setShowImage] = useState(true);
    const [image, setImage] = useState(category.image);
    console.log("category:",category)
    const styleEdit = { 
            display: showImage? "block" : "none"
    }
    useEffect (()=> {
            setNewCategory({...newCategory, image: image});
            console.log("newCategory", newCategory);
    }, [image])

    const removePicture = async () =>{
            console.log("es wird hier geklickt");
            const imagePublicId = {public_id:category.image.public_id};
            const data = await deleteImage(imagePublicId);
            console.log("data result:",data); 
            setShowImage(false)    
    
        }

        const handleImage = async(e) => {
            e.preventDefault();

            const file = e.target.files[0];
            let formData = new FormData();
            formData.append('file', file);
    
            
            const data = await uploadImage(formData);
            setImage(data);
            setShowImage(true);
            console.log("data", data);
            // console.log("image id:", data.public_id);
            
            return data;
        }
        console.log("newImage", image);

    return (
        <>  
         <FormGroup className="upload2 " style={{height: "65%", position: "relative", width:"100%", maxWidth:"450px"}}> 
            <Input onChange={handleImage} type="file" name="file" id="file_up"/>
            <div id="file_img" style={styleEdit}>
            <CardImg  src={showImage? image["url"] : ""}  />
            <span onClick={removePicture}>X</span>
            </div>
        </FormGroup>

        </>
    )
}

export default EditCategoryPicture