import {useState, createContext, useEffect, useContext} from 'react';
import {LoginContext} from "../components/LoginProvider.js";

export const CartContext = createContext("");

function CartProvider({children}) {

    const [cart, setCart] = useState([]);
    const [cartObj, setCartObj] = useState({});
    const [total, setTotal] = useState(0);

    useEffect(() => {
        
        const newCartObj = JSON.parse(localStorage.getItem("cart"));
        setCartObj(newCartObj);
        console.log("obj from localstorage", newCartObj);
        // setCart(newCartObj)

    }, [cart])

    useEffect(() => {
        
        const newCartObj = JSON.parse(localStorage.getItem("cart"));
        if(newCartObj == null){
            setCart(cart)
        } else {

            setCart(newCartObj)
        }
        console.log("obj from localstorage", newCartObj);

    }, [])

    const addToCart = (product) => {
        
        console.log("product", product);
        let newArray = [...cart];

        let isProductInCart = false;
        newArray.forEach(item => {
            if(item._id === product._id){
                item.quantity++;
                isProductInCart = true;
            }
        });
        console.log("newArray", newArray);

        if(!isProductInCart){
            const newProduct = {...product, quantity: 1};
            console.log("newProduct", newProduct);
            newArray.push(newProduct)
        }
       
        setCart(newArray);
        localStorage.setItem("cart", JSON.stringify(newArray));
    }

    const removeFromCart = (key) => {
        
        const newArray = cart.filter((item, index) => index !== key);
        setCart(newArray);
        localStorage.setItem("cart", JSON.stringify(newArray));
    }
    const decrementCount = (product) => {
        let newArray = [...cart];

        
        newArray.forEach(item => {
            if(item._id === product._id && item.quantity > 1){
                item.quantity--;           
            }
        });
        setCart(newArray);
        localStorage.setItem("cart", JSON.stringify(newArray));
    }
    const showCount = (cart) => {
        const arrayY = cart.cart.map(item => item.quantity)
        const result = arrayY.reduce(function(acc, current) {return acc+current}, 0);
        return result
    }
    return (
        <CartContext.Provider value={{cart, setCart, addToCart, removeFromCart, decrementCount, showCount, total, setTotal, cartObj, setCartObj}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
