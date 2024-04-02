import React from 'react'
import './OrderDetails.css' // C0de => 64
import { Link } from 'react-router-dom'
import {BsPencilSquare} from 'react-icons/bs'
import OrderCompleteSidePanel from '../../../components/CartSidePanels/OrderCompleteSidePanel'

const OrderDetails = () => {
 
  return (
    <div>
      <div className="main-content_64">
        <div className="right-content_64">
          <section className="location-content_64">
            <h5>
             گیرنده
            </h5>
            <div className="body_64">
              <div className="item_64">
                <span>  امیر محمدززاده  </span>
                <span>  ۰۹۱۲۳۶۷۴۳۵  </span>
              </div>
              <div className="item_64">
                <span>  استان - شهر  </span>
                <span>  ادرس:یستا سنی تب اسنا  </span>
              </div>
            </div>
            <div className="footer_64">
              <Link to={-1}>
              <span>
                <BsPencilSquare  />
              </span>
                ویرایش
              </Link>
            </div>
          </section>

        </div>

        <div className="side-panel_64">
          <OrderCompleteSidePanel />
        </div>
      </div>
    </div>
  )
}

export default OrderDetails