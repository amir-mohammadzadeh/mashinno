import React from 'react'
import './Inputs.css' //Code => 03

export const Input = ({ value, onChange, name, label, helpText, type = 'text',required=false }) => {

    return (
        <div className='input-box-03'>
            <input
                id={name + '_input'}
                type={type}
                placeholder={helpText}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required={required}
            />
            <label htmlFor={name + "_input"}>
                {label}
            </label>
        </div>
    )
}

export const TextArea = ({ value, onChange, name, label, helpText,required=false }) => {

    return (
        <div className='input-box-03'>
            <textarea
                id={name + '_textarea'}
                placeholder={helpText}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required={required}
            ></textarea>

            <label htmlFor={name + '_textarea'}>
                {label}
            </label>
        </div>
    )
}
