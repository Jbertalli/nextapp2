import { Header, Icon, Segment, Label } from 'semantic-ui-react';
import formatDate from '../utils/formatDate';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Footer.module.css';
import Avatar from 'react-avatar';

const LOCAL_STORAGE_KEY = 'profile_pic';

function AccountHeader(values) {

  const { 
    role, 
    email, 
    name, 
    createdAt 
  } = values;
  
  const [mediaPreview, setMediaPreview] = useState<string>('');
  const [image, setImage] = useState({ name: '', media: '' });
  const [resize, setResize] = useState<boolean>(false);

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

  function handleChange(event) {
    const { name, files } = event.target;
    if (name === 'media') {
      setImage((prevState) => ({ ...prevState, media: files[0] }));
      setMediaPreview(window.URL.createObjectURL(files[0]));
    }
    console.log(image);
    console.log(files[0].name);
    console.log(mediaPreview);
  }

  // async function handleImageUpload() {
  //     const data = new FormData();
  //     data.append("file", product.media);
  //     data.append("upload_preset", 'nextapp2-master');
  //     const mediaUrl = response.data.url;
  //     return mediaUrl;
  // }

  // async function handleSubmit(event) {
  //     event.preventDefault();
  //     const mediaUrl = await handleImageUpload();
  //     console.log({ mediaUrl });
  // }

  return (
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
        <div style={{ transform: 'translate(10px)' }}>
          <input
            name="media"
            type="file"
            accept="image/*"
            // content="Select Image"
            style={{
              width: '200px',
              margin: resize ? '0.5em 0em 0.2em 0em' : '1em 0em 1em 0em',
            }}
            className={styles.file}
            onChange={handleChange}
          />
        </div>
        {/* <Feed size="large">
            <Feed.Event style={{ display: 'flex', justifyContent: 'center' }}>
                <Feed.Label style={{ width: '7vw' }} image={image} />
            </Feed.Event>
        </Feed> */}
        <div style={{ margin: '.3em' }} />
        {name}
        <Header.Subheader style={{ margin: '.3em' }}>{email}</Header.Subheader>
        <Header.Subheader>Joined {formatDate(createdAt)}</Header.Subheader>
      </Header>
    </Segment>
  );
}

export default AccountHeader;
