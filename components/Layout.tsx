import Footer from './Footer';
import Navbar from './Navbar';
import styles from '../styles/Footer.module.css';
import { useRouter } from 'next/router';

const Layout = ({ children, user }) => {
    const router: any = useRouter();

    return (
        <div className={styles.container}>
            <Navbar user={user} />
                {children}
            {router.pathname !== "/404" && <Footer />}
        </div>
    );
}

export default Layout;