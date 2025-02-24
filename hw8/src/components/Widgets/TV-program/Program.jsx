// eslint-disable-next-line react/prop-types
function Program({ time, nameChannel, channel }) {
    return (
        <li className="program">
            <h3 className="time">{time}</h3>
            <h3 className="nameChannel">{nameChannel}</h3>
            <h3 className="channel">{channel}</h3>
        </li>
        
    )
}

export default Program