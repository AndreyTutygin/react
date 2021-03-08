import React from 'react';
import AddMessageContainer from '../addMessage/addMessageContainer';
import ChatItem from './chatItem/chatItem';
import style from './messages.module.css';
import NameLink from './nameLink/nameLink';

const Messages = (props) => {
    const nameEl = props.namesData.map( i => <NameLink name={i.name} id={i.id} key={i.id} ava={i.ava} /> )
    const chatEl = props.chatData.map( i => <ChatItem ava={i.ava} name={i.name} key={i.id} message={i.message}/> )

    return (
        <section className={style.messages}>
            <div className={style.container}>
                <h2 className={style.messages__title}>Мои сообщения</h2>
                <div className={style.messages__content}>
                    <div className={style.names}>
                    <ul className={style.names__list}>
                        {nameEl}
                    </ul>
                    </div>
                    <div className={style.chat}>
                        {chatEl}
                        <div className={style.messages__addMessage}>
                            <AddMessageContainer className='messages__addMessage' btnTxt='Отправить'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Messages;