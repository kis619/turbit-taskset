import { useState } from 'react';
import DateTimePicker from "../DateTimePicker/DateTimePicker";
import { MdWindPower, MdSpeed } from "react-icons/md"
import { ImPower } from "react-icons/im"

import "./TurbineInformation.css";

const TurbineInformation = ({ title }) => {
    const [selectedDate, setSelectedDate] = useState("31.03.2016");
    const [selectedTime, setSelectedTime] = useState("00:00");

    const [data, setData] = useState()

    const handleDateChange = (event) => {
        const formattedDate = event.target.value.split("-").reverse().join(".")
        setSelectedDate(formattedDate);
    }

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    }

    const updateGraphic = (event, idx = 7) => {
        console.log(idx)
        event.preventDefault();
        const timestamp = `${selectedDate}, ${selectedTime}`
        fetch(`http://localhost:8001/turbine_wind_and_power?turbine=turbine${idx}&date=${timestamp}`)
            .then(res => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err))
    }

    return (
        <div className='turbine-box'>
            <div className='title-icon'>
                <h1>{title}</h1> <MdWindPower id='turbine-icon' />
            </div>
            <DateTimePicker
                title={title}
                updateDate={handleDateChange}
                updateTime={handleTimeChange}
                showGraphic={updateGraphic}
            />
            {data
                ? <div>
                    <div className='data-icon'>
                        <MdSpeed id='speed-icon' />
                        <span>Wind speed: <span className='data'>{data["Wind (m/s)"]}  m/s </span></span>
                    </div>
                    <div className='data-icon'>
                        <ImPower id='power-icon' />
                        <span>Wind power: <span className='data'>{data["Leistung (kW)"]} kW </span></span>
                    </div>
                </div>
                : <span>Choose a date and time to see <br /> the wind speed and power</span>
            }

        </div>
    )
}

export default TurbineInformation