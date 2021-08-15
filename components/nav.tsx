import React from "react";
import Link from "next/link";
const containerStyle = {
    display:'flex'
}
const itemStyle = {
    padding: 10
}
const Nav: React.FC = () => {
    return (
        <div style={containerStyle}>
            <Link href="/" passHref>
                <a style={itemStyle}>
                    HOME
                </a>
            </Link>
            <Link href="/about" passHref>
                <a style={itemStyle}>
                    About
                </a>
            </Link>
            <Link href="/connect" passHref>
                <a style={itemStyle}>
                    CONNECT
                </a>
            </Link>          
        </div>
    )
}

export default Nav;

