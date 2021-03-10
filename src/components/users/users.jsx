import * as axios from 'axios';
import React from 'react';
import style from './users.module.css'

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <section className={style.users}>
                <div className={style.container}>
                    <h2 className={style.users__title}>Друзья</h2>
                    <div className={style.pages}>
                        {pages.map(i => {
                            return <span className={`${style.page} ${this.props.currentPage === i && style.page_selected}`} 
                            onClick={(e) => {this.onPageChanged(i)}}>{i}</span>
                        })}
                    </div>
                    <div className={style.users__list}>
                        {this.props.users.map(i => <div className={style.user} key={i.id}>
                            <a href="#" className={style.user__desc}>
                                <img className={style.user__ava} src={i.photos.small != null ? i.photos.small : 'https://www.pngitem.com/pimgs/m/421-4212266_transparent-default-avatar-png-default-avatar-images-png.png'} />
                                <p className={style.user__name}>{i.name}</p>
                                <p className={style.user__status}>{i.status}</p>
                                <p className={style.user__country}>Страна: {'i.location.country'}</p>
                                <p className={style.user__city}>Город: {'i.location.city'}</p>
                            </a>
                            { i.followed 
                                ? <button className={style.follow} onClick={ () => { this.props.unFollow(i.id) } }>Удалить</button> 
                                : <button className={style.follow} onClick={ () => { this.props.follow(i.id) } }>Добавить</button> }
                        </div>)}
                    </div>
                </div>
            </section>
        );
    }
}

export default Users;

