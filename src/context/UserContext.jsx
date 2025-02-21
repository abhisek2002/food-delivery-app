import React, { createContext, useState } from 'react'
import food_items from '../food';

export const dataContext = createContext();

const UserContext = ({ children }) => {

    let [Category, setCategory] = useState(food_items);
    let [input,setInput] = useState("");
    let [showCart,setShowCart] = useState(false);
    let data = {
        input,
        setInput,
        Category,
        setCategory,
        showCart,
        setShowCart
    }

    return (
        <div>
            <dataContext.Provider value={data}>
                {children}
            </dataContext.Provider>
        </div>
    )
}

export default UserContext