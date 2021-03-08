import style from './news.module.css'

const News = (props) => {
    return (
        <section className={style.news}>
            <div className={style.container}>
                <h2 className={style.news__title}>Новости</h2>
            </div>
        </section>
    );
}

export default News;