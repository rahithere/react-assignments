import React from "react";
import products from "../products";
import ProductCard from "./ProductCard";

export default function ProductList() {

    return (
        <div className="w-[60%] mx-auto flex flex-wrap gap-8 p-8">
            {products.map((product) => (
                <ProductCard key={product.id} image={product.image} title={product.title} category={product.category} price={product.price} rating={product.rating} inStock={product.inStock} />
            ))}
        </div>
    )
}