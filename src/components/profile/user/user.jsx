import React, { useState } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import styles from './User.module.css';
import UserStatusWithHook from './UserStatusWithHook';
import defaultUserImg from './../../../assets/images/user.png';
import { Field, reduxForm } from 'redux-form';
import UserInfoFormRedux from './UserInfoFormRedux';

const User = (props) => {
    let [editMode, setEditMode] = useState(false);

    if (!props.profileData) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false);
        });
    }

    return (
        <div className={styles.user}>
            <div className={styles.user__ava} style={{backgroundImage: `url(${props.profileData.photos.large || defaultUserImg})`}}>
                {props.isOwner && <input className={styles.addPhoto} type={'file'} onChange={onMainPhotoSelected}/>}
            </div>
            <div className={styles.user__desc}>
                <h2 className={styles.user__fio}>
                    <span className={styles.user__fullName}>{props.profileData.fullName}</span>
                </h2>
                <div className={styles.user__item}>
                    <span className={styles.user__span}>Статус:</span> <UserStatusWithHook status={props.status} 
                    updateStatus={props.updateStatus}/>
                </div>
                {editMode ? <UserInfoFormRedux {...props} onSubmit={onSubmit} initialValues={props.profileData} /> : <UserInfo {...props} goToEditMode={() => {setEditMode(true)}}/>}
            </div>
        </div>
    )
};

export const Contact = ({contactTitle, contactValue}) => {
    return <li className={styles.user__contact}><span className={styles.user__span}>{contactTitle}:</span> {contactValue}</li>
}

const UserInfo = (props) => {
    return (
        <>
            <ul className={styles.user__list}>
                <li className={styles.user__item}><span className={styles.user__span}>ФИО:</span> 
                {props.profileData.fullName}</li>
                <li className={styles.user__item}><span className={styles.user__span}>Обо мне:</span> 
                {props.profileData.aboutMe}</li>
                <li className={styles.user__item}><span className={styles.user__span}>Ищешь работу:</span> 
                {props.profileData.lookingForAJob}</li>
                <li className={styles.user__item}><span className={styles.user__span}>О поиске работы:</span> 
                {props.profileData.lookingForAJobDescription}</li>
                <ul className={styles.user__contacts}>
                    {Object.keys(props.profileData.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={props.profileData.contacts[key]} />
                    })}
                </ul>
            </ul>
            {props.isOwner && <button onClick={props.goToEditMode}>edit</button>}
        </>
    )
}

export default User;