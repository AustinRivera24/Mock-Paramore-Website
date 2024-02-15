import { NavLink } from "react-router-dom";
import "./App.css"

function Navbar ({customStyle}) {
    return(
        <nav className={customStyle}>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/music-videos">Music</NavLink></li>
                <li><NavLink to="/store">Store</NavLink></li>
                <li><NavLink to="/fan-page">Fan Discussion</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;