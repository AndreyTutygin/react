import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './NameLink.module.css';

const NameLink = (props) => {
    let path = `/messages/${props.id}`;

    return (
        <li className={styles.names__item}>
            <NavLink to={path} className={styles.names__link}>
                <div className={styles.names__ava} style={{backgroundImage: `url(${props.ava})`}}></div>
                <span className={styles.name__txt}>{props.name}</span>
            </NavLink>
        </li>
    );
}

export default NameLink;