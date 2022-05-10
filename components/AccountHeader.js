import { Header, Icon, Segment, Label, Image } from 'semantic-ui-react';
import formatDate from '../utils/formatDate';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Footer.module.css';

const LOCAL_STORAGE_KEY = 'profile_pic';

function AccountHeader({ role, email, name, createdAt }) {
    const [mediaPreview, setMediaPreview] = useState('');
    const [image, setImage] = useState({name: '', media: ''});

    useEffect(() => {
        const profilePic = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (profilePic) setMediaPreview(profilePic)
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mediaPreview))
    }, [mediaPreview]);

    function handleChange(event) {
        const { name, files } = event.target;
        if (name === 'media') {
            setImage(prevState => ({ ...prevState, media: files[0] }
            ));
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
                { !mediaPreview ? (<>
                    <Icon name="user" />
                </>
                ) : (
                <>
                    <div>
                       <Image src={mediaPreview} centered size="small" style={{ borderRadius: '10%', width: '9vw' }} /> 
                    </div>
                </>)}
                <input
                    name="media"
                    type="file"
                    accept="image/*"
                    content="Select Image"
                    style={{ width: '10vw', margin: '1em' }}
                    className={styles.file}
                    onChange={handleChange}
                />
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
