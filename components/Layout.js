import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Footer.module.css';

const Layout = ({ children, user }) => {
    return (
            <div className={styles.container}>
                <Navbar user={user} />
                    {children}
                <Footer />
            </div>
    );
}

export default Layout;
