import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

const PrivetRoute = () => {
    const isLogin= useSelector((state) => state.userInfo.isLogin )
    const navigate = useNavigate()
    
    useEffect(()=>{
        if (!isLogin) return navigate('/login',{replace:true})
    },[])

    return <Outlet />
}

export default PrivetRoute