import Layout from '../components/Layout';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <link rel="shortcut icon" href="/images/N_J-logo-black.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/N_J-logo-black.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/N_J-logo-black.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/N_J-logo-black.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp
