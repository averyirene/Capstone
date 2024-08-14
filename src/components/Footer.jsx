import { Link } from "react-router-dom";
import './Footer.scss';
import facebook from '../assets/reassure-facebook.png';
import instagram from '../assets/reassure-instagram.png';
import twitter from '../assets/reassure-twitter.png';

const Footer = () => {

    return (
        <>
            <div className="footer__container">

                <div className="footer__items--container">

                    <img className="footer__items" src={facebook} alt="Facebook logo" />
                    <img className="footer__items" src={instagram} alt="Instagram logo" />
                    <img className="footer__items" src={twitter} alt="Twitter logo" />
                    <p className="footer__text">Contact: averyirenes@gmail.com</p>

                </div>


            </div>

        </>

    );
};

export default Footer; 