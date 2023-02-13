import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import AccountHeader from '../components/AccountHeader';
import AccountProgress from '../components/AccountProgress';
import AccountPermissions from '../components/AccountPermissions';
import { Container } from 'semantic-ui-react';

function Account({ user }) {
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 440) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 440) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <>
      <Head>
        <title>HealthStat | Account</title>
        <meta name="description" content="account" />
      </Head>
      <Container style={{ margin: desktop ? '4em' : '2em' }}>
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
