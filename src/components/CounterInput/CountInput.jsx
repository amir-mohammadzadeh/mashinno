import './CountInput.css' // Code => 011

const CountInput = ({ value, onPluse, onMinus, className = '' }) => {
  const minus = () => {
    value != 1 && onMinus()
  }
  return (
    <div className={`counter_011 ${className}`} >
      <div className="button_011" onClick={onPluse}>
        &#43;
      </div>
      <input value={value} onWheel={(e) => e.target.blur()} type='number' className="result_011" />
      <div className="button_011" onClick={minus}>
        &#8722;
      </div>
      
    </div>
  )
}

export default CountInput