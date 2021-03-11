import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import userImg from './../../assets/images/user.png'
import styles from './Users.module.css'

const Users = (props) => {
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <section className={styles.users}>
                <div className={styles.container}>
                    <h2 className={styles.users__title}>Друзья</h2>
                    {props.isFetching ? <Preloader/> : null}
                    <div className={styles.pages}>
                        {pages.map(i => {
                            return <span className={`${styles.page} ${props.currentPage === i && styles.page_selected}`} 
                            onClick={(e) => {props.onPageChanged(i)}}>{i}</span>
                        })}
                    </div>
                    <div className={styles.users__list}>
                        {props.users.map(i => <div className={styles.user} key={i.id}>
                            <a href="#" className={styles.user__desc}>
                                <img className={styles.user__ava} src={i.photos.small != null ? i.photos.small : userImg} />
                                <p className={styles.user__name}>{i.name}</p>
                                <p className={styles.user__status}>{i.status}</p>
                                <p className={styles.user__country}>Страна: {'i.location.country'}</p>
                                <p className={styles.user__city}>Город: {'i.location.city'}</p>
                            </a>
                            { i.followed 
                                ? <button className={styles.follow} onClick={ () => { props.unFollow(i.id) } }>Удалить</button> 
                                : <button className={styles.follow} onClick={ () => { props.follow(i.id) } }>Добавить</button> }
                        </div>)}
                    </div>
                </div>
            </section>
        );
    }

export default Users;

