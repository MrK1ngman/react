// eslint-disable-next-line react/prop-types
function Weather({ img, temperature }) {
    return (
        <div className="weather">
            <h2 className="weather-header">Погода</h2>
            <img className="img-weather" src={img}/>
            <h2 className="temperature">{temperature}</h2>
        </div>
    )
}

export default Weather