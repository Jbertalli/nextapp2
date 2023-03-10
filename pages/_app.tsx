import App from 'next/app';
import Layout from '../components/Layout';
import '../styles/globals.css';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import { parseCookies, destroyCookie } from 'nookies';
import { redirectUser } from '../utils/auth';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';
import Router from 'next/router';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const { token } = parseCookies(ctx);

    let pageProps: any = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    if (!token) {
      const isProtectedRoute = ctx.pathname === '/account';
      if (isProtectedRoute) {
        redirectUser(ctx, '/Login');
      }
    } else {
      try {
        const payload = { headers: { Authorization: token } };
        const url: string = `${baseUrl}/api/account`;
        const response = await axios.get(url, payload);
        const user = response.data;
        pageProps.user = user;
      } catch (error) {
        console.error('Error retrieving current user', error);
        // 1) Throw out invalid token
        destroyCookie(ctx, 'token');
        // 2) redirect to login page
        redirectUser(ctx, '/Login');
      }
    }

    return { pageProps };
  }

  //universal logout (auth.js) ---> detect whenever localStorage changes
  componentDidMount() {
    window.addEventListener('storage', this.syncLogout);
  }

  syncLogout = (event) => {
    if (event.key === 'logout') {
      console.log('Logged out from storage');
      Router.push('/Login');
    }
  };

  //server-side rendering
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <link
            rel="shortcut icon"
            sizes="32x32"
            href="/images/HealthStat_Logo.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/HealthStat_Logo.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/HealthStat_Logo.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/HealthStat_Logo.png"
          />
        </Head>
        <NextNProgress
          height={4}
          color="white"
          startPosition={0.3}
          stopDelayMs={200}
        />
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default MyApp;
