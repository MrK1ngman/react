/* eslint-disable react/prop-types */
function ShopItem({ card }) {
    return (
        <li className="shop-item">
            <img className="img" src={card.img}/>
            <h2 className="name">{card.name}</h2>
            <h4 className="color">{card.color}</h4>
            <h4 className="price">${card.price}</h4>
            <button className="addToCart">ADD TO CART</button>
        </li>
    )
}

export default ShopItem;