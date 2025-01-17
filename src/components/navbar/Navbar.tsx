import { useState } from "react";

import styles from "./Navbar.module.scss";

import { faBars, faMagnifyingGlass, faShoppingCart, faUser, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import Carousel from "../carousel/carousel";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuToggler = () => setMenuOpen((p) => !p);

    return (
        <div className={styles.header}>
            <div className={styles.header__content}>
                <div>
                    <Link to={'/home'}><img style={{width:"100px"}} src="/sportdepotlogo.svg"/></Link>
                </div>
                <div>
                    <nav className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}>
                            <Link to="">Store</Link>
                        <div className={styles.nav__button__container}>
                        <button style={{margin:'0.4rem', backgroundColor:'transparent', border:'none'}}><FontAwesomeIcon style={{color:'#6F00FF'}} icon={faShoppingCart}/></button>
                        <Link style={{margin:'0.4rem', backgroundColor:'transparent', border:'none'}} to={'/search'}><FontAwesomeIcon style={{color:'#6F00FF'}} icon={faMagnifyingGlass} /></Link>
                        <button style={{margin:'0.4rem', backgroundColor:'transparent', border:'none'}}><FontAwesomeIcon style={{color:'#6F00FF'}} icon={faUser} /></button>
                        </div>
                    </nav>
                </div>
                <div>
                    <div className={styles.header__button__container}>
                    <Link style={{margin:'0.4rem', backgroundColor:'transparent', border:'none'}} to={'/cart'}><FontAwesomeIcon style={{color:'#6F00FF'}} icon={faShoppingCart}/></Link>
                        <Link style={{margin:'0.4rem', backgroundColor:'transparent', border:'none'}} to={'/search'}><FontAwesomeIcon style={{color:'#6F00FF'}} icon={faMagnifyingGlass} /></Link>
                        <Link style={{margin:'0.4rem', backgroundColor:'transparent', border:'none'}} to={'/user'}><FontAwesomeIcon style={{color:'#6F00FF'}} icon={faUser} /></Link>
                    </div>
                    <button className={styles.header__toggler} onClick={menuToggler}>
                        {menuOpen ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}
                    </button>
                </div>
            </div>

            {/* <div className={styles.bankingBanner}>
            </div> */}
            <Carousel />
        </div>
    );
};

// const Button = () => {
//     return <button className={styles.button}> <Link to={'/cart'}><FontAwesomeIcon icon={faShoppingCart} /></Link></button>;
// };

export default Header;