import { AppProps } from 'next/app'
import Layout from '../components/Layout'
const App = ({ Component, pageProps }:AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
          html {
            display: flex;
          }
          body {
            background-color: #212121;
            margin-left: auto;
            margin-right: auto;
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
          @media (max-width: 767px){
            .head-color {
              font-size: 60px;
            }
            h2 {
              font-size:50px;
            }
          }
      `}</style>
    </Layout>
    )
}

export default  App