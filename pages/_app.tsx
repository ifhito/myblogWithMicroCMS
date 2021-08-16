import { AppProps } from 'next/app'
import Layout from '../components/Layout'
const App = ({ Component, pageProps }:AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
          body {
            background-color: #212121;
            margin-left: auto;
            margin-right: auto;
            width: fit-content;
          }
          ul {
            list-style: none;
          }
          .head-color {
            color: #2196F3;
          }
          .content-color {
            color: #CDDC39;
          }
      `}</style>
    </Layout>
    )
}

export default  App