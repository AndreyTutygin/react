import React, { useEffect, useState } from 'react';
import styles from './User.module.css';

const UserStatusWithHook = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={styles.userStatus}>
            {!editMode && <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>}
            {editMode && <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} 
            value={status} />}
        </div>
    )
}

export default UserStatusWithHook;