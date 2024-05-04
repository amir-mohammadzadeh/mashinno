import { Link } from 'react-router-dom';

const SubNav = ({ list }) => {

    return (
        <ul className="sub-menu_21">
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