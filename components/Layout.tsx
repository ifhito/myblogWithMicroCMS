import React, { ReactFragment } from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
interface LayoutProps {
    children: React.ReactNode;
 }

export default function Layout({ children }:LayoutProps) {
    return (
        <>
            <Head>
                <title>hotakesBlog</title>
                <Nav />
            </Head>
            {children}
        </>
        )
  }