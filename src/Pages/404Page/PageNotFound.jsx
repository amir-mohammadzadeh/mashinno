import './PageNotFound.css' // Code => 00
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <main className="container">
            <div className="main-content_00">
                <div className="image_00">
                    <img src="/Images/404Page.webp" alt="page not found" />
                </div>
                <h2>
                    از این مسیر به جایی نمیرسی!
                </h2>
                <div className="text_00">

                    <span>
                        به نظر آدرس را اشتباه وارد کرد‌اید. <br />
                        برای پیدا کردن مسیر درست می‌توانید سری به صفحه اول کاپوت بزنید.
                    </span>
                    <Link to='/' className="btn home-btn_00">
                        صفحه اول
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default PageNotFound