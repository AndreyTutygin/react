import React from 'react';
import styles from './User.module.css';

class UserStatus extends React.Component {
    state = {
        status: 'yo',
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div className={styles.userStatus}>
                {!this.state.editMode && <span onDoubleClick={this.activateEditMode}>{this.state.status}</span>}
                {this.state.editMode && <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />}
            </div>
        )
    }
}

export default UserStatus;