import React from 'react';
import styles from './ChatItem.module.css';

const ChatItem = (props) => {
    return (
        <div className={styles.chat__item}>
            <div className={styles.chat__pers}>
                <div className={styles.chat__ava} style={{backgroundImage: `url(${props.ava})`}}></div>
                <p className={styles.chat__name}>{props.name}</p>
            </div>
            <p className={styles.chat__txt}>{props.message}</p>
        </div>
    );
}

export default ChatItem;