import {useState, createContext} from 'react';

export const CartContext = createContext("");

function CartProvider({children}) {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const newArray = [...cart, product];
        setCart(newArray);
    } 
    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
