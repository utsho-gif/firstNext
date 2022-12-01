import '../styles/globals.css';
import '../styles/layout.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  if (Component.getLayout) {
    return Component.getLayout(
      <Component style={{ minHeight: '100vh' }} {...pageProps} />
    );
  }
  return (
    <>
      <Header />
      <Component style={{ minHeight: '100vh' }} {...pageProps} />
      <Footer />
    </>
  );
}
