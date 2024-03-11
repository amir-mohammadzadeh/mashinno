
const SubMenu = ({valueList, onClick}) => {
    return (
        <ul className='submenu_content-12'>
            {valueList.map((item, index) =>
                <li key={index} className="submenu-item-12">
                    <a href="#" onClick={onClick}>
                        زیرمجموعه {item+1}
                    </a>
                </li>
            )}
        </ul>
    )
}

export default SubMenu