import styles from '../styles/Icons.module.css';

const Icons = () => {
  return (
    <div className={styles.turning} style={{ width: '39px' }}>
      <div className={styles.boxed}>
        <div
          style={{
            fontSize: '4.5em',
            color: '#f2f2f2',
            fontFamily: 'serif',
            transform: 'translate(18%, 210%)',
          }}
        >
          H
        </div>
        <div
          style={{
            fontSize: '4.5em',
            color: '#f2f2f2',
            fontFamily: 'serif',
            transform: 'translate(62%, 330%)',
          }}
        >
          S
        </div>
        <div
          style={{ transform: 'translate(19px, 39px) rotate(-45deg)' }}
          className={styles.strike}
        />
        <div className={styles.back} />
      </div>
    </div>
  );
};

export default Icons;
