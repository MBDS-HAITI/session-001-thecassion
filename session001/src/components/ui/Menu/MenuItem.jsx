import React from "react";
import PropTypes from "prop-types";
import styles from "./Menu.module.css";
import { Link, useLocation } from "react-router-dom";

function MenuItem({ label, link }) {
    const location = useLocation();
    const isActiveLink = location.pathname === `/${link}`;
    return (
        <li className={styles.menuItem}>
                <Link to={`/${link}`} className={isActiveLink ? styles.active : ''}>
                {label}</Link>
        </li>
    );
}

MenuItem.propTypes = {
    label: PropTypes.string,
    link: PropTypes.string,
};

export default MenuItem;