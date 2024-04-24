import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserInfo } from '../../redux/UserReducer/userSlice'

const BsicHoc = (OrginComponent) => {
  
    const NewComponent=()=>{
        const dispatch = useDispatch()
        const [pendding,setPending]=useState(false)
        
        useEffect(()=>{
            // از طریق ای‌پی‌آی لیست تمام کاربران را دریافت کرده
            // stateو اطلاعات کاربری که توکن آن مطابقت دارد را در 
            //  مربوط به اطلاعات کاربر ذخیره میکند
            // علاوه بر کاربران لیست تمام آگهی‌ها و دیگر اطلاعات اولیه مورد نیاز 
            // را از طریق ای‌پی‌آی دریافت و ذخیره میکنیم

            const TOKAN = localStorage.getItem('tokan')
            if (TOKAN){
                dispatch(setUserInfo({isLogin:true,tokan:TOKAN}))
            }

        },[])

        return <OrginComponent loading={pendding} />
    }
    return NewComponent
}

export default BsicHoc