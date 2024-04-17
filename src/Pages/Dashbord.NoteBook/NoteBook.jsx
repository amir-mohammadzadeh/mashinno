import React from 'react'
// Styles define in Dashbord.css ____ Code => 80
import Card from '../../components/Dashbord.Card/Card'

const NoteBook = () => {
  const cardClickHandel = () => {
    console.log('card clicked!')
  }
  return (
    <>
      <header className="main-header_80">
        <h4> یاداشت‌های من</h4>
      </header>
      <div className="main-grid_80">

        <div onClick={cardClickHandel}>
          <Card postID={1} noteText='متن یاداشت در این محل قرارمیگیرد' noteDate='2024/16/4,1:50' share={false} />
        </div>
        <div onClick={cardClickHandel}>
          <Card postID={2} noteText='متن یاداشت در این محل قرارمیگیرد' noteDate='2024/16/4,1:50' share={false} />
        </div>
        <div onClick={cardClickHandel}>
          <Card postID={3} noteText='متن یاداشت در این محل قرارمیگیرد' noteDate='2024/16/4,1:50' share={false} />
        </div>

      </div>
    </>
  )
}

export default NoteBook