import React, { useEffect } from 'react'
import './UserLocation.css' // Code => 03
import {BsChevronLeft} from 'react-icons/bs'
import { Link, useLocation, useMatches, useParams } from 'react-router-dom'

const UserLocation = () => {
    const params = useParams()
    const location = useLocation()
    const his = useMatches()
    useEffect(()=>{
            //console.log(params)
            //console.log(location)
            //console.log(window.location)
    },[])
  return (
    <nav className='container'>
        <div className="location-content-03">
            <Link to='/' className="item-03">
                <span>
                    صفحه اصلی
                </span>
                <span className="icon-03">
                    <BsChevronLeft />
                </span>
            </Link>
            <Link to='' className="item-03">
                <span>
                    فعلا آماده نیست
                </span>
                <span className="icon-03">
                    <BsChevronLeft />
                </span>
            </Link>
        </div>
    </nav>
  )
}

export default  UserLocation