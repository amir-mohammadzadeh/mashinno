import React from 'react'
import './MyOrders.css' // Code => 89
import { usePersianNumbers, useSeparate } from '../../Hook/useNumbers'
import { Link } from 'react-router-dom'

const MyOrders = () => {
    return (<>
        <header className="main-header_80">
            <h4> سفارش‌های من</h4>
        </header>
        <div className="orders-content_89">

            <div className="card order-card_89">
                <div className="store-name_89">
                    نام فروشگاه
                </div>
                <ul className="order-list_89 no-scrollbar">
                    <li className="order_89 font-lg">
                        <span className='line-line-limit-1'>
                            <Link to={`/pd/KpT111`} >
                                نام آگهی
                            </Link>
                        </span>
                        <div className="order-body_89">
                            <span>
                                ۱ عدد
                            </span>
                            <span>
                                {useSeparate(1200000)} تومان
                            </span>
                        </div>
                    </li>
                    <li className="order_89 font-lg">
                        <span className='line-line-limit-1'>
                            <Link to={`/pd/KpT111`} >
                                نام آگهی
                            </Link>
                        </span>
                        <div className="order-body_89">
                            <span>
                                ۱ عدد
                            </span>
                            <span>
                                {useSeparate(1200000)} تومان
                            </span>
                        </div>
                    </li>
                </ul>
                <div className="order-summary_89">
                    <div>
                        <span>
                            جمع کل :
                        </span>
                        <span>{usePersianNumbers(5)} عدد</span>
                    </div>
                    <div className="order-status_89 orange_89">
                        در انتظار تایید
                    </div>
                    <div>
                        <span>
                            قیمت کل :
                        </span>
                        <span>{useSeparate(5000000)} تومان</span>
                    </div>
                </div>
            </div>

            <div className="card order-card_89">
                <div className="store-name_89">
                    نام فروشگاه
                </div>
                <ul className="order-list_89 no-scrollbar">
                    <li className="order_89 font-lg">
                        <span className='line-line-limit-1'>
                            <Link to={`/pd/KpT111`} >
                                نام آگهی
                            </Link>
                        </span>
                        <div className="order-body_89">
                            <span>
                                ۱ عدد
                            </span>
                            <span>
                                {useSeparate(1200000)} تومان
                            </span>
                        </div>
                    </li>
                </ul>
                <div className="order-summary_89">
                    <div>
                        <span>
                            جمع کل :
                        </span>
                        <span>{usePersianNumbers(2)} عدد</span>
                    </div>
                    <div className="order-status_89 red_89">
                        رد شده
                    </div>
                    <div>
                        <span>
                            قیمت کل :
                        </span>
                        <span>{useSeparate(5000000)} تومان</span>
                    </div>
                </div>
            </div>

            <div className="card order-card_89">
                <div className="store-name_89">
                    نام فروشگاه
                </div>
                <ul className="order-list_89 no-scrollbar">
                    <li className="order_89 font-lg">
                        <span className='line-line-limit-1'>
                            <Link to={`/pd/KpT111`} >
                                نام آگهی
                            </Link>
                        </span>
                        <div className="order-body_89">
                            <span>
                                ۱ عدد
                            </span>
                            <span>
                                {useSeparate(1200000)} تومان
                            </span>
                        </div>
                    </li>
                </ul>
                <div className="order-summary_89">
                    <div>
                        <span>
                            جمع کل :
                        </span>
                        <span>{usePersianNumbers(3)} عدد</span>
                    </div>
                    <div className="order-status_89 green_89">
                        تایید شده
                    </div>
                    <div>
                        <span>
                            قیمت کل :
                        </span>
                        <span>{useSeparate(5000000)} تومان</span>
                    </div>
                </div>
            </div>

        </div>
    </>)
}

export default MyOrders