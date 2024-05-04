import { useState } from 'react'
import './MobileNavBar.css' // Cose  23
import { BsPersonCircle, BsHouseDoor, BsGrid, BsPlusCircle, BsChatText } from "react-icons/bs";
import { Link } from 'react-router-dom';
import BrandModal from '../../BrandModal/BrandModal';

const MobileNavBar = () => {
    const [openBrandModal, setOpenBrandModal] = useState(false)
    return (<>
        <nav className="mobile-navbar_container">
            <ul className="mobile-navbar">
                <li className="mobile-nav-item">
                    <Link to={'/'}>
                        <span className='icon_23'>
                            <BsHouseDoor />
                        </span>
                        <span className='lab_23'>
                            اگهی ها
                        </span>
                    </Link>
                </li>
                <li className="mobile-nav-item">
                    <div onClick={() => setOpenBrandModal(true)}>
                        <span className="icon_23">
                            <BsGrid />
                        </span>
                        <span className='lab_23'>
                            برند خودرو‌ها
                        </span>
                    </div>
                </li>
                <li className="mobile-nav-item">
                    <Link to='/new-post'>
                        <span className="icon_23">
                            <BsPlusCircle />
                        </span>
                        <span className='lab_23'>
                            ثبت آگهی
                        </span>
                    </Link>
                </li>
                <li className="mobile-nav-item">
                    <Link to={'/'}>
                        <span className="icon_23">
                            <BsChatText />
                        </span>
                        <span className='lab_23'>
                            چت
                        </span>
                    </Link>
                </li>
                <li className="mobile-nav-item">
                    <Link to={'/userdashbord/profile'}>
                        <span className="icon_23">
                            <BsPersonCircle />
                        </span>
                        <span className='lab_23'>
                            کاپوت من
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
        {openBrandModal && <BrandModal onClose={setOpenBrandModal} />}
    </>)
}

export default MobileNavBar