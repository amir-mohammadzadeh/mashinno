import React from 'react'
import './BlogSliderCard.css' // Code => -35
import { BsAlarm, BsTag } from 'react-icons/bs'

const BlogSliderCard = () => {
  return (
    <>

        <a className="blog-card-35">
            <div className="card-image-35">
                <img src="/public/Images/no-image.webp" alt="" />
            </div>
            <div>
                <div className="date-tag-35">
                    <span className="card-tag-35">
                        <BsTag />
                        خودرو
                    </span>
                    <span className="card-date-35">
                        ۱۴۰۲/۱۱/۰۵
                        <BsAlarm />
                    </span>
                </div>
                <h2 className="card-title-35">
                    راهنمایی کامل روش‌های مختلف پیگیری گواهینامه رانندگی خودرو و موتور
                </h2>
            </div>
        </a>


    </>
  )
}

export default BlogSliderCard