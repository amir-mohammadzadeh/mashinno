import { useState } from 'react'
import './StoryContainer.css' // Code => 11
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import ModalContainer from '../../ModalContainer/ModalContainer'
import { useHorizontalScroll } from '../../Hook/useHorizontalScroll'
import Stories from 'react-insta-stories';
import { useOutClicker } from '../../Hook/useOutsideClick'

const StoryContainer = () => {
    const storyList = Array.from(Array(20).keys())
    const [showStory, setShowStory] = useState(false)
    const scrollArea_ref = useHorizontalScroll()
    const [modal_ref, closeAction] = useOutClicker(setShowStory)

    const arrowClickHandler = (n) => {
        const scroll_val = (scrollArea_ref.current.offsetWidth / 2) - 100;
        scrollArea_ref.current.scrollLeft = (-1) * (Math.abs(scrollArea_ref.current.scrollLeft) + (scroll_val * n))
    }

    const storyBoxToggle = () => {
        setShowStory(!showStory)
    }

    const stories = [
        '/public/Images/no-image.webp',
        {
            url: '/public/Banners/baner_2.webp',
            duration: 5000,
            header: {
                heading: 'نام کاربر',
                subheading: 'Posted 30m ago',
                profileImage: '/public/Images/NoPhoto.jpg',
            },
        },
    ];


    return (<>
        <div className="container story-container_11">
            <div className="next-arrow_11" >
                <BsChevronLeft size={'100%'} onClick={() => arrowClickHandler(1)} />
            </div>
            <ul ref={scrollArea_ref} className="stories_11 no-scrollbar">
                {storyList.map(story =>
                    <li key={story} className="story-item_11">
                        <div className="profile-img_11" onClick={storyBoxToggle}>
                            <img src="/Images/NoPhoto.jpg" alt="" />
                        </div>
                        <span className="name_11 line-limit-1">
                            نام فروشگاه
                        </span>
                    </li>
                )}
            </ul>
            <div className="prevent-arrow_11" onClick={() => arrowClickHandler(-1)}>
                <BsChevronRight size={'100%'} />
            </div>
        </div>

        {showStory &&
            <ModalContainer onClick={closeAction}>
                <div ref={modal_ref} dir='ltr' className="story-preview_11">
                    <Stories
                        stories={stories}
                        defaultInterval={5000}
                        keyboardNavigation={true}
                        width={'100%'}
                        height={'100%'}
                        onAllStoriesEnd={storyBoxToggle}
                    />
                    <div className="close-story_11" onClick={storyBoxToggle}>
                        &#10006;
                    </div>
                </div>
            </ModalContainer>
        }
    </>)
}

export default StoryContainer
