import { useState } from "react";

import styles from "./Navbar.module.scss";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuToggler = () => setMenuOpen((p) => !p);

    return (
        <div className={styles.header}>
            <div className={styles.header__content}>
                <div>
                    <b style={{color: "#000"}}>Logo</b>
                </div>
                <div>
                    <nav className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}>
                        <Link className={styles.nav__item} to={'/'}>Home</Link>
                        <Link className={styles.nav__item} to={'/'}>Home</Link>
                        <Link className={styles.nav__item} to={'/'}>Home</Link>
                        <div className={styles.nav__button__container}>
                            <Button />
                        </div>
                    </nav>
                </div>
                <div>
                    <div className={styles.header__button__container}>
                        <Button />
                    </div>
                    <button className={styles.header__toggler} onClick={menuToggler}>
                        {menuOpen ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}
                    </button>
                </div>
            </div>
        </div>
    );
};

const Button = () => {
    return <button className={styles.button}>Click me</button>;
};

export default Header;