import React, { useEffect, useRef, useState } from 'react'
import './HelpWidget.css'
import { TfiHeadphoneAlt, TfiAngleDoubleUp, TfiClose, TfiPlus } from "react-icons/tfi";
import { BsTelephoneFill } from "react-icons/bs";
import ModalContainer from '../../ModalContainer/ModalContainer'
import { useOutClicker } from '../../Hook/useOutsideClick'

const HelpWidget = () => {
   const [showSupportModal, setShowSupportModal] = useState(false)
   const scrollUp_btn = useRef()
   const [modal_ref, onOutClick] = useOutClicker(setShowSupportModal)
   let VALUE = 0

   useEffect(() => {
      const scrollHandler = () => {
         if (VALUE >= 5 && VALUE <= 15) scrollUp_btn.current.style.opacity = (VALUE / 10) - 0.5;
         else if (VALUE <= 5) scrollUp_btn.current.style.opacity = 0;
         else scrollUp_btn.current.style.opacity = 1;

         let total_scroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
         let scroll_value = document.documentElement.scrollTop;
         scrollUp_btn.current.style.setProperty('--progress-value', `${VALUE}deg`);
         VALUE = 360 * (scroll_value / total_scroll);
      }

      document.addEventListener("scroll", scrollHandler)

      return () => document.removeEventListener("scroll", scrollHandler)
   }, [])

   const scrollUp = () => {
      document.documentElement.scrollTo(0, 0)
   }

   const supportItemClick = () => {
      console.log('item Clicked!')
   }

   return (
      <>
         <div onClick={() => setShowSupportModal(!showSupportModal)} >
            {showSupportModal ?
               <span className="support-btn-001 z-12">
                  <TfiClose size={'100%'} />
               </span>
               :
               <span className="support-btn-001">
                  <TfiHeadphoneAlt size={'100%'} />
               </span>
            }
         </div>

         <div ref={scrollUp_btn}
            className="scroll-btn-002"
            style={{ opacity: '0' }}
            onClick={scrollUp}
         >
            <span className="icon-001">
               <TfiAngleDoubleUp size={'100%'} />
            </span>
         </div>

         {showSupportModal &&
            <ModalContainer clasName='modal-bg-animate-001' onClick={onOutClick} >
               <ul ref={modal_ref} className="support-box-001">

                  <li
                     className="support-item-001"
                     style={{ '--item-delay': '0.2s' }}
                     onClick={supportItemClick}
                  >
                     <a href='tel:' className="item-text-001">
                        تماس با پشتیبانی
                     </a>
                     <span className="item-icon-001" style={{ backgroundColor: "#06f5f1" }} >
                        <BsTelephoneFill size={'100%'} />
                     </span>
                  </li>

                  <li
                     className="support-item-001"
                     style={{ '--item-delay': '0.1s' }}
                     onClick={supportItemClick}
                  >
                     <span className="item-text-001">
                        درخواست تماس از کاپوت
                     </span>
                     <span className="item-icon-001" style={{ backgroundColor: "#e4ec0d" }} >
                        <TfiHeadphoneAlt size={'100%'} />
                     </span>
                  </li>

                  <li
                     className="support-item-001"
                     style={{ '--item-delay': '0s' }}
                     onClick={supportItemClick}
                  >
                     <span className="item-text-001">
                        درخواست محصول جدید
                     </span>
                     <span className="item-icon-001" style={{ backgroundColor: "#e51166" }} >
                        <TfiPlus size={'100%'} />
                     </span>
                  </li>

               </ul>
            </ModalContainer>
         }
      </>
   )
}

export default HelpWidget