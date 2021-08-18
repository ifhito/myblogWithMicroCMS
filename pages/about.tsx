import React, { ReactFragment } from 'react';

const About: ReactFragment = () => {
  return (
      <>
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
    </>
  )
}

export default About;