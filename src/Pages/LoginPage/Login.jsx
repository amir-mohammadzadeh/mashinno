import { useEffect, useRef, useState } from 'react'
import './Login.css' // Code => 7
import { Input } from '../../components/Inputs/Inputs';
import { Link, useNavigate } from 'react-router-dom';
import Toast from '../../components/Toast/Toast';
import SupportWidget from '../../components/SupportWidget/SupportWidget';

const Login = () => {
   const navigate = useNavigate()
   let timerID = useRef(null)
   const form_ref = useRef(null)
   const codeInput = useRef(null)
   const timer_ref = useRef(null)
   const phoneNumber = useRef(null)
   const [error, setError] = useState(null)
   const [verificationCode, setVerificationCode] = useState(null)
   const [toast, setToast] = useState(null)//=> { header:'', msg:'', type:'', timer:0 }

   useEffect(() => {
      document.title = 'ثبت نام و ورود | فروشگاه آنلاین کاپوت';
      document.getElementById('MainFooter').style.display = 'none';
   }, [])

   const setTimer = () => {
      clearInterval(timerID.current)
      const [min_tag, sec_tag] = [timer_ref.current.children[0], timer_ref.current.children[1]]
      let [min, sec] = [2, 30]
      timer_ref.current.style.display = 'block';
      min_tag.innerHTML = '02';
      sec_tag.innerHTML = '30';

      timerID.current = setInterval(() => {
         sec -= 1;
         if (sec == 0) {
            min -= 1
            sec = 59
         }
         (sec < 10) ? sec_tag.innerHTML = `0${sec}` : sec_tag.innerHTML = sec;
         min_tag.innerHTML = `0${min}`;

         if (min == (-1)) {
            clearInterval(timerID.current)
            timer_ref.current.style.display = 'none';
            setVerificationCode(null)
         }
      }, 1000)
   }

   useEffect(() => { verificationCode && setTimer() }, [verificationCode])

   const sendCode = () => {

   }

   const firstStepClickHandler = () => {
      if (phoneNumber.current.value) {
         alert('شماره تلفن به سمت سرور ارسال میشود تا کد تایید برایش فرستاده شود\nو در پاسخ این درخواست کد تایید دریافت میشد تا در  یک state ذخیره شود.')
         //=>  پس از بازگشت پاسخ کد دریافت شده در یک استیت ذخیره میشود
         form_ref.current.style.transform = 'translateX(-100%)';
         setToast({ header: '', msg: 'کد تایید برای شما ارسال شد!', type: 'success', timer: 2 })
         setVerificationCode('1234')
      } else setError('لطفا شماره تلفن را وارد کنید!')

   }
   const secondStepClickHandler = () => {
      if (codeInput.current.value == verificationCode) {
         alert('مجددا شماره به سرور ارسال میشود تا یک حساب کاربری برایش ثبت شده و یک توکن ایجاد شود')
         navigate('/')
      } else {
         alert('کد وارد شده صحیح نمیباشد!')
      }
   }
   const reSendCodeHandler = () => {
      alert('شماره تلفن به سمت سرور ارسال میشود تا کد تایید برایش فرستاده شود\nو در پاسخ این درخواست کد تایید دریافت میشد تا در  یک state ذخیره شود.')
      //=>  پس از بازگشت پاسخ کد دریافت شده در یک استیت ذخیره میشود
      setVerificationCode('7585')
   }

   return (
      <>
         <div className="login-main_7">
            <section className="login-card_7">
               <div className="header_7">
                  <h5>   ورود / ثبت نام   </h5>
               </div>

               <div ref={form_ref} className="form-container_7">
                  <div className="form_7">
                     <span>
                        برای استفاده از امکانات کاپوت لطفاً شمارهٔ موبایل خود را وارد کنید. کد تأیید به این شماره پیامک خواهد شد.
                     </span>
                     <Input ref={phoneNumber} type='tel' helpText='مثال: 09141234567' error={error} />
                     <div className="ruls-content_7">
                        <Link>
                           شرایط استفاده از خدمات
                        </Link>
                        و
                        <Link>
                           حریم خصوصی
                        </Link>
                        کاپوت را میپذیرم
                     </div>
                     <button className="btn btn-animate btn_7" onClick={firstStepClickHandler}>
                        ارسال کد
                     </button>
                  </div>

                  <div className="form_7">
                     <span>
                        کد تایید به شماره {phoneNumber.current?.value} ارسال شد
                     </span>

                     <Input ref={codeInput} type='number' className="code-input_7" helpText='کد تایید را وارد کنید' />
                     <div className="code-timer_7">
                        <div ref={timer_ref} className="timer-content_7">
                           <span>00</span> : <span>00</span>
                        </div>
                        <span onClick={reSendCodeHandler}>
                           ارسال موجدد
                        </span>
                     </div>
                     <button className="btn btn-animate btn_7" onClick={secondStepClickHandler}>
                        تایید
                     </button>

                  </div>
               </div>
            </section>
         </div>
         <SupportWidget scrollBtn={false} />
         {toast &&
            <Toast {...toast} onClose={() => setToast(null)} />
         }
      </>
   )
}

export default Login