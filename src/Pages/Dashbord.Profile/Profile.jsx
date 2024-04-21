import React from 'react'
import './Profile.css' //Code => 81
import { ImLocation2, ImPhone, ImPencil2 } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { openCityModal } from '../../redux/CityReducer/CitySlice';

const Profile = () => {
  const dispath = useDispatch()
  const user = useSelector(state => state.userInfo)
  const city_list = useSelector(state => state.citiesList)
  const userName = user.name + '  ' + user.lastName || 'کاربر خالی';
  const profile_img = user.image || '/Images/NoPhoto.jpg';


  return (<>

    <div className="main-container_81">

      <section className="persenal-info_81">
        <div className="image_81">
          <img src={profile_img} alt="" />
        </div>
        <div className="person-info_81">
          <span className="h3">
            {userName}
          </span>
          <div className="phone-numbers_81">
            {user.phoneNumber.map((phone, idx) =>
              <span key={idx}>
                <span> <ImPhone /> </span>
                {phone}
              </span>
            )}

          </div>

          <div className="edit-btn_81">
            <Link to='/userdashbord/profile/edit'>
              <ImPencil2 />
              ویرایش پروفایل
            </Link>
          </div>

        </div>
      </section>

      <address className="card address_81">
        <span className="icon_81">  <ImLocation2 size={'100%'} />  </span>
        <span>
          {`${user.address.ostan} ، ${user.address.city} ؛ `}
        </span>
        <span>
          {user.address.address}
        </span>
      </address>
      <div className="card my-cities_81">
        <div className="header_81">
          <span> شهر‌های انتخاب شده </span>
          <span className="add-city-btn_81" onClick={() => dispath(openCityModal())}>
            &#10010;
          </span>
        </div>
        <ul className="no-scrollbar">
          {city_list.map((city, idx) =>
            <li key={idx}>
              {city}
            </li>
          )}

        </ul>
      </div>
    </div>


  </>)
}

export default Profile