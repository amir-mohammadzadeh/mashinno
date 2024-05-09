import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import SupportWidget from '../../components/SupportWidget/SupportWidget'
import PostsGridLayout from '../../components/PostsGridLayout/PostsGridLayout'
import { useSelector } from 'react-redux'

const AgahyhaPage = () => {
   const Get_Posts = useSelector(state => state.posts)
   const [postsList, setPostsList] = useState(Get_Posts)

   const params = useParams()
   const location = useLocation()

   useEffect(() => {
      document.title = 'لوازم یدکی ' + params.carModel + " | کاپوت"
   }, [])


   return (<>
      <BreadCrumbs />
      <main className="container my-2">

         <PostsGridLayout itemList={postsList} />

      </main>
      <SupportWidget />
   </>)
}

export default AgahyhaPage