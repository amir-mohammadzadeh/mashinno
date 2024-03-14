import { Link } from "react-router-dom"

const SubMenu = ({valueList, onClick}) => {
    return (
        <ul className='submenu_content-12'>
            {valueList.map((item) =>
                <li key={item.id} className="submenu-item-12">
                    <Link to={`/brand/${item.slug}`} onClick={onClick}>
                        {item.name}
                    </Link>
                </li>
            )}
        </ul>
    )
}

export default SubMenu