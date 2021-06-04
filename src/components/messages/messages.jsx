import React from 'react';
import ChatItem from './ChatItem/ChatItem';
import styles from './Messages.module.css';
import NameLink from './NameLink/NameLink';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators';

const Messages = (props) => {
    const nameEl = props.namesData.map( i => <NameLink name={i.name} id={i.id} key={i.id} ava={i.ava} /> )
    const chatEl = props.chatData.map( i => <ChatItem ava={i.ava} name={i.name} key={i.id} message={i.message}/> )

    const onSubmit = (value) => {
        props.addChat(value.newMessages)
    }

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
                            <NewMessagesReduxForm onSubmit={onSubmit}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const maxLength20 = maxLengthCreator(20);

const NewMessagesForm = (props) => {
    return (
        <form className={styles.addMessages} onSubmit={props.handleSubmit}>
            <Field component={Textarea} 
                name={'newMessages'}
                validate={[required, maxLength20]}
                className={styles.addMessages__field} />
            <button className={styles.btn}>Отправить</button>
        </form>
    )
}

const NewMessagesReduxForm = reduxForm({form: 'newMessages'})(NewMessagesForm);

export default Messages;