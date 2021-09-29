import {useState, createContext} from 'react';

export const CartContext = createContext("");

function CartProvider({children}) {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const newArray = [...cart, product];
        setCart(newArray);
    }

    const removeFromCart = (key) => {
        
        const newArray = cart.filter((item, index) => index !== key);
        setCart(newArray);
    }
    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
