import React, { useState, useEffect } from 'react';
import styles from '../styles/Footer.module.css';
import Avatar from 'react-avatar';
import { parseCookies } from 'nookies';
import { Header, Icon, Segment, Label, Button } from 'semantic-ui-react';
import formatDate from '../utils/formatDate';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';

const LOCAL_STORAGE_KEY = 'profile_pic';

function AccountHeader({ role, email, name, createdAt, user, ctx}) {
  // console.log(user);
  const [mediaPreview, setMediaPreview] = useState<string>('');
  const [resize, setResize] = useState<boolean>(false);
  const [newData, setNewData] = useState<string>('');

  // convert image to base-64
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64: any = await convertBase64(file);
    console.log(base64)
    setMediaPreview(base64);
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }

  useEffect(() => {
    if (window.innerWidth > 440) {
      setResize(true);
    } else {
      setResize(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 440) {
        setResize(true);
      } else {
        setResize(false);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  useEffect(() => {
    const profilePic = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (profilePic) setMediaPreview(profilePic);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mediaPreview));
  }, [mediaPreview]);

  async function postImage() {
    const url = `${baseUrl}/api/image`;
    const payload = { user, mediaPreview };
    const response = await axios.post(url, payload);
    console.log(response.data);
  }

  async function getImage() {
    const { token } = parseCookies(ctx);
    const url = `${baseUrl}/api/image`;
    const payload = { headers: { Authorization: token } };
    const response = await axios.get(url, payload);
    console.log(response.data);
    setNewData(response.data);
  }

  async function deleteImage() {
    const { token } = parseCookies(ctx);
    const url = `${baseUrl}/api/image`;
    const payload = { headers: { Authorization: token } };
    const response = await axios.delete(url, payload);
    console.log(response.data)
  }

  // get data only if user
  useEffect(() => {
    if (user) {
      getImage();
    } else {
      console.log('no user');
    }
  }, []);

  // console.log(mediaPreview.length);

  return (
    <>
      <Segment secondary inverted color="grey">
        <Label
          color="blue"
          size="large"
          ribbon
          icon="privacy"
          style={{ textTransform: 'capitalize' }}
          content={role}
        />
        <Header inverted textAlign="center" as="h1" icon>
          {!mediaPreview ? (
            <>
              <Icon name="user" />
            </>
          ) : (
            <>
              <div>
                <Avatar
                  name="profile_pic"
                  size="190"
                  round={true}
                  src={mediaPreview}
                />
              </div>
            </>
          )}

          <div style={{ transform: 'translate(-10px)' }}>
            <input
              name="media"
              type="file"
              accept="image/*"
              style={{
                width: '150px',
                margin: resize ? '0.5em 0em 0.2em 0em' : '1em 0em 1em 0em'
              }}
              className={styles.file}
              onChange={(e) => {uploadImage(e)}}
            />
            {(mediaPreview.length > 0) ? (
            <>
              <Button
                color='blue'
                onClick={postImage}
                style={{
                  border: '1px solid black',
                  height: '42px'
                }}
              >
                Save Image
              </Button>
              <Button
                color='blue'
                onClick={() => {deleteImage(), setMediaPreview('')}}
                style={{
                  border: '1px solid black',
                  height: '42px',
                  transform: resize ? null : 'translate(12px, -8px)'
                }}
              >
                Delete Image
              </Button>
            </>
            ): null}
          </div>
          <div style={{ margin: '.3em' }} />
          {name}
          <Header.Subheader style={{ margin: '.3em' }}>{email}</Header.Subheader>
          <Header.Subheader>Joined {formatDate(createdAt)}</Header.Subheader>
        </Header>
      </Segment>
    </>
  );
}

export default AccountHeader;

AccountHeader.getInitialProps = async ctx => {
  const { token } = parseCookies(ctx);
  if (!token) {
    return { image: [] }
  }  
  const payload = { headers: { Authorization: token } };
  const url = `${baseUrl}/api/image`;
  const response = await axios.get(url, payload);
  return response.data;
}
