import {useState, createContext} from 'react';

export const CartContext = createContext("");

function CartProvider({children}) {

    const [cart, setCart] = useState([]);
    // getItem localstorage damit cart immer angezeigt wird

    const addToCart = (product) => {
        
        let newArray = [...cart];

        let isProductInCart = false;
        newArray.forEach(item => {
            if(item._id === product._id){
                item.quantity++;
                isProductInCart = true;
            }
        });

        if(!isProductInCart){
            newArray.push(product)
        }
        
        // cart.map(item => item === product? 
        //        newArray = [...newArray, {...item, quantity: item.quantity+1}] :
        //        newArray = [...newArray, product]
        //     //    newArray = [...cart, product]
        // )
        setCart(newArray);
        // console.log("result", cart);
    }

    const removeFromCart = (key) => {
        
        const newArray = cart.filter((item, index) => index !== key);
        setCart(newArray);
    }

    const decrementCount = (product) => {
        let newArray = [...cart];

        
        newArray.forEach(item => {
            if(item._id === product._id && item.quantity > 1){
                item.quantity--;           
            }
        });
        setCart(newArray);
        // console.log("resultDecrement", cart);
    }

    const showCount = (cart) => {
        const arrayY = cart.cart.map(item => item.quantity)
        console.log("iconCount", cart.cart, arrayY);
        const result = arrayY.reduce(function(acc, current) {return acc+current}, 0);
        return result
    }

    // const showCurrentCart = (obj) => {
    //     const newCartObj = JSON.parse(localStorage.getItem("cart"));
    //         console.log(newCartObj);
    //         if(obj.name === newCartObj[0].name) {
    //             setCart(newCartObj[1]);
    //         } else {
    //             setCart([])
    //         }
    // }

    return (
        <CartContext.Provider value={{cart, setCart, addToCart, removeFromCart, decrementCount, showCount}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
