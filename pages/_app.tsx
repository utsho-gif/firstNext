import '../styles/globals.css';
import '../styles/layout.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  if (Component.getLayout) {
    return Component.getLayout(
      <Component style={{ minHeight: '100vh' }} {...pageProps} />
    );
  }
  return (
    <>
      <SessionProvider session={session}>
        <Head>
          <title>
            {pageProps?.title && pageProps?.title.length > 2
              ? pageProps?.title
              : 'NextAwesome'}
          </title>
          <meta name="description" content="That's awesome" />
        </Head>
        <Header />
        <Component style={{ minHeight: '100vh' }} {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}
