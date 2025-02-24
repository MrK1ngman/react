// eslint-disable-next-line react/prop-types
function Stream({ title }) {
    return (
        <div className="stream">
            <img src="https://images.vexels.com/media/users/3/135176/isolated/preview/a6508e565d25ab01f79a35c4319e0083-play-button-flat-icon.png"/>
            <h3 className="stream-title">{title}</h3>
        </div>
    )
}

export default Stream