import { useState } from 'react'
import './CommentsContainer.css' // Code => 54
import { Input, TextArea } from '../Inputs/Inputs'
import RaittingToggle from '../RaittingToggle/RaittingToggle'

// Comments List will came from " Detales Page "

const CommentsContainer = ({ commentList = [1] }) => {
    const [raite, setRaite] = useState(0)
    const [userNameValue, setUserNameValue] = useState("")
    const [messageValue, setMessageValue] = useState("")
    const sendComment=(e)=>{
        e.preventDefault()
        console.log(messageValue)
    }
    return (
        <div className="container_54">
            <div className="comments-content_54 no-scrollbar">
                <ul>
                    {commentList.map((cmt, index) =>
                        <CommentCard key={index} {...cmt} />
                    )}
                </ul>
                <div className="isEmpty_5">
                    فعلا نظری برای این محصول ثبت نشده!
                </div>
            </div>
            <div className="comment-form_54">
                <div className="ratinng-content_54">
                    <span className="h6">
                        چقدر از این محصول راضی بودی؟
                    </span>
                    <div className="">
                        <RaittingToggle raite={raite} onChange={setRaite} />
                    </div>
                </div>
                <form onSubmit={sendComment}>
                    <Input value={userNameValue} onChange={setUserNameValue} helpText='نام' name='username' label='نام خود را وارد کنید' required={true} />
                    <TextArea className="comment-msg_54" value={messageValue} onChange={setMessageValue} helpText='نظر خود را درباره این محصول بیان کنید' name='message' label='متن کامنت' required={true} />
                    <button type="submit" className="btn btn-animate comment-btn_54">
                        ثبت نظر
                    </button>
                </form>
                <div className="tes"></div>
            </div>

        </div>
    )
}

export default CommentsContainer

function CommentCard({ username, comment, image }) {
    let user_image = image || '/Images/NoPhoto.jpg';

    return (
        <li className="comment-card_54">
            <div className="user-info_54">
                <span className="user-img_54">
                    <img src={user_image} alt="User_Image" />
                </span>
                <span>
                    نام کاربر
                </span>
            </div>
            <p>
                در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
        </li>
    )
}