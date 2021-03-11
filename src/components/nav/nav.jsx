import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <li className={styles.nav__item}>
                    <NavLink to='/profile' className={styles.nav__link}>Профиль</NavLink>
                </li>
                <li className={styles.nav__item}>
                    <NavLink to='/messages' className={styles.nav__link}>Сообщения</NavLink>
                </li>
                <li className={styles.nav__item}>
                    <NavLink to='/users' className={styles.nav__link}>Друзья</NavLink>
                </li>
                <li className={styles.nav__item}>
                    <NavLink to='/news' className={styles.nav__link}>Новости</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;