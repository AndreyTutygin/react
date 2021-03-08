import React from 'react';
import AddMessageContainer from '../../addMessage/addMessageContainer';
import Post from './post/post';
import style from './posts.module.css';


const Posts = (props) => {
    const postsEl = props.postsData.map(i => <Post message={i.message} key={i.id} />);

    return (
        <div className={style.posts}>
            <h2 className={style.posts__title}>Мои посты</h2>
            <div className={style.posts__addMessage}>
                <AddMessageContainer className='posts__addMessage' btnTxt='Опубликовать'/>
            </div>
            { postsEl }
        </div>
    )
};

export default Posts;