import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './Auth.module.css';
import authImg from './../../assets/images/user.png';


const Auth = (props) => {
    return (
        <div className={styles.auth}>
            { props.isAuth 
                ? <div>
                    <NavLink to={`/profile/${props.id}`}>{props.login}</NavLink>
                    <button onClick={props.logout}>Выйти</button>
                </div>
                : <NavLink to={'/login'}>Login</NavLink> }
            <div className={styles.auth__ava} 
            style={{backgroundImage: `url(${authImg})`}}></div>
        </div>
    )
};

export default Auth;