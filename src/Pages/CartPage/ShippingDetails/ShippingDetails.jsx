import React from 'react'
import { Link } from 'react-router-dom'

const ShippingDetails = (prop) => {
    console.log(prop)

  return (
    <div>
        ShippingDetails
        <Link to="/cart/summary" >
            بازگشت
        </Link>
        </div>
  )
}

export default ShippingDetails