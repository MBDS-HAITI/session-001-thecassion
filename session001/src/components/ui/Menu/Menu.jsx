import React from "react";
import MenuItem from "./MenuItem.jsx";
import styles from "./Menu.module.css";

function Menu() {
    return (
        <nav className={styles.nav}>
        <ul className={styles.menu}>
            {
            [   ["Home", "#home"],
                ["Notes", "#notes"],
                ["Etudiants", "#students"],
                ["Matières", "#matieres"],
                ["A propos", "#about"]].map(([label, link]) => (
                <MenuItem key={label} label={label} link={link} />
            ))
        }
        </ul>
        </nav>
    );
    }

export default Menu;