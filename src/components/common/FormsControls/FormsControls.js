import styles from './FormsControls.module.css';
import { Field } from 'redux-form';

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.addMessageFieldWrap}>
            <textarea {...input} {...props} className={`${styles.addMessageField} ${hasError ? styles.errorField : ''}`}/>
            {hasError && <span className={styles.errorSpan}>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.addLoginFieldWrap}>
            <input {...input} {...props} className={`${hasError ? styles.errorField : ''}`}/>
            {hasError && <span className={styles.errorSpan}>{meta.error}</span>}
        </div>
    )
}

export const createField = (placeholder, name, validators, component, props = {}) => (
    <Field placeholder={placeholder} name={name} validate={validators} component={component} {...props}/>
)