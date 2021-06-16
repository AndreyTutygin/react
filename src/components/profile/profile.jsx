import React from 'react';
import styles from './Profile.module.css';
import User from './User/User';
import PostsContainer from './Posts/PostsContainer';

const Profile = (props) => {
    return (
        <section className={styles.profile}>
            <div className={styles.profile__img} style={{backgroundImage: `url('https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300')`}}></div>
            <div className={styles.container}>
                <User profileData={props.profileData} 
                    status={props.status} 
                    updateStatus={props.updateStatus}
                    isOwner={props.isOwner}
                    savePhoto={props.savePhoto}
                    saveProfile={props.saveProfile}
                    />
                <PostsContainer/>
            </div>
        </section>
    )
};

export default Profile;