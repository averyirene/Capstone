import "./Header.scss";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = ({ isLoggedIn }) => {
    return (
        <>
        <nav>
            
            <div className="nav__container">
            <Link to="/"><img className="logo" src={logo} alt="Reassure logo" /></Link>

            <div className="links__container">
                <NavLink to="/" className={({ isActive }) => isActive ? "nav__button active" : "nav__button"}>Home</NavLink>
                <NavLink to="/breathe" className={({ isActive }) => isActive ? "nav__button active" : "nav__button"}>Breathe</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "nav__button--about active" : "nav__button--about"}>About</NavLink>
                {!isLoggedIn && (<NavLink to="/login" className={({ isActive }) => isActive ? "nav__button active" : "nav__button"}>Login</NavLink>)}
                {isLoggedIn && (<NavLink to="/profile" className={({ isActive }) => isActive ? "nav__button active" : "nav__button"}>Profile</NavLink>)}
            </div>
            </div>
        </nav>
        
        </>
    )
};
export default Header;