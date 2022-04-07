import Head from 'next/head';
import styles from '../../styles/Footer.module.css';

const privacy = () => {
    return (
        <>
        <Head>
            <title> HealthStat | Privacy Policy</title>
            <meta name="description" content="privacy policy" />
        </Head>
            <div className={styles.privacy}>
                <h1>
                    HealthStat Privacy Policy
                </h1>
                <h3>
                    Updated April 1, 2022
                </h3>
            </div>
            <p>
                Placeholder text
            </p>
            
        </>
    );
}

export default privacy;