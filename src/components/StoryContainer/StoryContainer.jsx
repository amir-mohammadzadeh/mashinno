import { useRef, useState } from 'react'
import './StoryContainer.css' // Code => 11
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import ModalContainer from '../../ModalContainer/ModalContainer'
import { useHorizontalScroll } from '../../Hook/useHorizontalScroll'

const StoryContainer = () => {
    const storyList = Array.from(Array(20).keys())
    const [showStory, setShowStory] = useState(false)
    const scrollArea_ref = useHorizontalScroll()

    const arrowClickHandler = (n) => {
        const scroll_val = (scrollArea_ref.current.offsetWidth / 2) - 100;
        scrollArea_ref.current.scrollLeft = (-1) * (Math.abs(scrollArea_ref.current.scrollLeft) + (scroll_val * n))
    }

    const openStoryBox = () => {
        setShowStory(!showStory)
    }
    const storyNextArrow = () => {
        console.log('Go to " next " story')
    }
    const storyPreventArrow = () => {
        console.log('Go to " prevent " story')
    }
    return (<>
        <div className="container story-container_11">
            <div className="next-arrow_11" >
                <BsChevronLeft size={'100%'} onClick={() => arrowClickHandler(1)} />
            </div>
            <ul ref={scrollArea_ref} className="stories_11 no-scrollbar">
                {storyList.map(story =>
                    <li key={story} className="story-item_11">
                        <div className="profile-img_11" onClick={openStoryBox}>
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
            <ModalContainer>
                <div className="story-preview_11">
                    <div className="image-content_11">
                        <img src="/public/Images/no-image.webp" alt="" />
                    </div>
                    <div className="story-avatar_11">
                        <div className="avatar-img_11">
                            <img src="/Images/NoPhoto.jpg" alt="" />
                        </div>
                        <span className="line-limit-1">
                            نام فروشگاه
                        </span>
                    </div>
                    <div className="story-p-arrow_11" onClick={storyPreventArrow}>
                        <BsChevronRight size={32} />
                    </div>
                    <div className="stpry-n-arrow_11" onClick={storyNextArrow}  >
                        <BsChevronLeft size={32} />
                    </div>
                    <div className="close-story_11" onClick={openStoryBox}>
                        &#10006;
                    </div>
                </div>
            </ModalContainer>
        }
    </>)
}

export default StoryContainer