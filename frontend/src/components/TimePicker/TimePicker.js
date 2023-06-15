import '../DatePicker/DatePicker.css';
import './TimePicker.css';

function TimePicker({ updateTime }) {

    const hours = [];
    for (let i = 0; i < 24; i++) {
        hours.push(i < 10 ? '0' + i : i);
    }

    const minutes = ['00', '10', '20', '30', '40', '50'];

    const timeOptions = [];
    hours.forEach(hour => {
        minutes.forEach(minute => {
            timeOptions.push(`${hour}:${minute}`);
        });
    });

    return (
        <div>
            <label htmlFor="time-picker">Pick a time:</label><br />
            <select
                className="input-field"
                id="time-picker"
                onChange={updateTime}>
                {timeOptions.map((time, i) => (
                    <option key={i} value={time}>{time}</option>
                ))}
            </select>
        </div>
    );
}

export default TimePicker;
