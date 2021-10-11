import {useState, createContext} from 'react';
import uploadImage from "../API/uploadImage.js";

export const ProductContext = createContext("");

function ProductProvider({children}) {

    const[product, setProduct] = useState("");
    const [image, setImage] = useState("");
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [isEditable, setIsEditable] = useState(false);
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

    const handleImage = async (e) =>{
        e.preventDefault();

        const file = e.target.files[0];
        let formData = new FormData();
        formData.append('file', file);

        
        const data = await uploadImage(formData);
        console.log("data", data);
        console.log("image id:", data.public_id);
        setImage(data);
        
    }
    return (
        <ProductContext.Provider value={{product, setProduct, image, setImage, categoryProducts, setCategoryProducts, isEditable, setIsEditable, categories, setCategories, category, setCategory, inputTitle, setInputTitle, inputDesc, setInputDesc, inputPrice, setInputPrice, productObj, setProductObj, saved, setSaved, handleImage, editProduct, setEditProduct}}>
            {children}
        </ProductContext.Provider>
    )
};

export default ProductProvider