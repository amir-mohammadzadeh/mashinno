import React, { useState } from 'react'
import './TextEditor.css' // Code =>53
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {
    const [value,setValue]=useState('')
    const modules = {
        toolbar:[
            [{}]
        ]
    }
  return (
    <>
    <div dir='ltr'>
        <ReactQuill className='' theme='snow' value={value} 
        onChange={setValue}/>
    </div>
    <div dangerouslySetInnerHTML={{__html:value}} />
    </>
  )
}

export default TextEditor