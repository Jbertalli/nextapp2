import Head from 'next/head';
import styles from '../../styles/Footer.module.css';

const terms = () => {
    return (
        <>
            <Head>
                <title>HealthStat | Terms of Use</title>
                <meta name="description" content="terms, conditions" />
            </Head>
            <div className={styles.terms}>
                <h1>
                    HealthStat Terms of Use
                </h1>
                <h3>
                    Legal Information & Notices
                </h3>
            </div>
            <p>
                Placeholder text
            </p>
        </>
    );
}

export default terms;