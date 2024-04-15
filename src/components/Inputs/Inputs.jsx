import { forwardRef, useId } from 'react'
import './Inputs.css' //Code => 04

export const Input = forwardRef(({ onChange, label, helpText, error, name='', type = 'text', required = false, className = '',readOnly=false }, ref) => {
    const changeHandler = (e) => onChange && onChange(e)
    const id = useId()
    return (
        <div className={`input-box_04 ${className}`}>
            <input
                ref={ref}
                id={id + name}
                type={type}
                placeholder={helpText}
                onChange={changeHandler}
                required={required}
                inputMode={type == 'numder'? 'numeric' : type}
                readOnly={readOnly}
            />
            <label htmlFor={id + name}>
                {label}
            </label>
            {error && <span className="error_04"> {error} </span>}
        </div>
    )
})

export const TextArea = forwardRef(({ onChange,  label, helpText, error, name='',required = false, className = '',readOnly=false }, ref) => {
    const changeHandler = (e) => onChange && onChange(e)
    const id = useId()
    return (
        <div className={`input-box_04 ${className}`}>
            <textarea
                ref={ref}
                id={id + name}
                placeholder={helpText}
                onChange={changeHandler}
                required={required}
                readOnly={readOnly}
            ></textarea>
            <label htmlFor={id + name}>
                {label}
            </label>
            {error && <span className="error_04"> {error} </span>}
        </div>
    )
})
