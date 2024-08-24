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
                <NavLink to="/" className="nav__button" activeClassName="active">Home</NavLink>
                <NavLink to="/breathe" className="nav__button" activeClassName="active">Breathe</NavLink>
                <NavLink to="/about" className="nav__button--about" activeClassName="active">About</NavLink>
                {!isLoggedIn && <NavLink to="/login" className="nav__button" activeClassName="active">Login</NavLink>}
                {isLoggedIn && <NavLink to="/profile" className="nav__button"activeClassName="active">Profile</NavLink>}
            </div>
            </div>
        </nav>
        
        </>
    )
};
export default Header;