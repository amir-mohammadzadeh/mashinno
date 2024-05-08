import React, { useEffect, useRef, useState } from 'react'
import './PostManagement.css' // Code 83
import { NavLink, Navigate, Outlet, useLocation, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import DeleteModule from '../../components/DeleteModule/DeleteModule'

const PostManagement = () => {
    const User_Posts = useSelector(state => state.userInfo.posts)
    const [deleteAlert, setDeletAlert] = useState(false)
    const params = useParams()
    const location = useLocation()
    const tab_content = useRef(null)
    let status_color = 'green_87' || 'red_87' || 'orange_87';

    const Post = User_Posts.find(post => post.id == params.postID)

    //if(!Post) return <Navigate to={'/page-not-found'} />

    const isActiveLink = (link) => {
        return link.isActive ? 'active-tab_83' : 'tab_83'
    }

    useEffect(() => {
        let endpoint = location.pathname.split('/')[5]
        const tabClickAnimate = (n) => {
            let position;
            window.innerWidth <= 568
                ? position = tab_content.current.children[n].offsetTop
                : position = tab_content.current.children[n].offsetLeft;

            const size = tab_content.current.children[n].offsetWidth;
            tab_content.current.style.setProperty('--tab-size', `${size}px`)
            tab_content.current.style.setProperty('--tab-position', `${position}px`)
        }
        switch (endpoint) {
            case 'preview':
                tabClickAnimate(0)
                break
            case 'pelle-promote':
                tabClickAnimate(1)
                break
            case 'promote':
                tabClickAnimate(2)
                break
            case 'edit':
                tabClickAnimate(3)
                break
        }
    }, [location])

    const deletPost = () => {
        console.log('حذف کردن آگهی')

        setDeletAlert(false)
    }

    return (<>
        <header className="main-header_83">
            <div className="post-status_83">
                <span className={`h5 ${status_color}`}>
                    درصف انتشار
                </span>
                <span className="status-dis_83">
                    آگهی شما درصف انتشار قرار دارد.
                </span>
            </div>
            <div className="h-btn_83">
                <button className="btn delete-btn_83" onClick={() => setDeletAlert(true)}>
                    حذف آگهی
                </button>
            </div>
        </header>

        <div className="main-content_83">
            <div ref={tab_content} className="tab-bar_83">
                <NavLink to='preview' className={isActiveLink}>
                    <span>
                        پیش‌نمایش و آمار
                    </span>
                </NavLink>
                <NavLink to='pelle-promote' className={isActiveLink}>
                    <span>
                        افزایش بازدید با پله
                    </span>
                </NavLink>
                <NavLink to='promote' className={isActiveLink}>
                    <span>
                        ارتقا
                    </span>
                </NavLink>
                <NavLink to='edit' className={isActiveLink}>
                    <span>
                        ویرایش
                    </span>
                </NavLink>
            </div>
            <Outlet context={[Post]} />
        </div>
        
        {deleteAlert && <DeleteModule
            onYes={deletPost}
            onCancel={() => setDeletAlert(false)}
            message='این آگهی حذف شود؟'
        />}

    </>)
}

export default PostManagement