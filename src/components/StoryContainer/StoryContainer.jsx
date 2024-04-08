import { useRef, useState } from 'react'
import './StoryContainer.css' // Code => 11
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import ModalContainer from '../../ModalContainer/ModalContainer'

const StoryContainer = () => {
    const storyList = Array.from(Array(20).keys())
    const [showStory, setShowStory] = useState(false)
    const scrollArea_ref = useRef(null)

    const arrowClickHandler = (n) => {
        const scroll_val = (scrollArea_ref.current.offsetWidth / 2) - 100;
        scrollArea_ref.current.scrollLeft = (-1) * (Math.abs(scrollArea_ref.current.scrollLeft) + (scroll_val * n))
    }

    const openStoryBox = () => {
        setShowStory(!showStory)
    }
    return (
        <>
            <div className="container story-container_11">
                <div className="next-arrow_11" >
                    <BsChevronLeft size={'100%'} onClick={() => arrowClickHandler(1)} />
                </div>
                <ul ref={scrollArea_ref} className="stories_11 no-scrollbar">
                    {storyList.map(story =>
                        <li key={story} className="story-item_11">
                            <span className="profile-img_11" onClick={openStoryBox}>
                                <img src="/public/Images/NoPhoto.jpg" alt="" />
                            </span>
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
                <ModalContainer onClick={openStoryBox}>
                    <div className="">
                        فعلا آماده نیست
                    </div>
                </ModalContainer>
            }
        </>
    )
}

export default StoryContainer