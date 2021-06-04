import { Field, reduxForm } from 'redux-form';
import styles from './Login.module.css';

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <>
            <h1>Login</h1>
            <FormReduxLogin onSubmit={onSubmit}/>
        </>
    )
};

const FormLogin = (props) => {
    return (
        <form className={styles.form} onSubmit={props.handleSubmit}>
            <Field className={styles.form__item} name={'login'} placeholder={'Логин'} component={'input'} />
            <Field className={styles.form__item} name={'password'} placeholder={'Пароль'} component={'input'} />
            <p className={styles.form__item}>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'} />
                Запомнить
            </p>
            <button className={styles.form__btn}>Войти</button>
        </form>
    )
}

const FormReduxLogin = reduxForm({form: 'login'})(FormLogin)

export default Login;