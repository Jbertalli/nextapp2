import App from 'next/app';
import Layout from '../components/Layout';
import '../styles/globals.css';
import Head from 'next/head';
import NextNProgress from "nextjs-progressbar";

//function MyApp({ Component, pageProps }) {
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  //server-side rendering
  render () {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
            <link rel="shortcut icon" href="/images/N_J-logo-black.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/images/N_J-logo-black.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/images/N_J-logo-black.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/images/N_J-logo-black.png" />
        </Head>
          <NextNProgress height={4} color="white" startPosition={0.3} stopDelayMs={200} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default MyApp;
