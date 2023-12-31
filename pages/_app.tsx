import { AppProps } from 'next/app'
import Layout from '../components/Layout'

const App = ({ Component, pageProps }:AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
          html {
            display: flex;
            height: 100vh;
            width: 100vw;
            font-size: 62.5%;
          }
          body {
            background-color: #212121;
            margin-top: 0;
            margin-bottom: 0;
            margin-right: auto;
            margin-left: auto;
            font-size:1.6rem;
          }
          p {
            font-size: 1.6rem;
          }
          h1 {
            font-size: calc(2.4rem + ((1vw - 0.64rem) * 2.1429));
          }
          h2 {
            font-size: calc(2rem + ((1vw - 0.64rem) * 0.7143));
          }
          li {
            font-size: 1.6rem;
          }
          ul {
            list-style: none;
            padding-left: 0;
          }
          #main {
            max-width: 740px;
          }
          .head-color {
            color: #2196F3;
          }
          .link-border-none{
            text-decoration: none;
          }
          .content-color {
            color: #CDDC39;
          }
          a:link {
            color: #1D9BD1;
          }
          a:visited {
            color: #1D9BD1;
          }
          @media (min-width: 1200px) {
            h1 {
              font-size: 3.6rem;/* 36px*/
            }
            h2 {
              font-size: 2.4rem;/* 24px*/
            }
            h3 {
              font-size: 2rem;
            }
          }
          @media screen and (max-width: 640px) {
            body{
              line-height: 1.5;
              margin: 0;
              width: 100%
            }
            h1{
              font-size: 2.4rem;/* 24px*/
            }
            h2 {
              font-size: 2rem;/* 20px*/
            }
            h3 {
              font-size: 1.8rem;
            }
          }
      `}</style>
    </Layout>
    )
}

export default  App