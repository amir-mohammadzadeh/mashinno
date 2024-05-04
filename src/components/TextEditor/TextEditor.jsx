import { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import './TextEditor.css' // Code =>53

const TextEditor = ({ onChange, value, defaultText, className = '', readOnly }) => {
  const [text, setText] = useState(defaultText || '')
  
  const modules = {
    toolbar: [
      [{ 'size': ['small', false, 'large', 'huge'] }], 
      ['bold', 'underline', 'strike'],
      ['link'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }], 
      [{ 'align': [] }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
    ]
  }

  useEffect(() => {
    if(!readOnly) onChange(text)
  }, [text])

  if (readOnly) return <div dangerouslySetInnerHTML={{ __html: value }} />
  else return (
    <div dir='ltr' className={className}>
      <ReactQuill className='editor_53' modules={modules} theme='snow' value={text}
        onChange={setText} />
    </div>
  )
}

export default TextEditor
