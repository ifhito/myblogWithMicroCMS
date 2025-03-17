import React from 'react';
import styles from './Header.module.css';
import Nav from './nav';

export default function Header() {
    return(
        <header className={styles.header}>
            <h1 id={styles.headCenter}>
                <span id={styles.titleHeader}>HOTAKES BLOG</span>
            </h1>
            <Nav />
        </header>
    );
}