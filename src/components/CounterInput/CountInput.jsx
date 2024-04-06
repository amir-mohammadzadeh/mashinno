import './CountInput.css' // Code => 011

const CountInput = ({ value, onPluse, onMinus, onInputValue, className = '' }) => {
  const minus = () => {
    value != 1 && onMinus()
  }
  return (
    <div className={`counter_011 ${className}`} >
      <div className="button_011" onClick={onPluse}>
        &#43;
      </div>
      <input type='number' className="result_011" value={value <= 0 ? 1 : value} onChange={(e) => onInputValue(e)} onWheel={(e) => e.target.blur()} />
      <div className="button_011" onClick={minus}>
        &#8722;
      </div>

    </div>
  )
}

export default CountInput