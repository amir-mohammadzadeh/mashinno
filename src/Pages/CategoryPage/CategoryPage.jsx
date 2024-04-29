import { useEffect, useState } from 'react'
import SideMenu from '../../components/CategoryPage.SideMenu/SideMenu'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import SupportWidget from '../../components/SupportWidget/SupportWidget'
import './CategoryPage.css'// Code => 3
import { useSelector } from 'react-redux'


const CategoryPage = () => {
    const params = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const [filterList, setFilterList] = useState([])
    const Get_Posts = useSelector(state => state.posts)
    const [postsList, setPostsList] = useState(Array.from(Array(50).keys()))

    useEffect(() => {
        document.title = 'لوازم یدکی ' + params.carModel + " | کاپوت"
    }, [])

    useEffect(() => {
        // By changing filters, list of cards will be update in this function... 
        console.log('Filter posts by this methods:', filterList)
    }, [filterList])

    const filterByCategory = (payload, add) => {
        add ? setFilterList(pre => [...pre, payload])
            : setFilterList(pre => pre.filter(i => i != payload));
    }

    const cardClickHandler = () => {
        // filter list will send to 'ShoppingPage' by "state" property...
        navigate(`${location.pathname}/category`, { state: filterList })
    }

    return (<>
        <BreadCrumbs />
        <main className="container">
            <div className="main_container_3">

                <SideMenu className='sidemenu_3' onSelect={filterByCategory} />

                <div className="posts_3">

                    <div className="btn see-all_3">
                        {filterList.length == 0 || filterList.length == 6 ?
                            <Link
                                className="line-limit-1"
                                to={`${location.pathname}/category`}>
                                مشاهده همه آگهی‌های {params.carModel}
                            </Link>
                            :
                            <Link
                                className="line-limit-1"
                                to={`${location.pathname}/category?=${filterList.join('_')}`} state={filterList}>
                                مشاهده آگهی‌های {filterList.join(' و ')}
                            </Link>
                        }
                    </div>

                    {postsList.map((post, idx) =>

                        <div key={idx} className="card post-card_3" onClick={cardClickHandler}>
                            <div className="card-img_3">
                                <img src="/Images/no-image.webp" alt="" />
                            </div>
                            <div className="card-title_3 line-limit-2">
                                عنوان آکهی
                            </div>
                            <div className="store-count_3">
                                در ۷۰ فروشگاه
                            </div>
                        </div>

                    )}
                </div>
            </div>
        </main>
        <SupportWidget />
    </>)
}

export default CategoryPage