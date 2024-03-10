import React from 'react'

const timer_styls = {
    display:"flex",
    alignItems:'center'
}

const timer_body_style={
    display:"flex",
    alignItems:'center',
    gap:'.5rem',
    textAlign:"center"
}

export const CardTimer = () => {
    return (
        <>
            
                <span style={{flexGrow:"1"}}>
                    ۱۰٪ تخفیف
                </span>
                <div style={timer_body_style}>
                    <div>
                        <span>
                            15
                        </span>
                        <small>
                            ثانیه
                        </small>
                    </div>
                    <div>
                        <span>
                            21
                        </span>
                        <small>
                            دقیقه
                        </small>
                    </div>
                    <div>
                        <span>
                            05
                        </span>
                        <small>
                            ساعت
                        </small>
                    </div>
                </div>
            
        </>
    )
}
