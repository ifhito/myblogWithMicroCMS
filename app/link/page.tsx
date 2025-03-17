import React from "react";
import Link from "next/link";
import styles from "./link.module.css";

export const metadata = {
  title: `HotakesBlog -Link-`,
  description: "別リンクへのページ",
  openGraph: {
    url: `https://hotakesblog.vercel.app/link`,
    title: `HotakesBlog - About -`,
    description: '別リンクへのページ',
    type: "article",
    images: [
      {
        url: `https://og-image-five-swart.vercel.app/HotakesBlog -Link-.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ifhito",
    title: `HotakesBlog -Link-`,
    description: '別リンクへのページ',
    images: [`https://og-image-five-swart.vercel.app/HotakesBlog -Link-.png`],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function Link_() {
  const urls = [
    "https://twitter.com/ifhito",
    "https://note.com/ifhito",
    "https://github.com/ifhito",
    "https://zenn.dev/ifhito",
    "https://bookmeter.com/users/991028",
  ];
  return (
    <>
      <main id='main'>
        <h2 className='head-color'>その他リンク</h2>
        <ul id='urlUl'>
          {urls.map((url) => (
            <li id='urlLink' key={url.split(".")[0].split("//")[1]}>
              <Link href={url} passHref>
                {url.split(".")[0].split("//")[1]}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};