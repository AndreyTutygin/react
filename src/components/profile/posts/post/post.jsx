import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.post}>
            <div className={styles.post__ava} style={{backgroundImage: `url('https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg')`}}></div>
            <p className={styles.post__txt}>{ props.message }</p>
        </div>
    )
};

export default Post;