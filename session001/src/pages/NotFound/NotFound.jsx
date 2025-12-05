import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.errorCode}>404</h1>
                <h2 className={styles.title}>Page non trouvée</h2>
                <p className={styles.message}>
                    Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
                </p>
                <Link to="/" className={styles.homeLink}>
                    Retour à l'accueil
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
