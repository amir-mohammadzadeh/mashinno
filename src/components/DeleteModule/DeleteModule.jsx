import { BsExclamationDiamondFill } from 'react-icons/bs'
import ModalContainer from '../../ModalContainer/ModalContainer'
import './DeleteModule.css' // Code => 007
import React from 'react'
import { useOutClicker } from '../../Hook/useOutsideClick'

const DeleteModule = ({ onCancel, onYes,message,children }) => {
    const [modal_ref, closeAction] = useOutClicker(onCancel)
    return (
        <ModalContainer onClick={closeAction}>
            <div ref={modal_ref} className="delete-card_007">

                <div className="header_007">
                    <BsExclamationDiamondFill />
                    Delete
                </div>
                <div className="body_007">
                    {children || message || 'حذف شود ؟'}
                </div>
                <div className="buttons_007">
                    <button className="btn yes_007" onClick={onYes}>
                        تأیید
                    </button>
                    <button className="btn cancel_007" onClick={onCancel}>
                        انصراف
                    </button>
                </div>
            </div>
        </ModalContainer>
    )
}

export default DeleteModule