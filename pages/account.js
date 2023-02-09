import Head from 'next/head';
import AccountHeader from '../components/AccountHeader';
import AccountProgress from '../components/AccountProgress';
import AccountPermissions from '../components/AccountPermissions';
import { Container, Progress } from 'semantic-ui-react';

function Account({ user }) {

  return (
    <>
      <Head>
        <title>HealthStat | Account</title>
        <meta name="description" content="account" />
      </Head>
      <Container style={{ margin: '4em' }}>
        <AccountHeader {...user} user={user} />
        <AccountProgress user={user} />
        {user.role === 'root' && (
          <AccountPermissions currentUserId={user._id} />
        )}
      </Container>
    </>
  );
}

export default Account;
