import React from "react";
import styles from './Nav.module.css';
import Link from "next/link";

const Nav: React.FC = () => {
    const links:{pass:string,text:string}[] = [{'pass':'/','text':'HOME'},{'pass':'/about','text':'ABOUT'}, {'pass':'/link','text':'LINK'}]
    return (
        <ul id={styles.linkContainer}>
            {links.map((item,i)=>{
                return(
                <li id={styles.link} key={i}>
                    <Link href={item.pass} className={`${styles.navItem} space-2`}>
                        {item.text}
                    </Link>
                </li>
                );
            })}
        </ul>
    )
}

export default Nav;

