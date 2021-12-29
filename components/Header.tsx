import React, { ReactFragment } from 'react';
import Link from 'next/dist/client/link';
import Nav from './nav';

export default function Header() {
    return(
        <header>
            <h1 id="head-center">
                <Link href="/" passHref>
                    <a href="replace" id="title-header"><span className="head-color">HOTAKES BLOG</span></a>
                </Link>
            </h1>
            <Nav />
            <style jsx>{`
                #head-center {
                    text-align: center;
                }
                #title-header {
                    text-decoration: none;
                }
            `}</style>
        </header>
    );
}