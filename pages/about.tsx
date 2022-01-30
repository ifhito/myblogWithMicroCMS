import React, { ReactFragment } from 'react';
import HeadWrapper from '../components/HeadWrapper';

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
        <h1 className="head-color">ブログ著者と自己紹介</h1>
        <h2 className="content-color">著者: HOTAKE</h2>
        <p className="content-color">
            東京のWeb企業(なのだろうか?)でエンジニアをやっている人です
        </p>
        <p className="content-color">
            実務では、運用でインフラ系ばっかやっています…(Terraform、AWS)
        </p>
        <p className="content-color">
            ただ、フロントエンドに興味があり、フロントエンドに触れたいため、アクセシビリティやReact、Nextなどについて、勉強しています。
        </p>
        <h2 className="content-color">技術スタックなど</h2>
        <h3 className="content-color">言語</h3>
        <ul className="content-color list-ul">
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Python</li>
          <li>Rust</li>
          <li>PHP</li>
        </ul>
        <h3 className="content-color">ライブラリ</h3>
        <ul className="content-color list-ul">
          <li>React</li>
          <li>Flask</li>
        </ul>
        <h3 className="content-color">その他</h3>
        <ul className="content-color list-ul">
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
  )
}

export default About;