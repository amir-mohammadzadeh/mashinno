import { useEffect } from 'react'
import { createPortal } from 'react-dom'

const ModalContainer = ({ onClick, clasName = '', children }) => {
    useEffect(() => {
        document.documentElement.style.overflowY = 'hidden';

        return () => document.documentElement.style.overflowY = 'auto';
    }, [])
    const styles = {
        position: "fixed",
        inset: '0',
        width: '100%',
        height: '100dvh',
        backgroundColor: "#00000040",
        backdropFilter: "blur(2px)",
        zIndex: '20',
        display: 'grid',
        placeItems: 'center'
    }

    return createPortal(
        <div style={styles} className={clasName} onClick={onClick}>
            {children}
        </div>
        , document.getElementById('modal_parent')
    )
}
export default ModalContainer