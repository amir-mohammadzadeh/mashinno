import './Stores.css' // Code => 36
import SupportWidget from '../../components/SupportWidget/SupportWidget'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import { usePersianNumbers } from '../../Hook/useNumbers'
import { useNavigate } from 'react-router-dom'

const Stores = () => {
    const navigate = useNavigate()
    const Store_List = Array.from(Array(20).keys())

    const cardClickHandel = (storeID) => {
        navigate(`/store/${storeID}/panel`)
    }
    return (<>
        <BreadCrumbs />
        <main className="container my-2">
            <div className="store-grid_36">

                {Store_List.map(store =>

                    <div key={store} className="card product-card_31" onClick={() => cardClickHandel(store)}>

                        <div className="product-image_31">
                            <img src="/Images/no-image.webp" alt="نام فروشگاه" />
                        </div>
                        <div className="card-body_31">
                            <span className="card-title_31 line-limit-2">
                                فروشگاه {store}
                            </span>

                            <div className="price_31">
                                {usePersianNumbers(store)} آگهی
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
        <SupportWidget />
    </>)
}

export default Stores