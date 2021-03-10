import React from 'react';
import { connect } from 'react-redux';
import AddMessage from './addMessage';
import { addPost, onPostChange } from './../../redux/profileReducer';
import { addChat, onChatChange } from './../../redux/messageReducer';


let mapStateToProps = (state, props) => {
    if ( props.className.includes('posts') ) {
        return {
            valueTxt: state.profilePage.newPostTxt,
        };
    } else if ( props.className.includes('messages') ) {
        return {
            valueTxt: state.messagesPage.newMessageTxt
        };
    }
};

let mapDispatchToProps = (dispatch, props) => {
    if ( props.className.includes('posts') ) {
        return { addPost, onPostChange };
    } else if ( props.className.includes('messages') ) {
        return { addChat, onChatChange };
    }
};

const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage);

export default AddMessageContainer;

