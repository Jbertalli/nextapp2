import Head from 'next/head';
import AccountHeader from '../components/AccountHeader';
import AccountProgress from '../components/AccountProgress';
import AccountPermissions from '../components/AccountPermissions';
import { Container, Progress } from 'semantic-ui-react';
import { parseCookies } from 'nookies';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';

function account(values) {

  const { 
    user, 
    progress 
  } = values;

  return (
    <>
      <Head>
        <title>HealthStat | Account</title>
        <meta name="description" content="account" />
      </Head>
      <Container style={{ margin: '4em' }}>
        <AccountHeader {...user} />
        <AccountProgress progress={progress} />
        {user.role === 'root' && (
          <AccountPermissions currentUserId={user._id} />
        )}
      </Container>
    </>
  );
}

Progress.getInitialProps = async (ctx) => {
  const { token } = parseCookies(ctx);
  if (!token) {
    return { progress: [] };
  }
  const payload = { headers: { Authorization: token } };
  const url = `${baseUrl}/api/Progress`;
  const response = await axios.get(url, payload);
  return response.data;
};

export default account;
