import { Link } from 'react-router-dom';
import { useHorizontalScroll } from '../../../Hook/useHorizontalScroll';

const SubNav = ({ list }) => {
    const container_ref = useHorizontalScroll()
    return (
        <ul ref={container_ref} className="sub-menu_21">
            {list.map((item, index) =>
                <li key={index} className="sub-item_21">
                    <Link to={item.link}>
                        {item.title} 
                    </Link>
                </li>
            )}

        </ul>
    )
}

export default SubNav