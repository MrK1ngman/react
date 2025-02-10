/* eslint-disable react/prop-types */
import ShopItem from "./ShopItem";

function ListView({ items }) {
    return (
        <ul className="list-view">
            {items.map((item, index) =>
               <ShopItem 
                    key={index}
                    card={item}
               /> 
            )}
        </ul>
    )
}

export default ListView;