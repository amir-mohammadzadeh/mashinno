import { useRef } from 'react'
import './Toast.css' // C0de => 006

const Toast = ({ type, onClose, timer, header, msg }) => {
    const Toast_Ref = useRef(null)
    let toast_class, message, icon;
    switch (type) {
        case 'success':
            toast_class = "success_006";
            header = header || "تبریک";
            message = msg || "عملیات شما با موفقیت انجام شد :)";
            icon = <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"></path><path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"></path></svg>
            break
        case 'warning':
            toast_class = "warning_006";
            header = header || "";
            message = msg || "";
            icon = <> <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg> </>
            break
        case 'info':
            toast_class = "info_006";
            header = header || "";
            message = msg || "";
            icon = <> <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path></svg> </>
            break
        case 'error':
            toast_class = "error_006";
            header = header || "";
            message = msg || "";
            icon = <> <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg> </>
            break
    }

    const closeToast = () => {
        Toast_Ref.current.classList.replace('show_006', 'hidde_006')
        setTimeout(() => {
            onClose()
        }, 600)
    }

    if (timer) {
        setTimeout(() => closeToast(), (timer * 1000))
    }
    return (
        <div ref={Toast_Ref} className="toast-holder_006 show_006">
            <div className={`toast_006 ${toast_class}`}>
                <span className="icon_006">
                    {icon}
                </span>
                <div className="body_006">

                    <span className="header">  {header} </span>
                    <p> {message} </p>

                </div>
                <span className="close_006" onClick={closeToast} >
                    &#10006;
                </span>

                {timer && <div className="timer-progres_006" style={{ '--timer': `${timer}s` }}></div>}
            </div>
        </div>
    )
}

export default Toast