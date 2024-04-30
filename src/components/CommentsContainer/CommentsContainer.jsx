import { useRef, useState } from 'react'
import './CommentsContainer.css' // Code => 54
import { Input, TextArea } from '../Inputs/Inputs'
import RaittingToggle from '../RaittingToggle/RaittingToggle'
import { BsReplyAll } from 'react-icons/bs'
import ModalContainer from '../../ModalContainer/ModalContainer'
import { useOutClicker } from '../../Hook/useOutsideClick'
import { useParams } from 'react-router-dom'
// Comments List will came from " Detales Page "

const CommentsContainer = ({commentList}) => {
    let user_image = '/Images/NoPhoto.jpg';
    const postID = useParams().productID
    const [reply_ref, closeAction] = useOutClicker(replyCancel)
    const [raite, setRaite] = useState(0)
    const [error, setError] = useState({})
    const [commentReply, setCommentReply] = useState(false)
    const replyTo = useRef('')
    const commentId = useRef('')


    const validetion = (obj) => {
        let errors = {};
        obj.map(item => {
            if (!item[1]) errors[item[0]] = 'این قسمت نباید خالی بماند!';
        })
        return Object.keys(errors).length == 0 ? null : errors;
    }

    const commentFormSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        form.append('postId', postID)

        const errors = validetion([...form.entries()])
        if (errors) {
            setError(errors)
            return
        } else setError({})

    }

    const replyFormSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        form.append('postId', postID)
        form.append('commentId', commentId.current)

        const errors = validetion([...form.entries()])
        if (errors) {
            setError(errors)
            return
        } else setError({})

    }

    const replyActive = (id, name) => {
        replyTo.current = name
        commentId.current = id
        setCommentReply(true)
    }

    function replyCancel() {
        replyTo.current = ''
        commentId.current = ''
        setCommentReply(false)
    }

    return (<>
        <div className="container_54">
            <div className="comments-content_54 no-scrollbar">
                <ul>
                    {commentList && commentList.map((cmt, index) =>
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

                <form onSubmit={commentFormSubmit}>
                    <Input
                        name='username'
                        label='نام خود را وارد کنید'
                        helpText='نام'
                        error={error['username']}
                    />
                    <TextArea
                        className="comment-msg_54"
                        label='متن کامنت'
                        name='message'
                        helpText='نظر خود را درباره این محصول بیان کنید'
                        error={error['message']}
                    />
                    <div className="form-btns_54">
                        <button type="submit" className="btn btn-animate comment-btn_54">
                            ثبت نظر
                        </button>
                    </div>
                </form>
            </div>

        </div>
        {commentReply &&
            <ModalContainer onClick={closeAction}>
                <div ref={reply_ref} className="card reply-card_54">
                    <div className="reply-header_54">
                        پاسخ به نظر <span> {replyTo.current} </span>
                    </div>
                    <form onSubmit={replyFormSubmit}>
                        <Input
                            name='username'
                            label='نام خود را وارد کنید'
                            helpText='نام'
                            error={error['username']}
                        />
                        <TextArea
                            className="comment-msg_54"
                            label='پاسخ شما'
                            name='message'
                            helpText={`در پاسخ به نظر ${replyTo.current} ...`}
                            error={error['message']}
                        />
                        <div className="form-btns_54">
                            <button type="submit" className="btn btn-animate comment-btn_54">
                                ثبت پاسخ
                            </button>
                            <button className="btn reply-btn_54" onClick={replyCancel}>
                                انصراف
                            </button>

                        </div>
                    </form>
                </div>
            </ModalContainer>
        }
    </>)
}

export default CommentsContainer