import React from 'react';
import AddMessageContainer from '../AddMessage/AddMessageContainer';
import ChatItem from './ChatItem/ChatItem';
import styles from './Messages.module.css';
import NameLink from './NameLink/NameLink';

const Messages = (props) => {
    const nameEl = props.namesData.map( i => <NameLink name={i.name} id={i.id} key={i.id} ava={i.ava} /> )
    const chatEl = props.chatData.map( i => <ChatItem ava={i.ava} name={i.name} key={i.id} message={i.message}/> )

    return (
        <section className={styles.messages}>
            <div className={styles.container}>
                <h2 className={styles.messages__title}>Мои сообщения</h2>
                <div className={styles.messages__content}>
                    <div className={styles.names}>
                    <ul className={styles.names__list}>
                        {nameEl}
                    </ul>
                    </div>
                    <div className={styles.chat}>
                        {chatEl}
                        <div className={styles.messages__addMessage}>
                            <AddMessageContainer className='messages__addMessage' btnTxt='Отправить'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Messages;