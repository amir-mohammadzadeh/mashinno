import React from 'react'
// Styles define in Dashbord.css ____ Code => 80

import Card from '../../components/Dashbord.Card/Card';
import { useNavigate } from 'react-router-dom';
const RecentlySeen = () => {
  const navigate = useNavigate()
  const cardClickHandel = () => {
    console.log('card clicked!')
  }
  return (
    <>
      <header className="main-header_80">
        <h4>بازدید‌های اخیر</h4>
      </header>
      <div className="main-grid_80">

        <div onClick={cardClickHandel}>
          <Card postID={1} />
        </div>
        <div onClick={cardClickHandel}>
          <Card postID={2} />
        </div>
        <div onClick={cardClickHandel}>
          <Card postID={3} />
        </div>

      </div>
    </>
  )
}

export default RecentlySeen