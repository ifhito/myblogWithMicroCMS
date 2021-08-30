import { AppProps } from 'next/app'
import Layout from '../components/Layout'
const App = ({ Component, pageProps }:AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
          html {
            display: flex;
            height: 100%;
            width: 100%;
            font-size: 62.5%;
          }
          body {
            background-color: #212121;
            margin-left: auto;
            margin-right: auto;
            margin-top: 0;
            margin-bottom: 0;
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
          @media (min-width: 1200px) {
            h1 {
                font-size: 3.6rem;/* 36px*/
            }
            h2 {
                font-size: 2.4rem;/* 24px*/
            }
          }
          @media screen and (max-width: 640px) {
              body{
                line-height: 2;
                font-size: inherit;
              }
              h1{
                  font-size: 2.4rem;/* 24px*/
              }
              h2 {
                  font-size: 2rem;/* 20px*/
              }
          }
          ul {
            list-style: none;
            padding-left: 0;
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
          @media (max-width: 767px){
          }
      `}</style>
    </Layout>
    )
}

export default  App