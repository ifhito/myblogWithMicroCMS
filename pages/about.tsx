import React, { ReactFragment } from 'react';

const About: ReactFragment = () => {
  return (
      <>
        <h1>ブログ著者と自己紹介</h1>
        <h2>著者: HOTAKE</h2>
        <p>
            東京のWeb企業(なのだろうか?)でエンジニアをやっている人です
        </p>
        <p>
            実務では、運用でインフラ系ばっかやっています…(Terraform、AWS)
        </p>
        <p>
            ただ、フロントエンドに興味があり、フロントエンドに触れたいため、アクセシビリティやReact、Nextなどについて、勉強しています。
        </p>
    </>
  )
}

export default About;