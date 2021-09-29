import {useState, createContext} from 'react';

export const CartContext = createContext("");

function CartProvider({children}) {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const newArray = [...cart, product];
        setCart(newArray);
    }

    const removeFromCart = (product) => {
        const index = cart.indexOf(product);
        if (index > -1) {
          cart.splice(index, 1);
        }
    }
    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
