import './RaittingToggle.css' // Code => 55

const RaittingToggle = ({ raite, onChange }) => {
    const starList = Array.from(Array(5).keys())

    return (
        <div className="star-box_55">

            {starList.map(index =>

                <span
                    key={index}
                    className={`star_55 ${index + 1 <= raite && 'active_55'}`}
                    onClick={() => onChange(index + 1)}
                >
                    {index + 1 <= raite ? <>&#10031;</> : <>&#10025;</>}
                </span>
            )}
        </div>
    )
}

export default RaittingToggle