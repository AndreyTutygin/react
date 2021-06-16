import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators';
import { createField, Input } from '../common/FormsControls/FormsControls';
import { connect } from 'react-redux';
import { login } from './../../redux/authReducer.js';
import { Redirect } from "react-router-dom";
import styles from './Login.module.css';

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) return <Redirect to={'/profile'} />

    return (
        <>
            <h1>Login</h1>
            <FormReduxLogin onSubmit={onSubmit} captcha={props.captcha}/>
        </>
    )
};

const FormLogin = (props) => {
    return (
        <form className={styles.form} onSubmit={props.handleSubmit}>
            <Field className={styles.form__item} 
                name={'email'} 
                placeholder={'Email'}
                component={Input}
                validate={[required]}/>
            <Field className={styles.form__item} 
                name={'password'} 
                placeholder={'Пароль'}
                type={'password'}
                component={Input}
                validate={[required]}/>
            <p className={styles.form__item}>
                <Field type={'checkbox'} 
                    name={'rememberMe'} 
                    component={Input}
                    validate={[required]}/>
                Запомнить
            </p>
            {props.captcha && <Captcha {...props}/>}
            { props.error && <div className={styles.form__error}>{props.error}</div> }
            <button className={styles.form__btn}>Войти</button>
        </form>
    )
}

const Captcha = (props) => {
    return (
        <div className={styles.captcha}>
            <img src={props.captcha}/>
            {createField('Введите символы', 'captcha', [required], Input)}
        </div>
    )
}

const FormReduxLogin = reduxForm({form: 'login'})(FormLogin)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha
})

export default connect(mapStateToProps, {login})(Login);