import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import userImg from './../../assets/images/user.png';
import styles from './Users.module.css';
import Paginator from '../common/Paginator/Paginator';

const Users = (props) => {
        return (
            <section className={styles.users}>
                <div className={styles.container}>
                    <h2 className={styles.users__title}>Друзья</h2>
                    {props.isFetching ? <Preloader/> : null}
                    <Paginator currentPage={props.currentPage} 
                            onPageChanged={props.onPageChanged}
                            totalItemCount={props.totalUsersCount}
                            pageSize={props.pageSize}
                            />
                    <div className={styles.users__list}>
                        {props.users.map(i => <div className={styles.user} key={i.id}>
                            <NavLink to={`/profile/${i.id}`} className={styles.user__desc}>
                                <img className={styles.user__ava} src={i.photos.small != null ? i.photos.small : userImg} />
                                <p className={styles.user__name}>{i.name}</p>
                                <p className={styles.user__status}>{i.status}</p>
                                <p className={styles.user__country}>Страна: {'i.location.country'}</p>
                                <p className={styles.user__city}>Город: {'i.location.city'}</p>
                            </NavLink>
                            { i.followed 
                                ? <button disabled={props.followingInProgress.some(id => id === i.id)} className={styles.follow} 
                                onClick={ () => {props.unFollow(i.id);} }>Удалить</button> 
                                : <button disabled={props.followingInProgress.some(id => id === i.id)} className={styles.follow} 
                                onClick={ () => {props.follow(i.id);} }>Добавить</button> }
                        </div>)}
                    </div>
                </div>
            </section>
        );
    }

export default Users;

