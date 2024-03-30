import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const PrivetRoute = ({ children }) => {
    const isLogin= useSelector((state) => state.userInfo.isLogin )
    const navigate = useNavigate()
    
    useEffect(()=>{
        if (!isLogin) return navigate('/login')
    },[])

    return (
        <>
            {children}
        </>
    )
}

export default PrivetRoute