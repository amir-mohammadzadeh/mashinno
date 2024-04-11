import { useState } from 'react'
import './CommentsContainer.css' // Code => 54
import { Input, TextArea } from '../Inputs/Inputs'
import RaittingToggle from '../RaittingToggle/RaittingToggle'
import { BsReplyAll } from 'react-icons/bs'
// Comments List will came from " Detales Page "

const CommentsContainer = ({ commentList = [1] }) => {
    let user_image = '/Images/NoPhoto.jpg';
    const [raite, setRaite] = useState(0)
    const [userNameValue, setUserNameValue] = useState("")
    const [messageValue, setMessageValue] = useState("")
    const [commentReply, setCommentReply] = useState({ value: false, commentID: 0, commentAuther: '' })
    
    const sendComment = (e) => {
        e.preventDefault()
        if (commentReply.value) {
            alert(`پاسخ ${userNameValue} به نظر ${commentReply.commentAuther}\nاز طریق API  ثبت خواهد شد....`)
        } else {
            alert(`نظر ${userNameValue} از طریق API  ثبت خواهد شد....`)
        }
    }

    const replyActive = (id, name) => {
        setCommentReply({ value: true, commentID: id, commentAuther: name })
    }

    const replyCancel = () => {
        setCommentReply({ value: false, commentID: 0, commentAuther: '' })
        setMessageValue('')
        setUserNameValue('')
    }

    return (
        <div className="container_54">
            <div className="comments-content_54 no-scrollbar">
                <ul>
                    {commentList.map((cmt, index) =>
                        <li key={index}>
                            <div className="comment_54">
                                <div className="comment-header_54">
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
                                <span className="answer-btn_54" onClick={() => replyActive(1, 'نام کاربر')}>
                                    پاسخ
                                    <BsReplyAll />
                                </span>
                            </div>

                            <div className="reply_54">
                                <div className="comment-header_54">
                                    <span className="user-img_54">
                                        <img src={user_image} alt="User_Image" />
                                    </span>
                                    <span className="answer_54">پاسخ </span>
                                    <span>
                                        نام کاربر
                                    </span>
                                </div>
                                <p>
                                    در این صورت می توان امید داشت که تمام و شرایط سخت اساسا مورد استفاده قرار گیرد.
                                </p>
                            </div>
                        </li>
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

                {commentReply.value &&
                    <div className="on-reply_54">
                        پاسخ به نظر <span> {commentReply.commentAuther} </span>
                    </div>
                }

                <form onSubmit={sendComment}>
                    <Input value={userNameValue} onChange={setUserNameValue} helpText='نام' name='username' label='نام خود را وارد کنید' required={true} />
                    <TextArea className="comment-msg_54" value={messageValue} onChange={setMessageValue} helpText='نظر خود را درباره این محصول بیان کنید' name='message' label='متن کامنت' required={true} />
                    <div className="form-btns_54">
                        <button type="submit" className="btn btn-animate comment-btn_54">
                            {commentReply.value ? 'ثبت پاسخ' : "ثبت نظر"}
                        </button>

                        {commentReply.value &&
                            <button className="btn reply-btn_54" onClick={replyCancel}>
                                انصراف
                            </button>
                        }
                    </div>
                </form>
            </div>

        </div>
    )
}

export default CommentsContainer