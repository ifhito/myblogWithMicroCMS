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
            <main id="main">
                <h1 id="head-center">
                    <Link href="/" passHref>
                    <a><span className="head-color">HOTAKES BLOG</span></a>
                    </Link>
                </h1>
                <Nav />
                <div id="main-content">
                    {children}
                </div>
            </main>
            <style jsx>{`
                #head-center {
                    text-align: center;
                }
                #main {
                    width: 100%;
                }
                #main-content {
                    width: 40rem;
                    margin-left: auto;
                    margin-right: auto;
                }
            `}</style>
        </>
        )
  }