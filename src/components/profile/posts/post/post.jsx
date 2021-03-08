import style from './post.module.css';

const Post = (props) => {
    return (
        <div className={style.post}>
            <div className={style.post__ava} style={{backgroundImage: `url('https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg')`}}></div>
            <p className={style.post__txt}>{ props.message }</p>
        </div>
    )
};

export default Post;