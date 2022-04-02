import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Footer.module.css';

const Layout = ({ children }) => {
    return (
            <div className={styles.container}>
                <Navbar />
                    {children}
                <Footer />
            </div>
    );
}

export default Layout;