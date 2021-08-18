import React from "react";
import Link from "next/link";
const Nav: React.FC = () => {
    return (
        <div id="link-container">
            <Link href="/" passHref>
                <a className="link">
                    HOME
                </a>
            </Link>
            <Link href="/about" passHref>
                <a className="link">
                    ABOUT
                </a>
            </Link>
            <Link href="/link" passHref>
                <a className="link">
                    LINK
                </a>
            </Link>
            <style jsx>{`
                .link {
                    color: #2196F3;
                    margin: 100px;
                    width: 10%;
                }
                #link-container {
                    display: 'flex';
                    text-align: center;
                    margin-bottom: 50px;
                }
                @media (max-width: 767px){
                    .link {
                        font-size: 40px;
                        margin: 60px
                    }
                }
            `}</style>     
        </div>
    )
}

export default Nav;

