import { useEffect, useRef } from "react"

const useOutsideClick = ( closeAction ) => {
    const menu_ref = useRef(null)
    useEffect(() => {

        const outside_clickHandler = (event) => {
            if (menu_ref.current && !menu_ref.current.previousSibling.contains(event.target) && !menu_ref.current.contains(event.target)) {
                closeAction(preventValue => !preventValue)
            }
        }
        document.addEventListener('mousedown', outside_clickHandler);
        return () => document.removeEventListener('mousedown', outside_clickHandler)
    }, [])

    return menu_ref
}
export default useOutsideClick

export const useOutClicker = (closeFunction)=>{
    const content_ref = useRef()

    const clickAction = (e) => {
        if (e.target != content_ref.current && !content_ref.current.contains(e.target)) {
            closeFunction(false)
        }
    }
    return [content_ref , clickAction]

}