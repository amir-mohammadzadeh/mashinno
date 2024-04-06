import React, { useState } from 'react'
import './CartSidePanels.css' // Code => 62
import { Link } from 'react-router-dom'
import { Input } from '../Inputs/Inputs'
import { ButtonLoader } from '../Loading/Loading'


const example_discountList = [{code:'1234',value:'10%'},{code:'asdkjh',value:'4%'},{code:'a8oo8',value:'75%'},{code:'w354dsf',value:'5%'},{code:'asdad',value:'10%'},]

const CartSidePanel = () => {
    const [discountValue, setDiscountValue] = useState(null)
    const [discountInput, setDiscountInput] = useState('')
    const [pendding, setPendding] = useState(false)
    const [error, setError] = useState(false)
    
    const discountConfirm = ()=>{
        setPendding(true)
        const test = example_discountList.find(item => item.code == discountInput )
            if(test){
                setDiscountValue(test.value),
                setError(false),
                setPendding(false)
            }else{
                setError(true)
            } 
    }

    return (
        <>
            <div className="discount_62" >
                <Input
                    helpText='کد تخفیف خودرا وارد کنید'
                    label='کد تخفیف'
                    name='giftCode'
                    value={discountInput}
                    onChange={setDiscountInput}
                />
                <button 
                    className={`btn btn-primary ${discountValue && 'sucsses_62' }` }
                    onClick={discountConfirm}
                    disabled={discountInput =='' || discountValue ? true : false}
                >
                    {pendding && <ButtonLoader size={8} /> }
                    {!pendding && !discountValue && 'ثبت کد' }
                    {!pendding && discountValue && <>
                        <span> &#10004; </span>
                        کد تخفیف ثبت شد
                    </> }
                    
                </button>
            </div>

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
                            جمع کل:
                        </span>
                        <span>
                            ۳۰۰۰۰۰۰۰۰
                            <small>
                                تومان
                            </small>
                        </span>
                    </li>
                    <li className="item_62">
                        <span>
                            قیمت نهایی:
                        </span>
                        <span>
                            ۳۰۰۰۰۰۰۰۰
                            <small>
                                تومان
                            </small>
                        </span>
                    </li>
                </ul>
                <div className="buttons_62">
                    <Link to={'/cart/address#2'} className="btn btn-animate next-step_62 " >
                        تایید و تکمیل سفارش
                    </Link>
                    <Link to={-1} className="btn return_62 ">
                        بازگشت
                    </Link>
                </div>
            </div>

        </>
    )
}

export default CartSidePanel