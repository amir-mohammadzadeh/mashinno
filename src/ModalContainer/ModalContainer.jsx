import {createPortal} from 'react-dom'

const ModalContainer = ({ onClick ,children}) => {

    const styles= {
        position:"fixed",
        inset:'0',
        width:'100%',
        height:'100vh',
        backgroundColor:"#00000040",
        backdropFilter:"blur(2px)",
        zIndex:'11'
    }

    return createPortal (
    <div style={styles} onClick={onClick}>
        {children}
    </div>
    , document.getElementById('modal_parent')
  )
}
export default ModalContainer