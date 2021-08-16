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
                        <style jsx global>{`
                            #head-center {
                                text-align: center;
                            }
                        `}</style>
                    </h1>
                <Nav />
            {children}
            </main>
        </>
        )
  }