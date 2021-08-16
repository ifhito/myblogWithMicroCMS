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
            <a>
                <h1>
                    <Link href="/" passHref>
                        HOTAKES BLOG
                    </Link>
                </h1>
            </a>
            <Nav />
            {children}
        </>
        )
  }