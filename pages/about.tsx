import React, { ReactFragment } from "react";
import HeadWrapper from "../components/HeadWrapper";

const About: ReactFragment = () => {
  return (
    <>
      <HeadWrapper
        title='About'
        description='著者の紹介ページ'
        url={__filename}
        type='article'
      />
      <main id='main'>
        <h1 className='head-color'>ブログ著者と自己紹介</h1>
        <h2 className='content-color'>著者: HOTAKE</h2>
        <p className='content-color'>
          東京のWeb企業(なのだろうか?)でエンジニアをやっている人です
        </p>
        <p className='content-color'>
          実務では、運用でインフラ系Terraform、AWS、ニフクラ、サーバー内作業)をやったりRailsアプケーションの改修作業を行うなどしています。
        </p>
        <p>
          最近はやっとVue.jsやReactを業務で触れたりするようになりましたが、社内ツール作成で使うだけです。
        </p>
        <p className='content-color'>
          フロントエンドに興味があり、フロントエンドに触れたいため、アクセシビリティやReact、Nextなどについて、個人では勉強しています。
        </p>
        <p>
          アクセシビリティがやりたくて社内でオーサリングプラクティスの輪読会を開きましたが、全く人気がなく、3人しか参加者が集まりませんでした(泣)。普通にアクセシビリティ勉強会にしたら人が来たのかななどと思ったりもします。ただ、アクセシビリティには実践がないとなとも思うのでどうすれば良いのかと思っています。
        </p>
        <h2 className='content-color'>技術スタックなど</h2>
        <h3 className='content-color'>言語</h3>
        <ul className='content-color list-ul'>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Python</li>
          <li>Rust</li>
          <li>PHP</li>
          <li>Ruby</li>
        </ul>
        <h3 className='content-color'>ライブラリ</h3>
        <ul className='content-color list-ul'>
          <li>React</li>
          <li>Vue.js</li>
          <li>Flask</li>
          <li>Rails</li>
        </ul>
        <h3 className='content-color'>その他</h3>
        <ul className='content-color list-ul'>
          <li>アクセシビリティ</li>
          <li>スクラム開発</li>
          <li>webpack</li>
          <li>Terraform</li>
          <li>Docker</li>
          <li>AWS</li>
          <li>SQL</li>
        </ul>
      </main>
      <style jsx>{`
        .list-ul {
          list-style: inside;
        }
      `}</style>
    </>
  );
};

export default About;
