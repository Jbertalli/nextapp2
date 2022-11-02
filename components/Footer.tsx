import Link from 'next/link';
import { Flag, Container } from 'semantic-ui-react';

const footer = () => {
    return (
        <>
            <Container>
                <footer>
                    {/* <div>
                        <button class="ui facebook button">
                            <i class="facebook icon"></i>
                            Facebook
                        </button>
                        <button class="ui twitter button">
                            <i class="twitter icon"></i>
                            Twitter
                        </button>
                        <button class="ui linkedin button">
                            <i class="linkedin icon"></i>
                            LinkedIn
                        </button>
                        <button class="ui instagram button">
                            <i class="instagram icon"></i>
                            Instagram
                        </button>
                        <button class="ui youtube button">
                            <i class="youtube icon"></i>
                            YouTube
                        </button>
                    </div> */}
                    <div>
                        Copyright © 2023
                        <Link href="/"><a>HealthStat.com</a></Link> | 
                        <Link href="/footer/terms"><a>Terms of Use</a></Link> |
                        <Link href="/footer/privacy-policy"><a>Privacy Policy</a></Link> | 
                        <Link href="/footer/site-map"><a>Site Map</a></Link> |
                        <Link href="/Languages"><a>United States&nbsp;&nbsp;<Flag name="us" /></a></Link>
                    </div>
                </footer>
            </Container>
        </>
    );
}

export default footer;