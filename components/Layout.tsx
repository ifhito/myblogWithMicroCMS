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
            <div id="wrapper">
                <a className='skip-main-contents' href='#main'>
                    Skip to main content
                </a>
                <Header/>
                {children}
                <Footer/>
            </div>
            <style jsx>{`
                #main {
                    max-width: 740px;
                }
                #wrapper {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                }
                .skip-main-contents {
                    background: transition;
                    height: 30px;
                    width: fit-content;
                    left: 0;
                    padding: 8px;
                    position: absolute;
                    transform: translateY(-100%);
                    transition: transform 0.3s;
                }
                .skip-main-contents:focus {
                    transform: translateY(0%);
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