import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from "../data/products"

function ProductDetails() {

    const { slug } = useParams()
    const product = products.find(product => product.slug === slug)

    return (
        <div className="grid grid-cols-2 gap-12 px-16 py-16">

            {/* Product Image */}
            <div className="w-full aspect-square overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Product Information */}
            <div className="flex flex-col justify-center">

                <p className="text-sm">
                    Category: {product.category}
                </p>

                <h1 className="text-3xl font-bold mt-3">
                    {product.name}
                </h1>

                <p className="text-xl mt-4">
                    ₹ {product.price}
                </p>

                <p className="mt-6 leading-7 max-w-lg">
                    {product.description}
                </p>

            </div>

        </div>
    );
}

export default ProductDetails