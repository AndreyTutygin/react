import React from 'react';
import Post from './post/post';
import style from './posts.module.css';


const Posts = (props) => {
    const postsEl = props.postsData.map(i => <Post message={i.message} key={i.id} />);

    let newPostEl = React.createRef();

    let onAddMessage = () => {
        props.onAddMessage();
    };

    let onPostChange = () => {
        let messageTxt = newPostEl.current.value;
        props.onPostChange(messageTxt);
    };

    return (
        <div className={style.posts}>
            <h2 className={style.posts__title}>Мои посты</h2>
            <div className={style.addMessage, style.posts__addMessage}>
                <textarea onChange={onPostChange} ref={newPostEl} className={style.addMessage__field} 
                    value={props.valueTxt}/>
                <button onClick={onAddMessage} className={style.btn}>{props.btnTxt}</button>
            </div>
            { postsEl }
        </div>
    )
};

export default Posts;