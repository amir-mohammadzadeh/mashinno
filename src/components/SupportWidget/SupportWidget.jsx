import { useEffect, useRef, useState } from 'react'
import './SupportWidget.css' //Code => 001
import { TfiHeadphoneAlt, TfiAngleDoubleUp, TfiClose } from "react-icons/tfi";
import { BsTelephoneFill, BsShieldExclamation, BsCreditCard2Back } from "react-icons/bs";
import ModalContainer from '../../ModalContainer/ModalContainer'
import { useOutClicker } from '../../Hook/useOutsideClick'

const SupportWidget = ({ scrollBtn = true }) => {
   const [showSupportModal, setShowSupportModal] = useState(false)
   const [modal_ref, onOutClick] = useOutClicker(openSupportBox)
   const container_ref = useRef(null)
   let box_position = useRef(0)

   function openSupportBox() {
      if (!showSupportModal) {
         box_position.current = window.innerHeight - box_position.current.offsetTop + 'px';
      }
      container_ref.current.classList.toggle('open-support-box_001')
      setShowSupportModal(!showSupportModal)
   }

   const supportItemClick = () => {
      console.log('item Clicked!')
   }

   return (<>

      <div ref={container_ref} className="support-container_001">

         <div onClick={openSupportBox} >
            <span className="support-btn_001">
               <TfiHeadphoneAlt size={'100%'} />
            </span>
         </div>
         {scrollBtn && <ScrollUpButton />}
      </div>
      {showSupportModal &&
         <ModalContainer clasName='modal-bg-animate_001' onClick={onOutClick} >
            <ul ref={modal_ref} className="support-box_001" style={{ bottom: box_position.current }}>
               <li className="modal-close-btn_001" onClick={openSupportBox}>
                  <span className="support-btn_001">
                     <TfiClose size={'100%'} />
                  </span>
               </li>

               <li
                  className="support-item_001"
                  style={{ '--item-delay': '0.2s' }}
                  onClick={supportItemClick}
               >
                  <a href='tel:' className="item-text_001">
                     تماس با پشتیبانی
                  </a>
                  <span className="item-icon_001" style={{ backgroundColor: "#06f5f1" }} >
                     <BsTelephoneFill size={'100%'} />
                  </span>
               </li>

               <li
                  className="support-item_001"
                  style={{ '--item-delay': '0.1s' }}
                  onClick={supportItemClick}
               >
                  <span className="item-text_001">
                     راهنمای خرید امن
                  </span>
                  <span className="item-icon_001" style={{ backgroundColor: "#e4ec0d" }} >
                     <BsCreditCard2Back size={'100%'} />
                  </span>
               </li>

               <li
                  className="support-item_001"
                  style={{ '--item-delay': '0s' }}
                  onClick={supportItemClick}
               >
                  <span className="item-text_001">
                     قوانین و مقررات
                  </span>
                  <span className="item-icon_001" style={{ backgroundColor: "#ff4469" }} >
                     <BsShieldExclamation size={'100%'} />
                  </span>
               </li>

            </ul>
         </ModalContainer>
      }

   </>)
}

export default SupportWidget

function ScrollUpButton() {
   const scrollUp_btn = useRef()
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

   return (

      <div ref={scrollUp_btn}
         className="scroll-btn_001"
         style={{ opacity: '0' }}
         onClick={scrollUp}
      >
         <span className="icon_001">
            <TfiAngleDoubleUp size={'100%'} />
         </span>
      </div>

   )
}