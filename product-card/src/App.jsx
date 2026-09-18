import { useState } from 'react'
import ProductCard from './components/ProductCard'
import ProductList from "./components/ProductList"


function App() {

  return (
    <>
      <div className="min-h-screen bg-[#DADADA] p-8">
        <p>Assignment:1 Make product cards with given product data</p>
        <ProductList />
      </div>
    </>
  )
}

export default App
