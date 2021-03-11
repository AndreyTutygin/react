import React from 'react';
import AddMessageContainer from '../../AddMessage/AddMessageContainer';
import Post from './Post/Post';
import styles from './Posts.module.css';


const Posts = (props) => {
    const postsEl = props.postsData.map(i => <Post message={i.message} key={i.id} />);

    return (
        <div className={styles.posts}>
            <h2 className={styles.posts__title}>Мои посты</h2>
            <div className={styles.posts__addMessage}>
                <AddMessageContainer className='posts__addMessage' btnTxt='Опубликовать'/>
            </div>
            { postsEl }
        </div>
    )
};

export default Posts;