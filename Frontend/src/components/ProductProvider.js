import {useState, createContext} from 'react';
import uploadImage from "../API/uploadImage.js";
import deleteImage from '../API/deleteImage';

export const ProductContext = createContext("");

function ProductProvider({children}) {

    const[product, setProduct] = useState("");
    const [image, setImage] = useState("");
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const [inputTitle, setInputTitle] = useState("");
    const [inputDesc, setInputDesc] = useState("");
    const [inputPrice, setInputPrice] = useState("");
    const [productObj, setProductObj] = useState({
        title: product.title,
        description: product.description,
        image: product.image,
        price: product.price,
        category: product.category });
    const [saved, setSaved] = useState(false);
    const [editProduct, setEditProduct] = useState({});
    const [changedProduct, setChangedProduct] = useState({});
    const [changedCategory, setChangedCategory] = useState({});

    const handleImage = async (e) =>{
        e.preventDefault();

        const file = e.target.files[0];
        let formData = new FormData();
        formData.append('file', file);
       
        const data = await uploadImage(formData);
        setImage(data);
        
    }

    const handleRemoveImage = async () =>{
        const imagePublicId = {public_id:image.public_id};
        await deleteImage(imagePublicId);
        setImage(false)
    }
    return (
        <ProductContext.Provider value={{product, setProduct, image, setImage, categoryProducts, setCategoryProducts, categories, setCategories, category, setCategory, inputTitle, setInputTitle, inputDesc, setInputDesc, inputPrice, setInputPrice, productObj, setProductObj, saved, setSaved, handleImage, editProduct, setEditProduct, handleRemoveImage, changedProduct, setChangedProduct, changedCategory, setChangedCategory}}>
            {children}
        </ProductContext.Provider>
    )
};

export default ProductProvider