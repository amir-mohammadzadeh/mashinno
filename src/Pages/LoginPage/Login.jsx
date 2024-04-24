import { useEffect, useRef, useState } from 'react'
import './Login.css' // Code => 7
import { Input } from '../../components/Inputs/Inputs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Toast from '../../components/Toast/Toast';
import SupportWidget from '../../components/SupportWidget/SupportWidget';
import { ButtonLoader } from '../../components/Loading/Loading';
import { useDispatch } from 'react-redux';
import { setUserLogin } from '../../redux/UserReducer/userSlice';

const Login = () => {
   const location = useLocation()
   const navigate = useNavigate()
   const dispatch = useDispatch()
   let timerID = useRef(null)
   const form_ref = useRef(null)
   const codeInput = useRef(null)
   const timer_ref = useRef(null)
   const phoneNumber = useRef(null)
   const [error, setError] = useState({})
   const [pendding, setPendding] = useState(false)
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

   useEffect(() => { if (verificationCode) setTimer() }, [verificationCode])


   const sendCode = () => {
      let errors = {}
      if (!phoneNumber.current.value) errors['phone'] = 'لطفا شماره تلفن را وارد کنید!';
      else if (phoneNumber.current.value.length != 11) errors['phone'] = 'شماره تلفن‌صحیح نمیباشد!';

      if (Object.keys(errors).length != 0) {
         setError(errors)
         return
      } else setError({})

      alert('شماره تلفن به سمت سرور ارسال میشود تا کد تایید برایش فرستاده شود\nو در پاسخ این درخواست کد تایید دریافت میشد تا در  یک state ذخیره شود.')
      setPendding(true)
      // تابعی برای شبیه سازی عملکرد ای‌پی‌ای میباشد
      testAPI_getCode(false, 0).then(code => {

         form_ref.current.style.transform = 'translateX(-100%)';
         setToast({ header: '', msg: 'کد تایید برای شما ارسال شد!', type: 'success', timer: 3 })

         //=>  پس از بازگشت پاسخ کد دریافت شده در یک استیت ذخیره میشود
         setVerificationCode(code)
         setPendding(false)
      })
         .catch(e => {
            setToast({ header: '', msg: 'خطایی در ارسال کد رخ داده لطفا دوباره اقدام کنید!', type: 'error', timer: 4 })
            setPendding(false)
         })

   }

   const loginHandler = () => {

      testAPI_login(false).then(tokan => {
         dispatch(setUserLogin({
            value: true,
            tokan: tokan,
            phoneNumber: phoneNumber.current.value
         }))
         localStorage.setItem('tokan', tokan)
         navigate(location.state || '/')
      })

   }

   const checkingCode = () => {
      if (pendding) return
      if (codeInput.current.value == verificationCode) {
         alert('مجددا شماره به سرور ارسال میشود تا یک حساب کاربری برایش ثبت شده و یک توکن ایجاد شود')
         setPendding(true)
         loginHandler()

      } else {
         alert('کد وارد شده صحیح نمیباشد!')
         setPendding(false)
      }
   }

   const reSendCodeHandler = () => {
      setPendding(true)
      //alert('شماره تلفن به سمت سرور ارسال میشود تا کد تایید برایش فرستاده شود\nو در پاسخ این درخواست کد تایید دریافت میشد تا در  یک state ذخیره شود.')
      //=>  پس از بازگشت پاسخ کد دریافت شده در یک استیت ذخیره میشود
      testAPI_getCode(false, 1).then(code => {

         setPendding(false)
         setToast({ header: '', msg: 'کد تایید مجددا برای شما ارسال شد!', type: 'success', timer: 3 })

         //=>  پس از بازگشت پاسخ کد دریافت شده در یک استیت ذخیره میشود
         setVerificationCode(code)

      })
         .catch(e => {
            setToast({ header: '', msg: 'خطایی در ارسال کد رخ داده لطفا دوباره اقدام کنید!', type: 'error', timer: 4 })

         })
   }

   return (<>
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
                  <Input ref={phoneNumber} type='tel' helpText='مثال: 09141234567' error={error['phone']} />
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

                  {pendding ? <div className="my-1"><ButtonLoader /></div>
                     :
                     <button className="btn btn-animate btn_7" onClick={sendCode}>
                        ارسال کد
                     </button>
                  }
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

                  <button className="btn btn-animate btn_7" onClick={checkingCode}>
                     {pendding ? <ButtonLoader /> : 'تایید'}
                  </button>

               </div>
            </div>
         </section>
      </div>
      <SupportWidget scrollBtn={false} />
      {toast &&
         <Toast {...toast} onClose={() => setToast(null)} />
      }
   </>)
}

export default Login

function testAPI_getCode(er, i) {
   let c = ['1234', '4321']
   const getCode = new Promise((resolve, reject) => {
      if (!er) {
         setTimeout(() => {
            resolve(c[i])
         }, 5000)
      } else {
         setTimeout(() => {
            reject('خطایی رخ داده!')
         }, 4000)
      }
   })
   return getCode
}

function testAPI_login(er) {
   const login = new Promise((resolve, reject) => {
      if (!er) {
         setTimeout(() => {
            resolve('sdxjkfduyge874yr38iyr4387t3uihg387vgf')
         }, 5000)
      } else {
         setTimeout(() => {
            reject('خطایی رخ داده!')
         }, 4000)
      }
   })

   return login
}