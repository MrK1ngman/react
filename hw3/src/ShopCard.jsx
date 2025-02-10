/* eslint-disable react/prop-types */
function ShopCard({ card }) {
    return (
        <li className="shop-card">
            <img className="img" src={card.img}/>
            <div className="info">
                <h2 className="name">{card.name}</h2>
                <h4 className="color">{card.color}</h4>
                <div className="control">
                    <h4 className="price">${card.price}</h4>
                    <button className="addToCart">ADD TO CART</button>
                </div>
            </div>
        </li>
    )
}

export default ShopCard;