import React, { useState } from 'react'
import { cartContext } from './cartContext'

function CartContextProvider({ children }) {

    const [cart, setCart] = useState([])

    return (
        <cartContext.Provider value={{ cart, setCart }} >
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider