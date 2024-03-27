import React from 'react'
import './Loading.css'

const Loading = () => {
    return (
        <div>
            <div className="loader">
                <div className="load-inner load-one"></div>
                <div className="load-inner load-two"></div>
                <div className="load-inner load-three"></div>
                <span className="text">Loading...</span>
            </div>
        </div>
    )
}
const Loading_2 = () => {
    return (
        <div>
            <div className="loader2">
                <span className="ball ball1"></span>
                <span className="ball"></span>
                <span className="ball"></span>
                <span className="ball"></span>
                <span className="ball"></span>
            </div>

        </div>
    )
}

export default Loading