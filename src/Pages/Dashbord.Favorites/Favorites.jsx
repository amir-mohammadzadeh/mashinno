import React from 'react'
import Card from '../../components/Dashbord.Card/Card'

const Favorites = () => {
  const cardClickHandel = () => {
    console.log('card clicked!')
  }
  return (
    <>
      <header className="main-header_80">
        <h4>نشان شده‌های</h4>
      </header>
      <div className="main-grid_80">

        <div onClick={cardClickHandel}>
          <Card postID={1} del={true} />
        </div>
        <div onClick={cardClickHandel}>
          <Card postID={2} del={true} />
        </div>
        <div onClick={cardClickHandel}>
          <Card postID={3} del={true} />
        </div>

      </div>
    </>
  )
}

export default Favorites