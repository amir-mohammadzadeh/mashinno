import React from 'react'
import './MapModal.css' // Code => 55
import ModalContainer from '../../ModalContainer/ModalContainer'
import { useOutClicker } from '../../Hook/useOutsideClick'

const MapModal = ({onClose}) => {
    const [modal_ref , closeAction] = useOutClicker(onClose)
    
  return (
    <>
    <ModalContainer onClick={closeAction}>
        <div ref={modal_ref} className="map-wrapper_55">
          <span className="close_55" onClick={()=>onClose(false)}>
            &#10006;
          </span>
            <iframe
                src="https://www.google.com/maps?q=38.05339143532025,46.28310309630766&z=15&output=embed"
                width="100%"
                height="100%"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
            />         
        </div>
    </ModalContainer>
    </>
  )
}

export default MapModal