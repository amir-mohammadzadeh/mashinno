import './SideMenu.css' // Code => 32

const SideMenu = ({ className, onSelect }) => {
    const Category_List = ['گیربکس', 'جلوبندی', 'لوازم برقی', 'لوازم موتور', 'بدنه', 'لاستیک و رینک']
    
    const selectHandeler = (e) => {
        onSelect(e.target.value, e.target.checked)
    }

    return (
        <aside className={`sidemenu_32 ${className}`}>
            <div className="content_32 no-scrollbar">
                <span className="h5">
                    دسته بندی‌ها
                </span>
                <ul className="categories_32">
                    {Category_List.map((item, idx) =>
                        <li key={idx}>
                            <input className="input_32" type="checkbox" id={`cate-${idx}C32`} value={item} onChange={selectHandeler} />
                            <label className="item_32" htmlFor={`cate-${idx}C32`}>
                                {item}
                            </label>
                        </li>
                    )}
                </ul>

            </div>

        </aside>
    )
}

export default SideMenu
