import React, { ReactFragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Nav from './nav';
interface LayoutProps {
    children: React.ReactNode;
 }

export default function Layout({ children }:LayoutProps) {
    return (
        <>
            <Head>
                <title>hotakesBlog</title>
            </Head>
            <div id="wrapper">
                <main id="main">
                    <header>
                        <h1 id="head-center">
                            <Link href="/" passHref>
                            <a id="title-header"><span className="head-color">HOTAKES BLOG</span></a>
                            </Link>
                        </h1>
                    </header>
                    <Nav />
                    <div id="main-content">
                        {children}
                    </div>
                </main>
                <footer>
                    <p className="head-color">© 2021 HOTAKE</p>
                </footer>
            </div>
            <style jsx>{`
                #head-center {
                    text-align: center;
                }
                #main {
                    width: 100%;
                }
                #main-content {
                    margin-left: auto;
                    margin-right: auto;
                    width: 600px;
                }
                #title-header {
                    text-decoration: none;
                }
                #wrapper {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                }
                footer {
                    margin-top: auto;
                    text-align: center;
                }
                @media (max-width: 767px){
                    #main-content {
                        padding: 0 15px;
                        width: auto;
                    }
                }
            `}</style>
        </>
        )
  }