import { useSelector } from 'react-redux'

const Dashbord = () => {
  const USER = useSelector(state => state.userInfo)

  return (
    <div style={{margin:"2rem",fontSize:'1.2rem'}}> کاپوت {USER.name}</div>
  )
}

export default Dashbord