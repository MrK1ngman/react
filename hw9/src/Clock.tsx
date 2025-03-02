import moment from 'moment';
import { useEffect, useState } from 'react';

function Clock({ props }) {
    const time = () => moment().utcOffset(parseInt(props.timeZone)).format("HH:mm");
    const [date, setDate] = useState(time());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(time())
        }, 1000);

        return () => clearInterval(intervalId);
      }, []);

    return (
        <>
            <h4 className="title">{props.city}</h4>
            <div className="time">{date}</div>
        </>    
    )
}

export default Clock