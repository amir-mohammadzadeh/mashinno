import React from 'react'
import './Footer.css' // Code => 05
import { BsEnvelopeFill, BsFillGeoAltFill, BsFillTelephoneFill, BsGlobe2, BsWhatsapp, BsLinkedin, BsInstagram } from "react-icons/bs";
import { Link, useMatch } from 'react-router-dom';

function LinkWrapper({ data, title }) {
    return (
        <ul className="links-content">
            <li className="col-title">
                {title}
            </li>
            {data.map((link, index) =>
                <li key={index} className="link_05">
                    <Link to={link.url}>
                        {link.title}
                    </Link>
                </li>
            )}
        </ul>
    )
}

const Footer = () => {
    const dashbord = useMatch('/userdashbord/*')
    const p404 = useMatch('/page-not-found')
    const newpost = useMatch('/new-post')
    
    const Quick_access = [
        { title: 'تماس با ما', url: "" },
        { title: 'درباره کاپوت', url: "" },
        { title: ' قوانین و مقررات', url: "" },
        { title: 'شرایط بازگشت کالا', url: "" },
        { title: 'وبلاگ', url: "" },
    ]
    const Quick_links = [
        { title: ' فرصت های شغلی', url: "" },
        { title: ' فروشنده شو', url: "" },
        { title: ' خدمات خودرویی', url: "" },

    ]
    const Yadaki_links = [
        { title: 'لوازم یدکی سانگ یانگ', url: "" },
        { title: 'لوازم یدکی جیلی', url: "" },
        { title: 'لوازم یدکی هیوندای', url: "" },
        { title: 'لوازم یدکی کیا', url: "" },
        { title: ' لوازم یدکی برلیانس', url: "" },
    ]
    
    if (dashbord || p404 || newpost) return null
    else return (
        <footer id='MainFooter' className="footer_container">
            <div className="container">
                <address className='footer_grid'>
                    <div className="address-content">
                        <div className="title">
                            <span className="icon">
                                <BsFillTelephoneFill size={22} />
                            </span>
                            شماره‌های ارتباطی
                        </div>
                        <a href="tel:02191301374" className='value'>
                            02191301374
                        </a>
                    </div>
                    <div className="address-content">
                        <div className="title">
                            <span className="icon">
                                <BsEnvelopeFill size={22} />
                            </span>
                            ایمیل‌های ارتباطی
                        </div>
                        <Link to="mailto:info@mashinno.com" className='value'>
                            info@kapoot.com
                        </Link>
                    </div>
                    <div className="address-content">
                        <div className="title">
                            <span className="icon">
                                <BsFillGeoAltFill size={22} />
                            </span>
                            ایمیل‌های ارتباطی
                        </div>
                        <span className='value'>
                            آدرس : تهران ،خیابان جمهوری ، نرسیده به خیابان ملت ، کوچه مراغه ای ، بن بست یاس شرقی پلاک ۱۱
                        </span>
                    </div>
                    <div className="address-content">
                        <div className="title">
                            <span className="icon">
                                <BsGlobe2 size={22} />
                            </span>
                            مارا در شبکه‌های اجتماعی دنبال کنید
                        </div>
                        <div className="socials">
                            <a href="">
                                <BsWhatsapp size={25} />
                            </a>
                            <a href="">
                                <BsInstagram size={25} />
                            </a>
                            <a href="">
                                <BsLinkedin size={25} />
                            </a>
                        </div>
                    </div>
                </address>

                <div className="footer_grid">

                    <LinkWrapper data={Quick_access} title={'دسترسی سریع'} />
                    <LinkWrapper data={Yadaki_links} title={'لوازم یدکی'} />
                    <LinkWrapper data={Quick_links} title={'لینک های سریع'} />

                </div>
                <section className="footer-about">
                    <div className="about-body">
                        <h3>
                            خرید اینترنتی لوازم یدکی خودرو
                        </h3>
                        <p>
                            در
                            <Link to="/">
                                 سایت لوازم یدکی کاپوت 
                            </Link>
                            تمام قطعات مورد نیاز برای انواع مدل خودرو موجود در بازار با بهترین قیمت در دسترس شما قرار گرفته است. کافی است با توجه به مدل خودروی خود به دسته‌بندی مربوطه مراجعه کنید یا در کادر جستجوی سایت، قطعه مورد نیازتان را جستجو کنید.
                        </p>
                        <span>
                            <Link to="/adout-us">
                                درباره ما بیشتر بدانید
                            </Link>
                        </span>
                    </div>
                    <div className="footer-about-img">
                        <span>
                            <img src="/Images/footer-img_1.webp" alt="E-nemad" />
                        </span>
                        <span>
                            <img src="/Images/footer-img_2.webp" alt="KasboKar" />
                        </span>
                    </div>
                </section>
                <div className="footer-copy-write" >
                    تمامی حقوق مادی و معنوی این وب سایت برای کاپوت محفوظ می باشد ، هر گونه کپی برداری از سایت پیگرد قانونی دارد .
                    Copyright ©2015-2023
                </div>
            </div>
        </footer>
    )
}

export default Footer