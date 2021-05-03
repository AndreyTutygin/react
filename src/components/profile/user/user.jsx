import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import styles from './User.module.css';

const User = (props) => {
    if (!props.profileData) {
        return <Preloader/>
    }

    return (
        <div className={styles.user}>
            <div className={styles.user__ava} style={{backgroundImage: `url(${props.profileData.photos.large})`}}></div>
            <div className={styles.user__desc}>
                <h2 className={styles.user__fio}>
                    <span className={styles.user__fullName}>{props.profileData.fullName}</span>
                </h2>
                <ul className={styles.user__list}>
                    <li className={styles.user__item}><span className={styles.user__span}>Статус:</span> {props.profileData.aboutMe}</li>
                    <li className={styles.user__item}><span className={styles.user__span}>Ищешь работу:</span> {props.profileData.lookingForAJob ? 'Да' : 'Нет'}</li>
                    <li className={styles.user__item}><span className={styles.user__span}>О поиске работы:</span> {props.profileData.lookingForAJobDescription}</li>
                    <ul className={styles.user__contacts}>
                        <li><span className={styles.user__span}>Контакты:</span></li>
                        {props.profileData.contacts.facebook 
                            ? <li className={styles.user__contact}><span className={styles.user__span}>facebook:</span> {props.profileData.contacts.facebook}</li> 
                            : null}
                        {props.profileData.contacts.website 
                            ? <li className={styles.user__contact}><span className={styles.user__span}>website:</span> {props.profileData.contacts.website}</li> 
                            : null}
                        {props.profileData.contacts.vk 
                            ? <li className={styles.user__contact}><span className={styles.user__span}>vk:</span> {props.profileData.contacts.vk}</li> 
                            : null}
                        {props.profileData.contacts.twitter 
                            ? <li className={styles.user__contact}><span className={styles.user__span}>twitter:</span> {props.profileData.contacts.twitter}</li> 
                            : null}
                        {props.profileData.contacts.instagram 
                            ? <li className={styles.user__contact}><span className={styles.user__span}>instagram:</span> {props.profileData.contacts.instagram}</li> 
                            : null}
                        {props.profileData.contacts.youtube 
                            ? <li className={styles.user__contact}><span className={styles.user__span}>youtube:</span> {props.profileData.contacts.youtube}</li> 
                            : null}
                        {props.profileData.contacts.github 
                            ? <li className={styles.user__contact}><span className={styles.user__span}>github:</span> {props.profileData.contacts.github}</li> 
                            : null}
                        {props.profileData.contacts.mainLink 
                            ? <li className={styles.user__contact}><span className={styles.user__span}>mainLink:</span> {props.profileData.contacts.mainLink}</li> 
                            : null}
                    </ul>
                </ul>
            </div>
        </div>
    )
};

export default User;