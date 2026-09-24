import React, { useContext } from 'react'
import { cartContext } from '../context/cartContext'

function CartSummary() {
    const { cart } = useContext(cartContext)
    return (
        <div className='m-4 p-4 w-[30%] h-fit sticky top-20 z-50'>
            <h2 className='text-3xl font-bold font-black'>Cart Total</h2>
            <br /><br />
            <p className='text-2xl'>Cart items: {cart.length} </p>
            {console.log(cart)}
            <p className='text-2xl'>Total: {cart.reduce((sum, product) => (sum + product.price), 0)} </p>

        </div>
    )
}

export default CartSummary