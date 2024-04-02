import React from 'react'
import './Inputs.css' //Code => 04

export const Input = ({ value, onChange, name, label, helpText, type = 'text',required=false, className='' }) => {

    return (
        <div className={`input-box_04 ${className}`}>
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

export const TextArea = ({ value, onChange, name, label, helpText,required=false,className='' }) => {

    return (
        <div className={`input-box_04 ${className}`}>
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
