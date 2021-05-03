import AuthContainer from '../Auth/AuthContainer';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.header__logo} src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png' />
            <AuthContainer className={styles.header__auth}/>
        </header>
    )
};

export default Header;