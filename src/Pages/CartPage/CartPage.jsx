import React from 'react'
import './CartPage.css' // Code => 6
import ShoppingProgresBar from '../../components/ShoppingProgresBar/ShoppingProgresBar'
import { Outlet } from 'react-router-dom'

const CartPage = () => {
    return (
        <>
            <main className='container my-2 cart-page_6'>
                <header className="page-header_6">
                    <ShoppingProgresBar />
                </header>
                <Outlet />
            </main>
        </>
    )
}

export default CartPage