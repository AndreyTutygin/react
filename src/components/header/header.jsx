import style from './header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <img className={style.header__logo} src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png' />
        </header>
    )
};

export default Header;