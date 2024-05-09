import { useRef, useState } from 'react'
import './PostUpgrate.css' // Code => 87
import { Link } from 'react-router-dom'
import { useSeparate } from '../../Hook/useNumbers'
import ModalContainer from '../../ModalContainer/ModalContainer'
import { Input } from '../../components/Inputs/Inputs'
import { useOutClicker } from '../../Hook/useOutsideClick'

const PostUpgrate = () => {
   const [modal_ref, clickAction] = useOutClicker(closeGiftModal)
   const [showGiftModal, setShowGiftModal] = useState(false)
   const giftCode_input = useRef(null)
   const [totalPayment, setTotalPayment] = useState(0)

   const openGiftModal = (e) => {
      e.stopPropagation()
      setShowGiftModal(true)
   }

   function closeGiftModal() {
      setShowGiftModal(false)
   }

   const onSelectHandler = (e) => {
      const optionID = e.target.name;

      if (e.target.checked) {
         console.log(optionID, ' selected....')
         setTotalPayment(pre => pre += 65000)
      } else {
         console.log(optionID, ' remove...')
         setTotalPayment(pre => pre -= 65000)
      }
   }

   const giftValidation = () => {
      const code = giftCode_input.current.value;
      console.log('کد هدیه از طرف بک‌اند تایید میشود')
   }

   return (<>
      <div className="upgrate-content_87">
         <div className="cards_87">

            <label htmlFor='UGItem_1' className="card_87">
               <input type="checkbox" name="" id="UGItem_1" onChange={onSelectHandler} />

               <div className="card-content_87">
                  <div className="head_87">
                     <span>نردبان</span>
                     <span className="price_87">
                        {useSeparate(65000)} تومان
                     </span>
                  </div>
                  <div className="card-text_87">
                     <p>
                        آگهی شما تا زمان دریافت آگهی تازه‌تر در همان دسته‌بندی و شهر، به عنوان اولین آگهی نمایش داده می‌شود.
                     </p>
                  </div>
                  <button className="btn gift-btn_87" disabled={false} onClick={openGiftModal}>
                     ثبت کد هدیه
                  </button>
               </div>
            </label>

            <label htmlFor='UGItem_2' className="card_87" >
               <input type="checkbox" name="" id="UGItem_2" disabled />

               <div className="card-content_87">
                  <div className="head_87">
                     <span>تمدید</span>
                     <span className="price_87">
                     {useSeparate(65000)} تومان
                     </span>
                  </div>
                  <div className="card-text_87">
                     <p>
                        آگهی شما تا زمان دریافت آگهی تازه‌تر در همان دسته‌بندی و شهر، به عنوان اولین آگهی نمایش داده می‌شود.
                     </p>
                  </div>
                  <button className="btn gift-btn_87" disabled onClick={openGiftModal}>
                     ثبت کد هدیه
                  </button>
                  <div className="card-message_87">
                     <span>
                        ۲۱ روز تا فعال شدن پرداخت
                     </span>
                     <p>
                        بعد از مدت مشخص شده امکان پرداخت این هزینه وجود دارد.
                     </p>
                  </div>
               </div>
            </label>

         </div>

         <div className="payment-panel_87">
            <div className="card panel-card_87">
               <span>مبلغ قابل پرداخت</span>
               <span className="price_87">
                  {useSeparate(totalPayment)} تومان
               </span>
               <button className="btn btn-animate payment-btn_87" disabled={totalPayment == 0 ? true : false}>
                  <Link>
                     پرداخت
                  </Link>
               </button>
               <small>
                  پرداخت از طریق کارت‌های شتاب انجام‌پذیر است.
               </small>
            </div>
         </div>
      </div>
      {showGiftModal &&
         <ModalContainer onClick={clickAction}>
            <div ref={modal_ref} className="card gift-modal_87">
               <span className="h4">
                  کد هدیه {'نردبان'} آگهی
               </span>
               <Input
                  ref={giftCode_input}
                  helpText='کد هدیه را وارد کنید'
               />
               <div className="modal-btns_87">
                  <button className="btn btn-animate td-btn_87" onClick={giftValidation}>
                     تأیید کد هدیه
                  </button>
                  <button className="btn cl-btn_87" onClick={closeGiftModal}>
                     انصراف
                  </button>
               </div>
            </div>
         </ModalContainer>
      }
   </>)
}

export default PostUpgrate