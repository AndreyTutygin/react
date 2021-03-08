import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import style from './messages.module.css';

const Name__Link = (props) => {
    let path = `/messages/${props.id}`;

    return (
        <li className={style.names__item}>
            <NavLink to={path} className={style.names__link}>
                <div className={style.names__ava} style={{backgroundImage: `url(${props.ava})`}}></div>
                <span className={style.name__txt}>{props.name}</span>
            </NavLink>
        </li>
    );
}

const Chat__item = (props) => {
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


const Messages = (props) => {
    const nameEl = props.namesData.map( i => <Name__Link name={i.name} id={i.id} key={i.id} ava={i.ava} /> )
    const chatEl = props.chatData.map( i => <Chat__item ava={i.ava} name={i.name} key={i.id} message={i.message}/> )

    let newPostEl = React.createRef();

    let onAddMessage = () => {
        props.onAddMessage();
    };

    let onPostChange = () => {
        let messageTxt = newPostEl.current.value;
        props.onPostChange(messageTxt);
    };

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
                        <div className={style.addMessage, style.messages__addMessage}>
                            <textarea onChange={onPostChange} ref={newPostEl} className={style.addMessage__field} 
                                value={props.valueTxt}/>
                            <button onClick={onAddMessage} className={style.btn}>Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Messages;