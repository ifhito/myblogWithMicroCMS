import React, { ReactFragment } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
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
                <Header/>
                <main id="main">
                    <div id="main-content">
                        {children}
                    </div>
                </main>
                <Footer/>
            </div>
            <style jsx>{`
                #main {
                    width: 100%;
                }
                #main-content {
                    margin-left: auto;
                    margin-right: auto;
                }
                #wrapper {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
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