import React from 'react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'



function Products() {
    return (
        <div className="grid grid-cols-4 gap-2 gap-y-3 px-10 py-20">
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}

        </div>
    )
}

export default Products