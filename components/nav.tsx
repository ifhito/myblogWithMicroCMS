import React from "react";
import Link from "next/link";
const Nav: React.FC = () => {
    return (
        <ul id="link-container">
            <li>
                <Link href="/" passHref>
                    <a className="link space-2">
                        HOME
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/about" passHref>
                    <a className="link space-2">
                        ABOUT
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/link" passHref>
                    <a className="link space-5">
                        LINK
                    </a>
                </Link>
            </li>
            <style jsx>{`
                .link {
                    color: #2196F3;
                    margin: 100px;
                    width: 10%;
                }
                #link-container {
                    display: flex;
                    text-align: center;
                    margin-bottom: 35px;
                }
                @media (max-width: 767px){
                    .link {
                        margin: 20px;
                        font-size: 25px;
                    }
                    .space-5 {
                        letter-spacing: 5px;
                    }
                    .space-2 {
                        letter-spacing: 2px;
                    }
                }
                
            `}</style>     
        </ul>
    )
}

export default Nav;

