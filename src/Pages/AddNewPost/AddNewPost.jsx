import { useEffect, useRef, useState } from 'react'
import './AddNewPost.css'  // Code => 9
import Selection from '../../components/Selection/Selection'
import { Input, TextArea } from '../../components/Inputs/Inputs'
import { BiImageAdd, BiSolidMessageSquareError } from "react-icons/bi";
import TextEditor from '../../components/TextEditor/TextEditor';
import SupportWidget from '../../components/SupportWidget/SupportWidget';
import ProvincesCities from '../../assets/Data/Provinces_and_Cities.json' //=> لیست استان ها و شهر ها
import Brands from '../../assets/Data/Brands.json'

const Category_List = ['گیربکس', 'جلوبندی', 'لوازم برقی', 'لوازم موتور', 'بدنه', 'لاستیک و رینک']
const Exampel_ImageList = Array.from(Array(3).keys())

const AddNewPost = () => {
   const [error, stError] = useState({})
   const provinces_cities_list = useRef(ProvincesCities)
   const brands_list = useRef(Brands)
   const provincesList = useRef([])
   const citiesList = useRef([])
   const brandList = useRef([])
   const modelList = useRef([])

   const [ostan, setOstan] = useState('')
   const [city, setCity] = useState('')
   const [brand, setBrand] = useState('')
   const [model, setModel] = useState('')
   const [category, setCategory] = useState('')
   const [phoneCall, setPhoneCall] = useState(true)
   const [linkAllow, setLinkAllow] = useState(false)
   const postDiscription = useRef('')

   provincesList.current = provinces_cities_list.current.map(item => item.ostan)
   brandList.current = brands_list.current.map(item => item.name)


   const selectBrand = (value) => {
      if (value) {
         const b = brands_list.current.find(item => item.name == value)
         modelList.current = b.cars.map(i => i.title)
         setBrand(value)
      } else {
         modelList.current = []
         setBrand('')
         setModel('')
      }
   }

   const selectModel = (value) => {
      let model = value || '';
      setModel(model)
   }

   const selectOstan = (value) => {
      if (value) {
         citiesList.current = provinces_cities_list.current.find(item => item.ostan == value).cities
         setOstan(value)
      } else {
         citiesList.current = []
         setCity('')
         setOstan('')
      }
   }

   const selectCity = (value) => {
      let user_city = value || '';
      setCity(user_city)
   }

   const selectCategory = (value) => {
      let cate = value || '';
      setCategory(cate)
   }

   const setDiscription = (payload) => {
      postDiscription.current = payload
   }

   const formSubmitHandler = (e) => {
      e.preventDefault()
      const form = new FormData(e.target)
      form.append('brand', brand)
      form.append('carModel', model)
      form.append('ostan', ostan)
      form.append('city', city)
      form.append('category', category)
      form.append('discription', postDiscription.current)
      form.append('allowCall', phoneCall)

      // صرفا جهت نمایش اطلاعات فرم است
      for (const pair of form.entries()) {
         console.log(pair[0], pair[1]);
      }

   }


   return (<>
      <main className="container my-2">
         <div className="main-content_9">
            <h1 className="h3"> ثبت آگهی</h1>
            <form className="form_9" onSubmit={formSubmitHandler}>

               <div className="selection-wrapper_9">
                  <span className="field-title_9 col-span_9 m-0">
                     برند و مدل خودرو را اتخاب کنید
                  </span>
                  <Selection
                     firstValue='انتخاب برند'
                     value={brand}
                     optionList={brandList.current}
                     onSelect={selectBrand}
                     menuHeight='15rem'
                     error={error['brand']}
                     searchArea={true}
                  />
                  <Selection
                     firstValue='انتخاب مدل خودرو'
                     value={model}
                     optionList={modelList.current}
                     onSelect={selectModel}
                     menuHeight='15rem'
                     error={error['model']}
                     searchArea={true}
                  />

                  <span className="field-title_9 col-span_9 m-0">
                     استان و شهر خودرا اتخاب کنید
                  </span>
                  <Selection
                     firstValue='انتخاب استان'
                     value={ostan}
                     optionList={provincesList.current}
                     onSelect={selectOstan}
                     menuHeight='15rem'
                     error={error['ostan']}
                     searchArea={true}
                  />
                  <Selection
                     firstValue='انتخاب شهر'
                     value={city}
                     optionList={citiesList.current}
                     onSelect={selectCity}
                     menuHeight='15rem'
                     error={error['city']}
                     searchArea={true}
                  />

               </div>

               <div className="">
                  <span className="field-title_9"> موقعیت مکانی آگهی</span>
                  <div className="map_9">

                  </div>
                  <input type="hidden" name="" />
                  <input type="hidden" name="" />
               </div>

               <div className="my-1">
                  <span className="field-title_9">
                     عکس آگهی
                  </span>
                  <span className="field-label_9">
                     افزودنِ عکس بازدید آگهی شما را تا سه برابر افزایش می‌دهد.
                  </span>

                  <div className="image-content_9 my-1">
                     <div className="image-uploader_9">
                        <input type="file" name="postImage" multiple accept='image/jpeg,image/png' autoComplete='off' id="postIMGUploader9" />
                        <label htmlFor="postIMGUploader9"> <BiImageAdd size={42} /> </label>
                     </div>

                     {Exampel_ImageList.map(img =>

                        <div key={img} className="image_9">
                           <img src="/Images/no-image.webp" alt="" />
                           <span className="remove-img_9">
                              &#10006;
                           </span>
                        </div>

                     )}

                     {error['images'] &&
                        <div className="img-error_9">
                           <span> <BiSolidMessageSquareError /> </span>
                           فایل بارگذاری نشد
                           {error['images']}
                        </div>
                     }

                  </div>
                  <span className="subtext_9">
                     تعداد عکس‌های انتخاب شده نباید بیشتر از ۱۰ باشد.
                  </span>
               </div>

               <div className="">
                  <span className="field-title_9">
                     عنوان آگهی
                  </span>
                  <Input
                     label='در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.'
                     helpText='عنوان آگهی خودرا بنویسید(اجباری)'
                     name='tilte'
                     error={error['title']}
                  />
               </div>

               <div className="">

                  <span className="field-title_9">
                     دسته بندی
                  </span>
                  <Selection
                     className="category-sele_9"
                     firstValue='انتخاب دسته بندی'
                     value={category}
                     optionList={Category_List}
                     onSelect={selectCategory}
                     menuHeight='15rem'
                  />
               </div>

               <div className="">
                  <span className="field-title_9 m-0">
                     قیمت
                  </span>
                  <Input
                     helpText='قیمت به تومان'
                     type='number'
                     name='price'
                     error={error['price']}
                  />
                  <div className="checkbox_9 ">
                     <input type="checkbox" name="tavafogy" id="p:price:t" />
                     <label htmlFor="p:price:t">
                        قیمت توافقی
                     </label>
                  </div>
               </div>

               <div className="">
                  <span className="field-title_9">
                     لینک محصول آگهی
                  </span>
                  <span className="field-label_9">
                     اگر دارای سایت فروشگاهی هستید، با قرار دادن لینک مربوط به محصول آگهی می‌توانید امکان خرید محصول از طریق سایت خود را برای خریداران فرام کنید.
                  </span>
                  <Input
                     helpText='لینک مربوط به محصول آگهی'
                     type='url'
                     name='postLink'
                     readOnly={!linkAllow}
                  />

                  <span className="subtext_9">
                     <span> &#10004; </span>
                     برای فعال کردن این امکان با پرداخت هزینه
                     <b>  ۱۰۰ هزار </b>
                     تومان از
                     <a href="http://" target="_blank" rel="noopener noreferrer">
                        اینجا
                     </a>
                     اقدام کنید.
                  </span>

               </div>

               <div className="border-b_9">
                  <span className="field-title_9">
                     توضیحات آگهی
                  </span>
                  <span className="field-label_9">
                     جزئیات و نکات جالب توجه آگهی خود را کامل و دقیق بنویسید. نوشتن شمارهٔ تماس در متن آگهی مجاز نیست. حتماً به ساعات پاسخگویی خود اشاره کنید.
                  </span>

                  <TextEditor className="post-diss_9" onChange={setDiscription} />

               </div>

               <div className="">
                  <span className="field-title_9">
                     تایید هویت
                  </span>
                  <p className="field-label_9">
                     برای جلوگیری از ورود شماره موبایل متخلف و افزایش سلامت تعاملات، تأیید هویت در کاپوت انجام می‌شود.
                     حساب شما در کاپوت با شمارهٔ ۰۹۱۴۹۸۹۵۶۷۴ فعال است.
                  </p>
                  <Input
                     label='تایید هویت با کد ملی'
                     helpText='مثال ۰۰۲۰۰۶۸۹۰۰'
                     name='codeMelli'
                     error={error['codeMelli']}
                  />
                  <div className="field-label_9">
                     توجه: کد ملی شما به کاربران نمایش داده نمی‌شود.
                     برای سیم‌کارت شرکتی، شناسه ملی ۱۱ رقمی شرکت را وارد کنید.
                  </div>

               </div>

               <div className="">
                  <span className="field-title_9">
                     چت کاپوت
                  </span>
                  <div className="field-label_9">
                     با پیام‌رسان «چت کاپوت»، درون کاپوت با کاربران ارتباط برقرار کنید.
                  </div>
                  <div className="checkbox_9">
                     <input type="checkbox" name="allowChat" id="p:chat:check" />
                     <label htmlFor="p:chat:check">
                        چت کاپوت فعال شود
                     </label>
                  </div>
               </div>

               <div className="">
                  <span className="field-title_9">
                     تماس تلفنی
                  </span>
                  <div className="field-label_9">
                     با فعال کردن این گزینه شمارهٔ شما به کاربران نمایش داده می‌شود و کاربران به همان شماره زنگ می‌زنند.
                  </div>
                  <div className="checkbox_9">
                     <input type="radio" id="p:call:check" checked={phoneCall} onChange={() => setPhoneCall(!phoneCall)} />
                     <label htmlFor="p:call:check">
                        تماس تلفنی فعال
                     </label>
                  </div>
                  <div className="checkbox_9">
                     <input type="radio" id="p:call:uncheck" checked={!phoneCall} onChange={() => setPhoneCall(!phoneCall)} />
                     <label htmlFor="p:call:uncheck">
                        تماس تلفنی غیرفعال
                     </label>
                  </div>
               </div>

               <div>
                  <input type="hidden" name="createDate" value={new Date().toLocaleString()} />
               </div>


               <div className="buttons-group_9">
                  <button type="submit" className="btn btn-animate sub-btn_9">
                     ثبت آگهی
                  </button>
                  <button className="btn calcel-btn_9 ">
                     انصراف
                  </button>
               </div>

            </form>

         </div>
      </main>
      <SupportWidget />
   </>)
}

export default AddNewPost