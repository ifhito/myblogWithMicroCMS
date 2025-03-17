// import {Layout} from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/global.css';
import styles from './layout.module.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div id={styles.wrapper}>
          <a className={styles.skipMainContents} href='#main'>
            Skip to main content
          </a>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}