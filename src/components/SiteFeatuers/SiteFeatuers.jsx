import React from 'react'
import './SiteFeatuers.css' // Code 18
import { GiReceiveMoney ,GiAchievement } from "react-icons/gi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaShippingFast } from "react-icons/fa";

const SiteFeatuers = () => {
    
  return (
    <div className='container my-1'>
        <ul className="featuers-content_18">
            <li className="feature-card_18">
                <span className='icon_18'>
                    <GiReceiveMoney size={'100%'} />
                </span>
                <div>
                    <span className='title_18'>
                        ضمانت بازگشت وجه
                    </span>
                    <small className='subtitle_18'>
                        درصورت عدم رضایت
                    </small>
                </div>
            </li>
            <li className="feature-card_18">
                <span className='icon_18'>
                    <FaShippingFast size={'100%'} />
                </span>
                <div>
                    <span className='title_18'>
                        ارسال سریع
                    </span>
                    <small className='subtitle_18'>
                        امن و مطمئن
                    </small>
                </div>
            </li>
            <li className="feature-card_18">
                <span className='icon_18'>
                    <TfiHeadphoneAlt size={'100%'} />
                </span>
                <div>
                    <span className='title_18'>
                        پشتیبانی عالی
                    </span>
                    <small className='subtitle_18'>
                        از ساعت ۹ تا ۱۸
                    </small>
                </div>
            </li>
            <li className="feature-card_18">
                <span className='icon_18'>
                    <GiAchievement size={'100%'} />
                </span>
                <div>
                    <span className='title_18'>
                        اصالت کالا
                    </span>
                    <small className='subtitle_18'>
                        تضمین اضالت کالا
                    </small>
                </div>
            </li>
        </ul>

    </div>
  )
}

export default SiteFeatuers