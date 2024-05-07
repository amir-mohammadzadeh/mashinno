import React from 'react'
import useDateGenerator from '../../Hook/useDateGenerator'
import { useSeparate } from '../../Hook/useNumbers'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import './Post.css'// Code => 85


const Posts = () => {
  const navigate = useNavigate()

  const cardClickHandel = () => {
    navigate('/userdashbord/user_posts/management/2/preview')
  }

  return (
    <>
      <header className="main-header_80 my-post-header_80">
        <h4>آگهی‌های من</h4>
        <div className="btn header-btn_80">
          <Link to=''>
            آگهی جدید
          </Link>
        </div>
      </header>
      <div className="main-grid_80 my-post-grid_80" >

        <div className='my-post_85' onClick={cardClickHandel} >

          <div className="card card_85">
            <div className="image_85">
              <img src="/Images/no-image.webp" alt="" />
            </div>
            <div className="body_85">
              <span className="title_85 line-limit-2">
                عنوان محصول
              </span>
              <span className="date-loc_85">
                <span> {useDateGenerator("3/29/2024, 11:00:12 AM")}</span>
              </span>

              <span className="price_85">
                {useSeparate('123000')}
                <span>تومان</span>
              </span>

              <div className="post-status_85">
                <span>  وضعیت آگهی:  </span>
                <span>
                  در حال بررسی
                </span>
              </div>
            </div>
            
          </div>

        </div>

      </div>
    </>
  )
}

export default Posts