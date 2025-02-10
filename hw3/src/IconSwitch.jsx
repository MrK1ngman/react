/* eslint-disable react/prop-types */
function IconSwitch({ icon, onSwitch }) {
    return (
        <div className='icon' onClick={() => onSwitch(icon)}>{icon}</div>
    )
}

export default IconSwitch;