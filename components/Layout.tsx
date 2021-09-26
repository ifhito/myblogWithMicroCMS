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
                    {children}
                </main>
                <Footer/>
            </div>
            <style jsx>{`
                #main {
                    max-width: 800px;
                }
                #wrapper {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                }
                @media (max-width: 767px){
                    #wrapper {
                        padding: 0 3rem;
                    }
                    #main {
                        max-width: 450px;
                    }
                }
            `}</style>
        </>
        )
  }