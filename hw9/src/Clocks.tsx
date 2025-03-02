import { useState } from "react";
import Clock from "./Clock";
import { v4 as uuidv4 } from 'uuid';

function Clocks() {
    const [clocks, setClock] = useState([]);
    const onSubmit = (evt) => {
        evt.preventDefault();
        const city = evt.target.city.value.trim();
        const timeZone = evt.target.timeZone.value.trim();
        if(city && (timeZone.slice(0, 1) === '+') && (parseInt(timeZone.slice(1)) <= 12)) {
            setClock(odlClocks => [...odlClocks, {id: uuidv4(), city: city, timeZone: timeZone}]);
        }
        if(city && (timeZone.slice(0, 1) === '-') && (parseInt(timeZone.slice(1)) <= 14)) {
            setClock(odlClocks => [...odlClocks, {id: uuidv4(), city: city, timeZone: timeZone}]);
        }
        if(city && (parseInt(timeZone) === 0)) {
            setClock(odlClocks => [...odlClocks, {id: uuidv4(), city: city, timeZone: timeZone}]);
        }
    }

    const remove = (id) => {
        setClock(prevState => prevState.filter(el => el.id !== id));
    }

    return (
        <div>
            <form className="addClock" onSubmit={onSubmit}>
                <label htmlFor="city">Название</label>
                <input type="text" id="city" name="city"/>
                <label htmlFor="timeZone">Временная зона</label>
                <input type="text" id="timeZone" name="timeZone"/>
                <button className="btn">Добавить</button>
            </form>
            {clocks && (
                <ul className="clocks">
                    {clocks.map((item) =>
                        <li className="clock" key={item.id}>
                            <Clock props={item}/>
                            <button className="delete" onClick={() => remove(item.id)}>X</button>
                        </li>
                    )}
                </ul>
            )}
        </div>
    )
}

export default Clocks;