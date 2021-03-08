import style from './profile.module.css';
import User from './user/user';
import PostsContainer from './posts/postsContainer';

const Profile = (props) => {
    return (
        <main className={style.profile}>
            <div className={style.profile__img} style={{backgroundImage: `url('https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300')`}}></div>
            <div className={style.container}>
                <User/>
                <PostsContainer className='bam' btnTxt='Опубликовать'/>
            </div>
        </main>
    )
};

export default Profile;