import DatePicker from "../DatePicker/DatePicker"
import TimePicker from "../TimePicker/TimePicker"
import "./DateTimePicker.css"

const DateTimePicker = ({ title = null,
    updateDate,
    updateTime,
    showGraphic }) => {
    const turbine_idx = title.split(" ")[1]
    const submitHandler = (event) => {
        event.preventDefault();
        showGraphic(event, turbine_idx);
    }
    return (
        <form id="datetime-picker" onSubmit={submitHandler}>
            <DatePicker updateDate={updateDate} />
            <TimePicker updateTime={updateTime} />
            <button >SHOW</button>
        </form>
    )

}

export default DateTimePicker