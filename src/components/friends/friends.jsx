import style from './friends.module.css'

const Friends = (props) => {
    return (
        <section className={style.friends}>
            <div className={style.container}>
                <h2 className={style.friends__title}>Друзья</h2>
            </div>
        </section>
    );
}

export default Friends;