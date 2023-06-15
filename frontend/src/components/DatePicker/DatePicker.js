import "./DatePicker.css"

const DatePicker = ({ title, updateDate }) => {
    return (
        <div>
            <label htmlFor="date-picker">Choose a date:</label><br />
            <input
                type="date"
                id="date-picker"
                className="input-field"
                defaultValue={"2016-03-31"}
                min="2016-01-01"
                max="2016-03-31"
                onChange={updateDate} /><br />
        </div>
    )
}

export default DatePicker
