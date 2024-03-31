import React from 'react'
import './CartSideBar.css' // Code => 06
import { FaTrashCan, FaXmark } from "react-icons/fa6";
import { useSeparate } from '../../Hook/useNumbers';
import ModalContainer from '../../ModalContainer/ModalContainer';
import { useDispatch } from 'react-redux';
import { closeCartMenu } from '../../redux/CartReducer/CartSlice';
import { useOutClicker } from '../../Hook/useOutsideClick';
import { Link } from 'react-router-dom';


const CartSideBar = ({ }) => {
    const dispatch = useDispatch()

    const closeSideBar = () => {
        Cart_ref.current.style.animationDuration = '.2s';
        Cart_ref.current.style.animationName = 'close-animation';
        setTimeout(() => {
            dispatch(closeCartMenu())
        }, 200);
    }
    const [Cart_ref, clickAction] = useOutClicker(closeSideBar)
    return (
        <ModalContainer onClick={clickAction}>
            <aside ref={Cart_ref} className='cart_06 open_06'>
                <div className="cart-content_06">
                    <div className="cart-header_06">
                        <span className="close-icon_06" onClick={closeSideBar}>
                            <FaXmark size={'100%'} />
                        </span>
                        <span className="h5">
                            سبد خرید
                        </span>
                    </div>
                    <ul className="cart-list_06 no-scrollbar">
                        <li className="cart-item_06">
                            <CartItem />
                        </li>
                        <li className="cart-item_06">
                            <CartItem />
                        </li>

                    </ul>
                    <div className="cart-button_06">
                        <Link to={'/cart/summary#1'} className="btn btn-animate" onClick={closeSideBar}>
                            سبد خرید
                        </Link>
                    </div>
                </div>
            </aside>
        </ModalContainer>
    )
}

export default CartSideBar

function CartItem() {
    const Price = useSeparate(230000)
    return (
        <>
            <span className="delete-btn_06">
                <FaTrashCan size={20} />
            </span>
            <div className="image_06">
                <img src="/public/Images/no-image.webp" alt="" />
            </div>
            <div className="body_06">
                <span className="line-limit-2">
                    نام محصول
                </span>
                <span className="price_06">
                    {Price}
                    <small>تومان</small>
                </span>
            </div>
        </>
    )
}