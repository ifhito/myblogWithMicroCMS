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
          }
          body {
            background-color: #212121;
            margin-left: auto;
            margin-right: auto;
            margin-top: 0;
            margin-bottom: 0;
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