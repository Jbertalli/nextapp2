import Link from 'next/link';
import { Flag, Container } from 'semantic-ui-react';

const footer = () => {
    return (
        <>
            <Container>
                <footer>
                    <div>
                        <span style={{ marginRight: '24px' }}>
                            Copyright © 2023
                            <Link href="/"><a>HealthStat.com</a></Link> | 
                            <Link href="/footer/terms"><a>Terms of Use</a></Link> |
                            <Link href="/footer/privacy-policy"><a>Privacy Policy</a></Link> | 
                            <Link href="/footer/site-map"><a>Site Map</a></Link> |
                        </span>
                        <span style={{ marginLeft: '-5px' }}>
                            <span style={{ color: '#000000', opacity: '0.80' }}>United States&nbsp;&nbsp;</span>
                            <span><Flag name="us" /></span>
                        </span>
                    </div>
                </footer>
            </Container>
        </>
    );
}

export default footer;
