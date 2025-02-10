/* eslint-disable react/prop-types */
import ShopCard from "./ShopCard";

function CardsView({ cards }) {
    return (
        <ul className="card-view">
            {cards.map((item, index) =>
               <ShopCard 
                    key={index}
                    card={item}
               /> 
            )}
        </ul>
    )
}

export default CardsView;