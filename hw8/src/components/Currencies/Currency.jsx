// eslint-disable-next-line react/prop-types
function Currency({ name, value }) {
    return (
        <li className="currency">
            <h4 className="name">{name} {value}</h4>
        </li>
    )
}

export default Currency