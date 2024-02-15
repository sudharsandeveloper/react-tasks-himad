import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const AddToCart = (id) => {
       setCart([...cart,id]);
    };

    return(
        <CartContext.Provider value={{cart, AddToCart}}>
            {children}
        </CartContext.Provider>
    )

};

export {CartContext, CartProvider};