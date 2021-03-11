import React from 'react';
import styles from './AddMessage.module.css';


const AddMessage = (props) => {
    let newPostEl = React.createRef();

    let onAddMessage = () => {
        props.onAddMessage();
    };

    let onPostChange = () => {
        let messageTxt = newPostEl.current.value;
        props.onPostChange(messageTxt);
    };

    return (
        <div className={styles.addMessage}>
            <textarea onChange={onPostChange} ref={newPostEl} className={styles.addMessage__field} 
                value={props.valueTxt}/>
            <button onClick={onAddMessage} className={styles.btn}>{props.btnTxt}</button>
        </div>
    )
};

export default AddMessage;