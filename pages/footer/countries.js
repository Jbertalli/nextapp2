import Head from 'next/head';
import styles from '../../styles/Footer.module.css';

const countries = () => {
    return (
        <>
            <Head>
                <title>HealthStat | Countries</title>
                <meta name="keywords" content="countries, languages, regions" />
            </Head>
            <h1 className={styles.countries}>
            Choose Your Country or Region
            </h1>
            <div>
                <h2>
                    Africa, Middle East, and India
                </h2>
                <h2>
                    Asia Pacific
                </h2>
                <h2>
                    Europe
                </h2>
                <h2>
                    Latin America and the Caribbean
                </h2>
                <h2>
                    The United States, Canada, and Puerto Rico
                </h2>
            </div>
        </>
    );
}

export default countries;