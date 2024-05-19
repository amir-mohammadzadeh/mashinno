import { Outlet } from 'react-router-dom'
import SupportWidget from '../../components/SupportWidget/SupportWidget'

const CartPage = () => {
    return (<>
        <main className='container my-2'>
            <header className="my-1">
                <h2>سبد خرید</h2>
            </header>
            <Outlet />
        </main>
        <SupportWidget scrollBtn={false} />
    </>)
}

export default CartPage