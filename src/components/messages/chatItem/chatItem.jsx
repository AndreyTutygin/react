import React from 'react';
import style from './chatItem.module.css';

const ChatItem = (props) => {
    return (
        <div className={style.chat__item}>
            <div className={style.chat__pers}>
                <div className={style.chat__ava} style={{backgroundImage: `url(${props.ava})`}}></div>
                <p className={style.chat__name}>{props.name}</p>
            </div>
            <p className={style.chat__txt}>{props.message}</p>
        </div>
    );
}

export default ChatItem;