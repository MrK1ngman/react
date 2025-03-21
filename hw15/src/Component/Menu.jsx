import { NavLink } from 'react-router-dom'

function Menu() {
    const classNameFunc = ({ isActive }) =>
        "menu__item" + (isActive ? " menu__item-active" : "");
    
    return (
        <nav className="menu">
            <NavLink to="/" className={classNameFunc}>Главная</NavLink>
            <NavLink to="/drift" className={classNameFunc}>Дрифт-такси</NavLink>
            <NavLink to="/timeattack" className={classNameFunc}>Time Attack</NavLink>
            <NavLink to="/forza" className={classNameFunc}>Forza Karting</NavLink>
        </nav>
    );
}

export default Menu