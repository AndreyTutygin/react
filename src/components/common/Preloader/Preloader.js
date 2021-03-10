import React from 'react';
import PreloaderImg from './../../../assets/images/preloader.gif';
import style from './Preloader.module.css'

const Preloader = () => {
    return(
        <img className={style.preloader} src={PreloaderImg} />
    )
}

export default Preloader;