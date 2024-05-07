import { useState } from 'react'
import './PellePromote.css' // Code => 86
import { BsChevronRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const PellePromote = () => {
    const [explanation, setExplanation] = useState(false)
    const [packageID,setPakageID] = useState(null)

    const selectHandler = (e)=>{
        setPakageID(e.target.name)
    }

    if (!explanation) {
        return (
            <div className="card">
                <div className="pelle-content_86">
                    <div className="pelle-header_86">
                        <h4>
                            افزایش بازدید با پله
                        </h4>
                        <span className="">
                            موفقیت آگهی خود را افزایش بدهید.
                        </span>
                        <p>
                            با برچسب «پله» آگهی شما شاخص می‌شود و این امکان را دارد که بتواند به صدر آگهی‌های کاپوت برود. پله بازدیدهای آگهی شما را تا چند برابر «نردبان» افزایش می‌دهد. برای افزایش موفقیت آگهیتان، آن را پله کنید.
                        </p>
                        <div className="btn more-btn_86" onClick={() => setExplanation(true)}>
                            توضیحات بیشتر
                        </div>
                    </div>
                    <div className="cards_86">

                        <label htmlFor="pelle-package_1" className="pcard_86">
                            <div className="card-label_86">
                                <input type="radio" name="pakage_name" id="pelle-package_1" checked={packageID == 'pakage_name' ? true : false} onChange={selectHandler} />
                                بسته پله، ۳ روزه (۱۲۰هزار تومان)
                            </div>
                            <div className="card-price_86">
                                ۱۲۰ هزار تومان
                            </div>
                        </label>

                        <button className="btn btn-animate payment-btn_86">
                            <Link to={''}>
                                پرداخت
                            </Link>
                        </button>

                    </div>

                </div>
            </div>
        )

    } else return (
        <div className="card">
            <div className="discription_86">

                <button className="btn back-btn_86" onClick={() => setExplanation(false)}>
                    <span> <BsChevronRight /> </span>
                    بازگشت
                </button>
                <hr />

                <h5> مزیت‌های پله </h5>

                <section>
                    <h6>
                        قرار گرفتن آگهی روی «پله»
                    </h6>
                    <p>
                        با پله، آگهی شما می‌تواند در صدر آگهی‌های کاپوت، بالاتر از تمام آگهی‌های نردبان شده و عادی قرار گیرد. ۲ جایگاه اول فهرست آگهی‌ها به صورت تصادفی بین آگهی‌های پله شده توزیع می‌شوندتا این جایگاه‌ها عادلانه بین آگهی‌های پله شده تقسیم شوند.
                    </p>
                </section>
                <section>
                    <h6>
                        افزایش بازدید آگهی در مقایسه با نردبان
                    </h6>
                    <p>
                        با پله، بازدیدهای آگهی شما تا چند برابر بیشتر از امکان نردبان است. آگهی‌های پله‌شده هم در بخش جایگاه ویژهٔ پله، هم در فهرست آگهی‌های عادی نمایش داده می‌شود.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default PellePromote