import { useEffect, useRef } from 'react'
import './BrandModal.css' // Code => 18
import ModalContainer from '../../ModalContainer/ModalContainer'
import BrandContent from '../BrandSection/BrandContent'
import { useOutClicker } from '../../Hook/useOutsideClick'
import { useLocation } from 'react-router-dom'

const BrandModal = ({ onClose }) => {
  const location = useLocation()
  let firstMount = useRef(true)
  const [modal_ref, closeAction] = useOutClicker(closeHandler)

  useEffect(() => {
    if (!firstMount.current) closeHandler();
    firstMount.current = false;
  }, [location])

  function closeHandler() {
    setTimeout(() => onClose(false), 310)
    modal_ref.current.classList.toggle('close-it_18')
  }

  return (
    <>
      <ModalContainer onClick={closeAction}>
        <div ref={modal_ref} className="brandmodal_18">
          <div className="header_18">
            <span className="h5">
              لیست برند ها
            </span>
            <span className="close-icon_18" onClick={closeHandler}>
              &#10006;
            </span>
          </div>
          <div className="brabds_18 no-scrollbar">
          <BrandContent />
          </div>
        </div>
      </ModalContainer>
    </>
  )
}

export default BrandModal