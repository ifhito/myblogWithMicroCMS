import React from 'react';
import Nav from './nav';

export default function Header() {
    return(
        <header>
            <h1 id="head-center">
                <span className="head-color">HOTAKES BLOG</span>
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