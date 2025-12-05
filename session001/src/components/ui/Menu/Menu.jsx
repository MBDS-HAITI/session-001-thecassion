import React from "react";
import MenuItem from "./MenuItem.jsx";
import styles from "./Menu.module.css";
 

function Menu() {
    const menuList = [
        ["Home", "home"],
        ["Notes", "notes"],
        ["Etudiants", "students"],
        ["Matières", "subjects"],
        ["A propos", "about"]
    ];
    return (
        <nav className={styles.nav}>
        <ul className={styles.menu}>
            {
            menuList.map(([label, link]) => (
                <MenuItem 
                key={label}
                label={label}
                link={link}
            />
            ))
        }
        </ul>
        </nav>
    );
    }

export default Menu;