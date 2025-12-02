import React from "react";
import styles from "./Menu.module.css";

function MenuItem({ label, link }) {
    const onClick = () => {
        alert(label);
    };
    return (
        <li className={styles.menuItem}>
            <a href={link} onClick={onClick}>{label}</a>
        </li>
    );
}

MenuItem.propTypes = {
    label: React.PropTypes?.string,
    link: React.PropTypes?.string
};

export default MenuItem;