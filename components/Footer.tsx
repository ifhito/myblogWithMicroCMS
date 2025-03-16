import React, { ReactFragment } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
    return(
        <footer id={styles.footer} className="head-color">
            <p className={styles.footerText}>© 2021 HOTAKE</p>
        </footer>
    );
}