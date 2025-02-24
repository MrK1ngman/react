// eslint-disable-next-line react/prop-types
function Card({ img, title, text, btnText }) {
    return (
      <div className="card" style={{width: '18rem'}}>
        {img}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#" className="btn btn-primary">{btnText}</a>
        </div>
      </div>
    )
  }
  
  export default Card
  