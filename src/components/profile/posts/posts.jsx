import React from 'react';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import styles from './Posts.module.css';


const Posts = (props) => {
    const postsEl = props.postsData.map(i => <Post message={i.message} key={i.id} />);

    const onSubmit = (value) => {
        props.addPost(value.newPost)
    }

    return (
        <div className={styles.posts}>
            <h2 className={styles.posts__title}>Мои посты</h2>
            <div className={styles.posts__addMessage}>
                <NewPostReduxForm onSubmit={onSubmit}/>
            </div>
            { postsEl }
        </div>
    )
};

const NewPostForm = (props) => {
    return (
        <form className={styles.addPost} onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'newPost'} className={styles.addPost__field} />
            <button className={styles.btn}>Опубликовать</button>
        </form>
    )
}

const NewPostReduxForm = reduxForm({form: 'newPost'})(NewPostForm);

export default Posts;