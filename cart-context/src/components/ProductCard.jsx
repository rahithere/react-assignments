import React, { useContext, useState } from 'react'
import { cartContext } from '../context/cartContext'

function ProductCard({ product }) {
    const [count, setCount] = useState(0)
    const { cart, setCart } = useContext(cartContext)
    const handleClick = () => {
        setCart([...cart, product])
        setCount((prev) => prev + 1)
    }
    return (
        <div className="w-[200px] bg-transparent m-4">

            {/* Image */}
            <div className="w-full h-[200px] bg-gray-100 overflow-hidden rounded-md">

                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Details */}
            <div className="px-2 py-3">
                <h2 className="text-sm font-medium text-gray-800">
                    {product.name}
                </h2>

                <div className="flex items-center gap-1 mt-2 text-sm">
                    <span>★ ★ ★ ★ ★</span>
                    <span className="text-gray-500">(1)</span>
                </div>

                <p className="mt-3 text-base font-medium text-gray-800">
                    Rs. {product.price}
                </p>

                <button className='w-fit bg-[#111111] text-white pl-4 pr-4 pt-1 pb-1 mt-2 rounded-sm hover:bg-black'
                    onClick={handleClick}
                >Add to cart</button>
                {count !== 0 ? <span className='text-green-500'> x{count}</span> : null}
            </div>

        </div>
    )
}

export default ProductCard