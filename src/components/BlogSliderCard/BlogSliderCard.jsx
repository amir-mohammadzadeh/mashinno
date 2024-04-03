import React from 'react'
import './BlogSliderCard.css' // Code => 17
import { BsAlarm, BsTag } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const BlogSliderCard = () => {
  return (
    <>
        <Link to={'/'} className="blog-card_17">
            <div className="card-image_17">
                <img src="/public/Images/no-image.webp" alt="" />
            </div>
            <div>
                <div className="date-tag_17">
                    <span className="card-tag_17">
                        <BsTag />
                        خودرو
                    </span>
                    <span className="card-date_17">
                        ۱۴۰۲/۱۱/۰۵
                        <BsAlarm />
                    </span>
                </div>
                <h2 className="card-title_17">
                    راهنمایی کامل روش‌های مختلف پیگیری گواهینامه رانندگی خودرو و موتور
                </h2>
            </div>
        </Link>
    </>
  )
}

export default BlogSliderCard