import { Outlet, Navigate, useLocation } from 'react-router-dom'

const PrivetRoute = () => {
    const location = useLocation()
    const isLogin = localStorage.getItem('tokan')

    if (!isLogin) return <Navigate to='/login' replace={true} state={location.pathname} />
    return <Outlet />
}

export default PrivetRoute