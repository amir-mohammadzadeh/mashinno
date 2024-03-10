import React from 'react'
import './SiteFeatuers.css' // Code -36
import { GiReceiveMoney ,GiAchievement } from "react-icons/gi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaShippingFast } from "react-icons/fa";

const SiteFeatuers = () => {
    
  return (
    <div className='container'>
        <ul className="featuers-content-36">
            <li className="feature-card-36">
                <span className='icon-36'>
                    <GiReceiveMoney size={'100%'} />
                </span>
                <div>
                    <span className='title-36'>
                        ضمانت بازگشت وجه
                    </span>
                    <small className='subtitle-36'>
                        درصورت عدم رضایت
                    </small>
                </div>
            </li>
            <li className="feature-card-36">
                <span className='icon-36'>
                    <FaShippingFast size={'100%'} />
                </span>
                <div>
                    <span className='title-36'>
                        ارسال سریع
                    </span>
                    <small className='subtitle-36'>
                        امن و مطمئن
                    </small>
                </div>
            </li>
            <li className="feature-card-36">
                <span className='icon-36'>
                    <TfiHeadphoneAlt size={'100%'} />
                </span>
                <div>
                    <span className='title-36'>
                        پشتیبانی عالی
                    </span>
                    <small className='subtitle-36'>
                        از ساعت ۹ تا ۱۸
                    </small>
                </div>
            </li>
            <li className="feature-card-36">
                <span className='icon-36'>
                    <GiAchievement size={'100%'} />
                </span>
                <div>
                    <span className='title-36'>
                        اصالت کالا
                    </span>
                    <small className='subtitle-36'>
                        تضمین اضالت کالا
                    </small>
                </div>
            </li>
        </ul>

    </div>
  )
}

export default SiteFeatuers