import style from './user.module.css';

const User = () => {
    return (
        <div className={style.user}>
            <div className={style.user__ava} style={{backgroundImage: `url('https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg')`}}></div>
            <div className={style.user__desc}>
                <h2 className={style.user__fio}>
                    <span className={style.user__name}>Иван </span>
                    <span className={style.user__lastName}>Иванов</span>
                </h2>
                <ul className={style.user__list}>
                    <li className={style.user__item}>Возраст: 23 года</li>
                    <li className={style.user__item}>Город: Санкт-Петербург</li>
                </ul>
            </div>
        </div>
    )
};

export default User;