import React from "react";
import MenuItem from "./MenuItem.jsx";
import styles from "./Menu.module.css";

function Menu() {
    const [activePath, setActivePath] = React.useState(window.location.hash ||'#home');
    const menuList = [
        ["Home", "#home"],
        ["Notes", "#notes"],
        ["Etudiants", "#students"],
        ["Matières", "#subjects"],
        ["A propos", "#about"]
    ];
    const handleMenuClick = (path) => {
        setActivePath(path);
        // change the URL hash without reloading the page
        globalThis.location.hash = path;
    };

    return (
        <nav className={styles.nav}>
        <ul className={styles.menu}>
            {
            menuList.map(([label, link]) => (
                <MenuItem 
                key={label}
                label={label}
                link={link}
                isActive={activePath === link}
                onClick={() => handleMenuClick(link)}
                />
            ))
        }
        </ul>
        </nav>
    );
    }

export default Menu;