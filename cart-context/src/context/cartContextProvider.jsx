import React, { useState } from 'react'
import { cartContext } from '../components/ProductList'

function cartContextProvider({ childrens }) {

    const [cart, setCart] = useState(0)

    return (
        <cartContext.Provider value={{ cart, setCart }} >
            {childrens}
        </cartContext.Provider>
    )
}

export default cartContextProvider