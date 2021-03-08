import React from 'react';
import style from './posts.module.css';


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
        <div className={style.addMessage}>
            <textarea onChange={onPostChange} ref={newPostEl} className={style.addMessage__field} 
                value={props.valueTxt}/>
            <button onClick={onAddMessage} className={style.btn}>{props.btnTxt}</button>
        </div>
    )
};

export default AddMessage;