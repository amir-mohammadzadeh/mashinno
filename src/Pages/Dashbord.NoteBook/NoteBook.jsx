import React from 'react'
// Styles define in Dashbord.css ____ Code => 80
import Card from '../../components/Dashbord.Card/Card'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const NoteBook = () => {
  const navigate = useNavigate()
  const User_Notes = useSelector(state => state.userInfo.notes)

  const cardClickHandel = () => {
    navigate(`/product-detailes/${id}`)
  }

  return (<>
    <header className="main-header_80">
      <h4> یاداشت‌های من</h4>
    </header>
    <div className="main-grid_80">

      {User_Notes.map((note, idx) =>
        <div key={idx} onClick={cardClickHandel}>
          <Card postID={note.postID} noteText={note.noteText} noteDate={note.noteDate} share={false} />
        </div>
      )}

    </div>
  </>)
}

export default NoteBook