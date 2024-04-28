import React from 'react'
import Card from '../../components/Dashbord.Card/Card'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Favorites = () => {
  const navigate = useNavigate()
  const User_Favorite = useSelector(state => state.userInfo.favorites)

  const cardClickHandel = (id) => {
    navigate(`/product-detailes/${id}`)
  }

  return (<>
    <header className="main-header_80">
      <h4>نشان شده‌های</h4>
    </header>
    <div className="main-grid_80">

      {User_Favorite.map((card, idx) =>

        <div key={idx} onClick={() => cardClickHandel(card)}>
          <Card postID={card} del={true} />
        </div>

      )}

    </div>
  </>)
}

export default Favorites