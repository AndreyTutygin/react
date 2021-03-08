import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import style from './nameLink.module.css';

const NameLink = (props) => {
    let path = `/messages/${props.id}`;

    return (
        <li className={style.names__item}>
            <NavLink to={path} className={style.names__link}>
                <div className={style.names__ava} style={{backgroundImage: `url(${props.ava})`}}></div>
                <span className={style.name__txt}>{props.name}</span>
            </NavLink>
        </li>
    );
}

export default NameLink;