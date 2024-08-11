import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = ({ isLoggedIn }) => {
    return (
        <>
        <nav>
            
            <div className="nav__container">
            <img className="logo" src={logo} alt="Reassure logo" />

            <div className="links__container">
                <Link to="/" className="nav__button">Home</Link>
                <Link to="/breathe" className="nav__button">Breathe</Link>
                <Link to="/about" className="nav__button--about">About</Link>
                {!isLoggedIn && <Link to="/login" className="nav__button">Login</Link>}
                {isLoggedIn && <Link to="/profile" className="nav__button">Profile</Link>}
            </div>
            </div>
        </nav>
        
        </>
    )
};
export default Header;