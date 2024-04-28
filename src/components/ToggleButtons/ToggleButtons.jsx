import { useState } from 'react'
import { BsBookmarkHeartFill, BsHandThumbsUpFill, BsHeartFill, BsShare } from 'react-icons/bs'

export const LikeButton = ({ onClick, isChecked = false, className = '', type = 'heart' }) => {
    const [checked, setChecked] = useState(isChecked)
    const iconAtr = {
        fill: checked ? type == 'heart' ? '#ef4444' : '#111827' : 'transparent',
        stroke: checked ? type == 'heart' ? '#ef4444' : '#111827' : 'currentColor'
    }
    const clickHandler = (e) => {
        onClick(e,!checked)
        setChecked(!checked)
    }
    return (
        <div className={className} onClick={clickHandler}>
            <span style={{ cursor: 'pointer' }}>
                {type == 'heart' && <BsHeartFill {...iconAtr} strokeWidth={1} viewBox='0 -1 16 18' size={22} />}
                {type == 'bookmark' && <BsBookmarkHeartFill {...iconAtr} strokeWidth={0.8} viewBox='0 -1 16 18' size={25} />}
                {type == 'hand' && <BsHandThumbsUpFill {...iconAtr} strokeWidth={0.8} viewBox='0 -1 16 18' size={25} />}
            </span>
        </div>
    )
}

export const ShareButton = ({ onShare, className }) => {
    return (
        <div className={className} onClick={onShare} style={{ cursor: 'pointer' }}>
            <BsShare size={20} />
        </div>
    )
}