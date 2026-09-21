import React, { useState } from 'react'
import products from '../products'
import SearchBar from './SearchBar'
import Category from './Category'
import ProductCard from './ProductCard'

function ProductList() {
    const categories = [
        "All Categories",
        "Accessories",
        "Audio",
        "Footwear",
        "Home"
    ]

    const [selectedCategory, setSelectedCategory] = useState('All Categories')
    const [searchTerm, setSearchTerm] = useState("")

    // const filteredProducts = selectedCategory === "All Categories" ? products : products.filter(product => product.category === selectedCategory)

    // const filterByName = products.filter(product => )
    // console.log(filterByName)

    const filteredProducts = products.filter(product => (
        (selectedCategory === "All Categories" || product.category === selectedCategory)
        && product.title.toLowerCase().includes(searchTerm.toLowerCase())
    ))

    return (
        <>
            {/* search + category holder  */}
            <div className='w-full max-w-2xl mx-auto flex items-center justify-between rounded-xl bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.08)]'>

                <SearchBar setSearchTerm={setSearchTerm} />
                <Category categories={categories} setSelectedCategory={setSelectedCategory} />
            </div>

            {/* product-card-holder  */}
            <div className="product-grid">
                <div className="w-[60%] mx-auto flex flex-wrap gap-8 p-8">

                    {filteredProducts.length > 0 ? filteredProducts.map(product => (
                        <ProductCard key={product.id} image={product.image} title={product.title} category={product.category} price={product.price} rating={product.rating} inStock={product.inStock} />
                    )) : <p>No product Matches</p>}
                </div>
            </div>
        </>

    )
}

export default ProductList