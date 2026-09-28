import React from 'react'
import { Link } from "react-router-dom"

function ProductCard({ product }) {
    return (
        <Link
            to={`/products/${product.slug}`}
            className="group block w-full max-w-[260px]"
        >
            {/* Image */}
            <div className="w-full aspect-square overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
            </div>

            {/* Product information */}
            <div className="text-center pt-4">

                <h2 className="font-body text-sm leading-5">
                    {product.name}
                </h2>

                <p className="font-body text-base mt-3">
                    ₹ {product.price}.00
                </p>

            </div>
        </Link>
    )
}

export default ProductCard