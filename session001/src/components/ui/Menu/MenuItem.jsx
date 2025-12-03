import React from "react";
import styles from "./Menu.module.css";

function MenuItem({ label, link, isActive, onClick }) {
    const handleClick = (e) => {
        // prevent default link behavior
        e.preventDefault();
        onClick();
    };
    return (
        <li className={styles.menuItem}>
            <a href={link}
            className={isActive ? styles.active : ''}
            onClick={handleClick}
            >{label}</a>
        </li>
    );
}

MenuItem.propTypes = {
    label: React.PropTypes?.string,
    link: React.PropTypes?.string,
    isActive: React.PropTypes?.bool,
    onClick: React.PropTypes?.func,
};

export default MenuItem;