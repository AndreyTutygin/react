import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import style from './nav.module.css';

const Nav = () => {
    return (
        <nav className={style.nav}>
            <ul className={style.nav__list}>
                <li className={style.nav__item}>
                    <NavLink to='/profile' className={style.nav__link}>Профиль</NavLink>
                </li>
                <li className={style.nav__item}>
                    <NavLink to='/messages' className={style.nav__link}>Сообщения</NavLink>
                </li>
                <li className={style.nav__item}>
                    <NavLink to='/users' className={style.nav__link}>Друзья</NavLink>
                </li>
                <li className={style.nav__item}>
                    <NavLink to='/news' className={style.nav__link}>Новости</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;