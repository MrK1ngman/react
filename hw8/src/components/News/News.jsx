// eslint-disable-next-line react/prop-types
function News({ icon, title }) {
    return (
        <div className="news">
            <img className="icon" src={icon}/>
            <p className="news-title">{title}</p>
        </div>
    )
}

export default News