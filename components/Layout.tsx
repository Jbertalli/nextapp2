import Footer from './Footer';
import Navbar from './Navbar';
import styles from '../styles/Footer.module.css';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';

const Layout = ({ children, user }) => {
  const router: any = useRouter();
  const [night, setNight] = useState<boolean>(false);
  const [background, setBackground] = useState<string>('#f2f2f2');

  return (
    <div
      className={styles.container}
      style={{
        background: `${background}`,
      }}
    >
      <Navbar user={user} />
      {!night ? (
        <>
          <Button
            onClick={() => {
              setNight(true), setBackground('#313e4c');
            }}
            style={{
              position: 'absolute',
              marginTop: '1vw',
              marginLeft: '1vw',
              background: 'black',
              color: 'white',
            }}
          >
            <Icon name="moon" />
            Night Mode
          </Button>
        </>
      ) : (
        <>
          <Button
            onClick={() => {
              setNight(false), setBackground('#f2f2f2');
            }}
            style={{
              position: 'absolute',
              marginTop: '1vw',
              marginLeft: '1vw',
              background: 'white',
              color: 'black',
            }}
          >
            <Icon name="sun" />
            Day Mode
          </Button>
        </>
      )}
      {children}
      {router.pathname !== '/404' && (
        <div style={{ marginTop: '80px' }}>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Layout;
