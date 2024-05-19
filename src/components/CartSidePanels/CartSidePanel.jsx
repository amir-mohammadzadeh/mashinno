import './CartSidePanels.css' // Code => 62
import { Link } from 'react-router-dom'
import { useSeparate } from '../../Hook/useNumbers'

const CartSidePanel = () => {
    

    return (<>

        <div className="summary-card_62">
            <span className="h6">
                صورت حساب شما
            </span>
            <ul className="summarys_62">
                <li className="item_62">
                    <span>
                        تعداد کالاها:
                    </span>
                    <span>
                        4
                    </span>
                </li>
                <li className="item_62">
                    <span>
                        قیمت نهایی:
                    </span>
                    <span>
                        {useSeparate(3000000)}
                        <small>
                            تومان
                        </small>
                    </span>
                </li>
            </ul>
            <div className="buttons_62">
                <Link to={-1} className="btn return_62 ">
                    بازگشت
                </Link>
            </div>
        </div>
    </>)
}

export default CartSidePanel