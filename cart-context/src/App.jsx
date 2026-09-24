import { useContext, useState } from 'react'
import ProductList from './components/ProductList'
import CartSummary from './components/CartSummary'
import { cartContext } from './context/cartContext'
import CartContextProvider from './context/CartContextProvider'


function App() {

  return (
    <>
      <CartContextProvider>
        <h1 className='text-3xl font-medium text-center'>Context API assignment</h1>
        <div className='flex justify-between'>
          <ProductList />
          <CartSummary />
        </div>

      </CartContextProvider>

    </>
  )
}

export default App
