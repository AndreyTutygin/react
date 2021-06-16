import React from 'react';
import styles from './User.module.css';
import { Field, reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls';

const UserInfoForm = (props) => {
    return (
        <form className={styles.user__list} onSubmit={props.handleSubmit}>
            <li className={styles.user__item}><span className={styles.user__span}>ФИО:</span> 
                {createField('ФИО', 'fullName', [], Input)}
            </li>
            <li className={styles.user__item}><span className={styles.user__span}>Обо мне:</span> 
                {createField('Обо мне', 'aboutMe', [], Input)}
            </li>
            <li className={styles.user__item}><span className={styles.user__span}>Ищешь работу:</span> 
                {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
            </li>
            <li className={styles.user__item}><span className={styles.user__span}>О поиске работы:</span> 
                {createField('А что можешь?', 'lookingForAJobDescription', [], Textarea)}
            </li>
            <ul className={styles.user__contacts}>
                {Object.keys(props.profileData.contacts).map(key => {
                    return <li className={styles.user__contact}>
                        <span className={styles.user__span}>{key}: {createField(key, `contacts.${key}`, [], Input)}</span>
                    </li>
                })}
            </ul>
            <button>save</button>
            { props.error && <div className={styles.form__error}>{props.error}</div> }
        </form>
    )
}

const UserInfoFormRedux = reduxForm({form: 'editProfile'})(UserInfoForm)

export default UserInfoFormRedux;