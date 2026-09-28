import { wishListContext } from "./wishListContext";

import React, { useState } from 'react'

function wishListContextProvider({ children }) {

    const [wishList, setWishList] = useState([])

    const addToWishList = (product) => {
        setWishList((prev) => ([...prev, product]))
    }
    const removeFromWishList = (productId) => {
        setWishList(prev => (
            prev.filter((product) => (product.id !== productId))
        ))
    }

    return (
        <wishListContext.Provider value={{ wishList, addToWishList, removeFromWishList }}>
            {children}
        </wishListContext.Provider>
    )
}

export default wishListContextProvider