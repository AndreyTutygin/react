import React from 'react';
import styles from './News.module.css';

const News = (props) => {
    return (
        <section className={styles.news}>
            <div className={styles.container}>
                <h2 className={styles.news__title}>Новости</h2>
            </div>
        </section>
    );
}

export default News;