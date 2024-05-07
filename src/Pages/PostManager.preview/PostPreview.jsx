import './PostPreview.css' //Code => 83
import { Link, useOutletContext } from 'react-router-dom'
import { BsCopy } from 'react-icons/bs'
import TextEditor from '../../components/TextEditor/TextEditor'

const PostPreview = () => {
  const [Post_data] = useOutletContext()

  const copyPostLink = () => {
    navigator.clipboard.writeText('لینک آگهی')
  }

  return (
    <div className="card demo-content_83">
      <div className="demo-info_83">
        <h4>
          عنوان آگهی
        </h4>
        <ul className="info-content_83">
          <li className="info-item_83">
            یک روز پیش در تبریز
          </li>

          <li className="info-item_83">

            <span className="label_83">
              لینک آگهی
            </span>
            <span className="value_83 info-link_83 txt-red_83">
              <Link to={''} target='_blank'>
                kapot/kj
              </Link>
              <span className="copy-icon_3" onClick={copyPostLink}>
                <BsCopy />
              </span>
            </span>
          </li>
          <li className="info-item_83">
            <span className="label_83">
              خودرو
            </span>
            <span className="value_83">
              کیا - اپتیما
            </span>
          </li>
          <li className="info-item_83">
            <span className="label_83">
              دسته بندی
            </span>
            <span className="value_83 txt-red_83">
              لوازم برقی
            </span>
          </li>
          <li className="info-item_83">
            <span className="label_83">
              قیمت
            </span>
            <span className="value_83">
              ۱۵۶۳۸ تومان
            </span>
          </li>


        </ul>
        <div className="demo-discription_83">
          <span className="h5">
            توضیحات
          </span>
          <TextEditor readOnly={true} value={'<span>توضیحات</span>'} />
        </div>
      </div>
      <div className="map-amar_83">
        <div className="map_83"></div>
        <div className="amar_83"></div>
      </div>
    </div>
  )
}

export default PostPreview