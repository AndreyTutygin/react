import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import style from './users.module.css'

const Users = (props) => {
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <section className={style.users}>
                <div className={style.container}>
                    <h2 className={style.users__title}>Друзья</h2>
                    {props.isFetching ? <Preloader/> : null}
                    <div className={style.pages}>
                        {pages.map(i => {
                            return <span className={`${style.page} ${props.currentPage === i && style.page_selected}`} 
                            onClick={(e) => {props.onPageChanged(i)}}>{i}</span>
                        })}
                    </div>
                    <div className={style.users__list}>
                        {props.users.map(i => <div className={style.user} key={i.id}>
                            <a href="#" className={style.user__desc}>
                                <img className={style.user__ava} src={i.photos.small != null ? i.photos.small : 'https://www.pngitem.com/pimgs/m/421-4212266_transparent-default-avatar-png-default-avatar-images-png.png'} />
                                <p className={style.user__name}>{i.name}</p>
                                <p className={style.user__status}>{i.status}</p>
                                <p className={style.user__country}>Страна: {'i.location.country'}</p>
                                <p className={style.user__city}>Город: {'i.location.city'}</p>
                            </a>
                            { i.followed 
                                ? <button className={style.follow} onClick={ () => { props.unFollow(i.id) } }>Удалить</button> 
                                : <button className={style.follow} onClick={ () => { props.follow(i.id) } }>Добавить</button> }
                        </div>)}
                    </div>
                </div>
            </section>
        );
    }

export default Users;

