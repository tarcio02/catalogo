import { NavLink } from "react-router-dom";
import { StyleHeader } from "./style";

function Header () {
    return (
        <StyleHeader>
            <div className="container">
            <h1><span className="title">GW</span> <span className="sub">j<i class="fa-regular fa-gem"></i>ias</span></h1>
            <ul>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "noActive")} to="/">Anéis</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "noActive")} to="/pulseiras">Pulseiras</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "noActive")} to="/brincos">Brincos</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "noActive")} to="/colares">Colares</NavLink>
                </li>
            </ul>
            </div>
        </StyleHeader>
    )
}

export default Header