import React, { ReactFragment } from "react";
import styles from "./about.module.css";
export const metadata = {
  title: `HotakesBlog -About-`,
  description: "著者の紹介ページ",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    url: `https://hotakesblog.vercel.app/about`,
    title: `HotakesBlog - About -`,
    description: "著者の紹介ページ",
    type: "article",
    images: [
      {
        url: `https://og-image-five-swart.vercel.app/HotakesBlog -About-.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ifhito",
    title: `HotakesBlog - About -`,
    description: "著者の紹介ページ",
    images: [`https://og-image-five-swart.vercel.app/HotakesBlog -About-.png`],
  },
};

export default function About() {
  return (
    <>
      <main id='main'>
        <h2 className='head-color'>ブログ著者と自己紹介</h2>
        <h3 className='content-color'>著者: HOTAKE</h3>
        <p className='content-color'>
          東京のWeb企業(なのだろうか?)でエンジニアをやっている人です
        </p>
        <p className='content-color'>
          実務では、運用でインフラ系Terraform、AWS、ニフクラ、サーバー内作業)をやったりRailsアプケーションの改修作業を行うなどしています。
        </p>
        <p className='content-color'>
          また、最近では刷新が始まり、ハイレベルアーキテクチャを考えたり、刷新後のシステムにドメイン駆動設計を取り入れようと頑張っています。
        </p>
        <p className='content-color'>
          最近はやっとVue.jsやReactを業務で触れたりするようになりましたが、社内ツール作成で使うだけです。
        </p>
        <p className='content-color'>
          フロントエンドに興味があり、フロントエンドに触れたいため、アクセシビリティやReact、Nextなどについて、個人では勉強しています。
        </p>
        <p className='content-color'>
          アクセシビリティがやりたくて社内でオーサリングプラクティスの輪読会を開きましたが、全く人気がなく、3人しか参加者が集まりませんでした(泣)。普通にアクセシビリティ勉強会にしたら人が来たのかななどと思ったりもします。ただ、アクセシビリティには実践がないとなとも思うのでどうすれば良いのかと思っています。
        </p>
        <h3 className='content-color'>技術スタックなど</h3>
        <h4 className='content-color'>言語</h4>
        <ul className='content-color listUl'>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Python</li>
          <li>Rust</li>
          <li>PHP</li>
          <li>Ruby</li>
        </ul>
        <h4 className='content-color'>ライブラリ</h4>
        <ul className='content-color listUl'>
          <li>React</li>
          <li>Vue.js</li>
          <li>Flask</li>
          <li>Rails</li>
        </ul>
        <h4 className='content-color'>その他</h4>
        <ul className='content-color listUl'>
          <li>アクセシビリティ</li>
          <li>スクラム開発</li>
          <li>webpack</li>
          <li>Terraform</li>
          <li>Docker</li>
          <li>AWS</li>
          <li>SQL</li>
          <li>ドメイン駆動設計</li>
        </ul>
      </main>
    </>
  );
};
