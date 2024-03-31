import React, { useEffect, useRef } from 'react'
import './ShoppingProgresBar.css' // Code => 61
import { useLocation } from 'react-router-dom'

const ShoppingProgresBar = (prop) => {
    const progress_bar = useRef()
    const steps_list = useRef()
    const patchname = useLocation().pathname.split('/')
    console.log(useLocation())
    useEffect(()=>{
        switch(patchname[2]){
            case 'summary':
                /*
                progress_bar.current.style.setProperty('--icon-opacity', '1')
                progress_bar.current.style.setProperty('--start-value', '0')
                progress_bar.current.style.setProperty('--end-value', '13%')
                
                setTimeout(()=>{
                    progress_bar.current.style.setProperty('--icon-opacity', '0')
                    progress_bar.current.style.setProperty('--anim-2', 'none')
                    progress_bar.current.style.setProperty('--anim', 'none')
                },1500)*/
                progress_bar.current.classList.add('step-one_61')
                break
                case 'shipping-details':
                    progress_bar.current.classList.replace('step-one_61','step-two_61')
                    /*
                    progress_bar.current.style.setProperty('--icon-opacity', '1')
                    progress_bar.current.style.setProperty('--start-value', '13%')
                    progress_bar.current.style.setProperty('--end-value', '37%')

                    setTimeout(()=>{
                        progress_bar.current.style.setProperty('--icon-opacity', '0')
                    },1500)*/
                break
        }
    },[patchname])
    return (
        <>
            <aside className="progres-wrapper_61">
                <div ref={progress_bar} className="progress_61"></div>

                <div ref={steps_list} className="step-content_61">
                    <div className="step_61">
                        <span className="title_61">سبد خرید</span>
                        <span className="number_61">1</span>
                    </div>
                    <div className="step_61">
                        <span className="title_61">آدرس و محل تحویل</span>
                        <span className="number_61">2</span>
                    </div>
                    <div className="step_61">
                        <span className="title_61">زمان و نحوه ارسال</span>
                        <span className="number_61">3</span>
                    </div>
                    <div className="step_61">
                        <span className="title_61">تکمیل سفارش</span>
                        <span className="number_61">4</span>
                    </div>

                </div>
            </aside>
        </>
    )
}

export default ShoppingProgresBar