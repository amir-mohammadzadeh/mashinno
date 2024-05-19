import { useState } from 'react'
import './CountInput.css' // Code => 011

const CountInput = ({ value, onPluse, onMinus, onInputValue, className = '' }) => {
  const [count, setcount] = useState(value)
  const minus = () => {
    value != 1 && onMinus()
  }
  const changeHandel = (e) => {
    setcount(e.target.value)
  }

  const onFocusOut = () => {
    onInputValue && onInputValue(count)
  }

  return (
    <div className={`counter_011 ${className}`} >
      <div className="button_011" onClick={onPluse}>
        &#43;
      </div>
      <input type='number' inputMode='numeric' className="result_011" onBlur={onFocusOut} onChange={changeHandel} value={count <= 0 ? 1 : count} onWheel={(e) => e.target.blur()} />
      <div className="button_011" onClick={minus}>
        &#8722;
      </div>

    </div>
  )
}

export default CountInput