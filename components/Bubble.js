import styles from '../styles/Bubble.module.css';

const Bubble = () => {
    return (
        <>
            {/* <b><div style={{ fontSize: '3em', color: 'black', fontFamily: 'serif', transform: 'translateX(22%) translateY(1550%)' }} className={styles.stat}>Health</div></b>
            <b><div style={{ fontSize: '3em', color: 'black', fontFamily: 'serif', transform: 'translateX(25%) translateY(1650%)' }} className={styles.stat}>Stat</div></b> */}
            <div className={styles.drop} />  
        </>
    );
}

export default Bubble;
