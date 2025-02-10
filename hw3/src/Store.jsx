/* eslint-disable react/prop-types */
import { useState } from "react";
import IconSwitch from "./IconSwitch";
import ListView from "./ListView";
import CardsView from "./CardsView";

function Store({ products }) {
    const [view, setView] = useState('view_module')
    
    const onSwitch = (icon) => {
        icon === 'view_module' ? setView('view_list') : setView('view_module');
    }

    return (
        <>
            <IconSwitch 
                icon={view}
                onSwitch={onSwitch}
            />
            {view === 'view_module' ? (
                <CardsView cards={products}/>
            ) : (
                <ListView items={products}/>
            )}
        </>
    )

}

export default Store;