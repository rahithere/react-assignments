import React, { useState } from "react";

export default function ProductCard({ image, title, category, price, rating, inStock }) {

    const [succ, setSucc] = useState()

    const cartHandler = () => {
        if (inStock) {
            setSucc(true)
        } else {
            setSucc(false)
        }
    }


    return (
        <div className="w-77.5 rounded-3xl bg-white p-3 shadow-sm border border-gray-200">
            {/* Image section */}

            <div className="h-61.25 rounded-[20px] bg-[#f1f1f1] p-4">
                <img
                    src={image}
                    alt="Nike Dunk"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Product info */}
            <div className="px-1 pt-4">
                <h2 className="text-lg font-medium text-gray-900">
                    {title}
                </h2>
                <p className="mt-2 text-base text-gray-800">
                    {category}
                </p>
                <p className="mt-2 text-base text-gray-800">
                    {` ⭐  ${rating}`}
                </p>
                <p className="mt-2 text-gray-800 text-2xl">
                    {`₹ ${price}`}
                </p>
            </div>

            {/* Button */}
            <button className="mt-4 w-full rounded-full bg-[#292929] py-3 text-sm font-medium text-white"
                onClick={cartHandler}
                disabled={!inStock}
            >
                {!inStock ? "unavailable" : succ ? "Added" : "Add to cart"}
            </button>
        </div>
    )
}
