import products from '../products'
import React from 'react'
import ProductCard from './ProductCard'

function ProductList() {
    return (

        <div className="w-[40%] grid grid-cols-2 gap-8 p-8">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>

    )
}

export default ProductList