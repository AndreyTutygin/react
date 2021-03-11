import React from 'react';
import styles from './User.module.css';

const User = () => {
    return (
        <div className={styles.user}>
            <div className={styles.user__ava} style={{backgroundImage: `url('https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg')`}}></div>
            <div className={styles.user__desc}>
                <h2 className={styles.user__fio}>
                    <span className={styles.user__name}>Иван </span>
                    <span className={styles.user__lastName}>Иванов</span>
                </h2>
                <ul className={styles.user__list}>
                    <li className={styles.user__item}>Возраст: 23 года</li>
                    <li className={styles.user__item}>Город: Санкт-Петербург</li>
                </ul>
            </div>
        </div>
    )
};

export default User;