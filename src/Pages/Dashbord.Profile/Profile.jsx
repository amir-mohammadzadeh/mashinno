import React from 'react'
import './Profile.css' //Code => 81

const Profile = () => {
  const list = Array.from(Array(50).keys())
  return (
    <div className='tests'>Profile

      {list.map(i=>
        <div style={{marginBlock:'2rem'}}>
          klfjwklfjwkfjwfjh w {i}
        </div>
      )}
    </div>
  )
}

export default Profile