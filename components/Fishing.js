import styles from '../styles/Fishing.module.css';

const Languages = () => {
    return (
        <>
            <div className={styles.rotating} style={{ margin: '-65em 10em 10em 10em' }}>
                <div className={styles.animate_pole} style={{ transform: 'rotate(-30deg)'}}>                                        {/* rotate whole rod here */}
                    <div style={{ margin: '40em', transform: 'translateY(0%)' }}>
                        <div style={{ transform: 'translateY(200%)'}}>
                            <div className={styles.reel1} style={{ margin: '20em 0em 0em 20em' }} />
                            <div className={styles.reel2} style={{ margin: '-6em 0em 0em 23em', transform: 'translateY(-5%)' }} />
                            <div className={styles.line} style={{ margin: '-8em 0em 0em 20em', transform: 'translateX(15%)' }} />
                            <div className={styles.wood} style={{ margin: '-11em 0em 0em 24em' }} />
                        </div>
                        <div className={styles.rod} style={{ margin: '-54.2em 0em 0em 21.7em' }} />      
                        <div style={{ transform: 'rotate(-25deg)' }}>
                            <div style={{ transform: 'translateY(200%)' }}>
                                <div style={{ transform: 'translateX(15%)' }}>
                                    <div className={styles.spinning}>
                                        <div className={styles.handle1} />
                                        <div className={styles.handle2} style={{ transform: 'rotate(25deg)' }} />
                                        <div className={styles.handle3} style={{ margin: '0em 0em 0em 2.1em' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ margin: '-60em 0em 0em -30em', transform: 'rotate(30deg)' }}>
                            <div className={styles.circle} style={{ margin: '-30em 0em 0em 42.6em', transform: 'rotate(50deg)'}} />
                            <div className={styles.circle} style={{ margin: '16em 0em 0em 54.8em', transform: 'rotate(50deg)'}} />
                            <div className={styles.circle} style={{ margin: '14em 0em 0em 65.5em', transform: 'rotate(50deg)'}} />
                        </div>
                        <div style={{ transform: 'rotate(50deg)' }}>
                            <div className={styles.fishingline} style={{ margin: '-26.7em 0em 0em -13.2em' }} />
                        </div>
                        <div style={{ transform: 'rotate(-3.5deg)' }}>
                            <div className={styles.lined} style={{ margin: '-70em 0em 0em 21.8em' }}></div>
                        </div>
                        <div style={{ transform: 'rotate(50deg)', margin: '2.6em 0em 0em -38em' }}>
                            <div className={styles.hook1} />
                            <div className={styles.hook2} />
                            <div className={styles.hook3} style={{ margin: '0em 0em 0em 1.4em' }} />
                            <div className={styles.hook4} />
                            <div className={styles.hook5} style={{ margin: '-1em 0em 0em -.2em' }} />
                            <div className={styles.hook6} style={{ margin: '-1.7em 0em 0em -.6em' }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Languages;
