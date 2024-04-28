import React from 'react'
// Styles define in Dashbord.css ____ Code => 80
import Card from '../../components/Dashbord.Card/Card';
import { useNavigate } from 'react-router-dom';

const RecentlySeen = () => {
  const navigate = useNavigate()
  let recently_list = localStorage.getItem('User_Recently_Seen')
  recently_list = JSON.parse(recently_list)

  const cardClickHandel = (id) => {
    navigate(`/product-detailes/${id}`)
  }

  return (<>
    <header className="main-header_80">
      <h4>بازدید‌های اخیر</h4>
    </header>

    <div className="main-grid_80">
      {recently_list.map((post, idx) =>

        <div key={idx} onClick={() => cardClickHandel(post)}>
          <Card postID={post} />
        </div>

      )}
    </div>
  </>)
}

export default RecentlySeen