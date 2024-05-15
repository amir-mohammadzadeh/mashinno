import React, { useRef, useState } from 'react'
import './Profile.css' //Code => 81
import { ImLocation2, ImPhone, ImPencil2 } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { openCityModal } from '../../redux/CityReducer/CitySlice';
import { BiImageAdd } from 'react-icons/bi';
import { ImageUploader_Multi } from '../../components/FileUploader/FileUploader';
import ModalContainer from '../../ModalContainer/ModalContainer';

const story_exampel = { id: 1, url: '/Images/no-image.webp', createDate: '' };


const Profile = () => {
  const dispath = useDispatch()
  const user = useSelector(state => state.userInfo)
  const city_list = useSelector(state => state.citiesList)
  const userName = (user.name && user.lastName) ? `${user.name} ${user.lastName}` : 'کاربر خالی';
  const profile_img = user.image || '/Images/NoPhoto.jpg';
  const [storyList, setStoryList] = useState([story_exampel])
  const [previewStory, setPreviewStory] = useState('')
  let storyFile = useRef(null)

  const onStoryUpload = (e) => {
    console.log(e.target.files[0])
    storyFile.current = e.target.files[0];
    setPreviewStory(URL.createObjectURL(e.target.files[0]))
  }

  const setStoryHandel = () => {

    // "storyFile.current" will send to back-end to be saved in user's story property

    // در پاسخ درخاست آبجکتی به صورت زیر دریافت میشود که برای پیش‌نمایش در استیت ذخیره میکنیم
    const story = {
      id: 2,
      url: previewStory,
      createDate: new Date().toLocaleString()
    }
    setStoryList(prev => [...prev, story])
    setPreviewStory('')
  }

  const removeStory = (itemID) => {
    // همچنین از طریق ای‌پی‌آی از دیتا بیس هم حذف میشود
    setStoryList(prev => prev.filter(img => img.id != itemID))
  }


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
      {user.address.address &&
        <address className="card address_81">
          <span className="icon_81">  <ImLocation2 size={'100%'} />  </span>
          <span>
            {`${user.address.ostan} ، ${user.address.city} ؛ `}
          </span>
          <span>
            {user.address.address}
          </span>
        </address>
      }
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
      <section className="card my-2">
        <h5>
          استوری ها
        </h5>
        <ImageUploader_Multi
          className="my-1"
          size={'8rem'}
          name='story'
          imageList={storyList}
          onUpload={onStoryUpload}
          deleteAction={removeStory}
        />
      </section>
    </div>
    {previewStory &&
      <ModalContainer>
        <div className="story-modal_81">
          <div className="story_81">
            <img src={previewStory} alt="" />
          </div>
          <div className="story-buttons_81">
            <button className="btn" onClick={setStoryHandel}>
              &#10003; تایید
            </button>
            <button className="btn" onClick={() => setPreviewStory('')}>
              &#10007; انصراف
            </button>
          </div>
        </div>
      </ModalContainer>
    }

  </>)
}

export default Profile