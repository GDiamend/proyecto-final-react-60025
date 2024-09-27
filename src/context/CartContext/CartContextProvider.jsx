import { useState } from "react"
import CartContext from "./CartContext"

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (item, q) => {

        const itemExist = cart.find((el) => el.id === item.id);

        if (itemExist) {
            setCart(
                cart.map((el) =>
                    el.id === item.id ? { ...el, quantity: el.quantity + q } : el
                )
            );
        } else {
            setCart([
                ...cart,
                {
                    ...item,
                    quantity: q
                }
            ]);
        };
    };

    const removeItem = (id) => {
        setCart(
            cart.filter((el) => el.id !== id)
        );
    }

    const clear = () => {
        setCart([]);
    }

    const calculatePrice = () => {
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        return total;
    }

    const values = {
        cart,
        addItem,
        removeItem,
        clear,
        calculatePrice
    }

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;