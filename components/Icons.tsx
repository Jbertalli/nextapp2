import styles from '../styles/Icons.module.css';

const Icons = () => {
    return (
        <div className={styles.turning}> {/* style={{ height: '10px', transform: 'scale(.5,.5)' }} */}
            <div className={styles.boxed}>
                <div style={{ fontSize: '4.5em', color: '#f2f2f2', fontFamily: 'serif', transform: 'translateX(15%) translateY(200%)' }}>H</div>
                <div style={{ fontSize: '4.5em', color: '#f2f2f2', fontFamily: 'serif', transform: 'translateX(62%) translateY(330%)' }}>S</div> 
                <div style={{ transform: 'translateX(.9vw) translateY(2.6vh) rotate(-45deg)' }} className={styles.strike} />
                <div className={styles.back} />
            </div> 
        </div>
    );
}

export default Icons;
