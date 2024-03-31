import React from 'react'
import { Input } from '../../../components/Inputs/Inputs'

const DiscountInput = () => {
  return (
    <>
        <div className="takhfif_62" >
          <Input
            helpText='کد تخفیف'
            label=''
            name='giftCode'
          />
          <button className="btn btn-primary">
            تایید کد
          </button>
        </div>
    </>
  )
}

export default DiscountInput