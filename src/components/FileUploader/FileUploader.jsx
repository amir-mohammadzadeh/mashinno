import { useId } from 'react'
import './FileUploader.css'
import { BiImageAdd, BiSolidMessageSquareError } from 'react-icons/bi'

export const ImageUploader_Multi = ({ name, accept, onUpload, imageList, deleteAction, error, size, className = '', multiple = false }) => {
    const id = useId()

    const inputChangeHandel = (event) => {
        if (onUpload) onUpload(event)
    }

    return (
        <div className={`upload-box_008 ${className}`} style={{ '--size': size }}>
            <div className="upload-btn_008">
                <input type="file" name={name} multiple={multiple} accept={accept} autoComplete='off' id={`uploader${id}m`} onChange={inputChangeHandel} />
                <label htmlFor={`uploader${id}m`} style={{ width: size, height: size }} > <BiImageAdd size={42} /> </label>
            </div>
            {imageList && imageList.map((img, idx) =>
                <div key={`img:ul:${idx}`} className="image_008" style={{ width: size, height: size }}>
                    <img src={img.url} alt="" />
                    <div className="remove-img_008" onClick={() => deleteAction(img.id)}>
                        &#10006;
                    </div>
                </div>
            )}

            {error &&
                <div className="error-msg_008">
                    <span> <BiSolidMessageSquareError /> </span>
                    فایل بار گذاری نشد
                    {error}
                </div>
            }
        </div>
    )
}