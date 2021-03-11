import React from 'react';
import { connect } from 'react-redux';
import AddMessage from './AddMessage';
import { addPostActionCreator, onPostChangeActionCreator } from '../../redux/profileReducer';
import { addChatActionCreator, onChatChangeActionCreator } from '../../redux/messageReducer';


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
        return {
            onAddMessage: () => {
                dispatch(addPostActionCreator());
            },
            onPostChange: (messageTxt) => {
                dispatch(onPostChangeActionCreator(messageTxt));
            }
        };
    } else if ( props.className.includes('messages') ) {
        return {
            onAddMessage: () => {
                dispatch(addChatActionCreator());
            },
            onPostChange: (messageTxt) => {
                dispatch(onChatChangeActionCreator(messageTxt));
            }
        };
    }
};

const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage);

export default AddMessageContainer;

