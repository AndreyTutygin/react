import React from 'react';
import { connect } from 'react-redux';
import AddMessage from './addMessage';
import { addPostActionCreator, onPostChangeActionCreator } from './../../../redux/profileReducer';

let mapStateToProps = (state, props) => {
    switch (props.className) {
        case props.className.includes('posts'):
            return {
                postsData: state.profilePage.postsData,
                valueTxt: state.profilePage.newPostTxt,
            };

        case props.className.includes('messages'):
            return {
                namesData: state.messagesPage.namesData,
                chatData: state.messagesPage.chatData,
                valueTxt: state.messagesPage.newMessageTxt
            };
    }
};

let mapDispatchToProps = (dispatch, props) => {
    switch (props.className) {
        case props.className.includes('posts'):
            return {
                onAddMessage: () => {
                    dispatch(addPostActionCreator());
                },
                onPostChange: (messageTxt) => {
                    dispatch(onPostChangeActionCreator(messageTxt));
                }
            };

        case props.className.includes('messages'):
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

    // if ( props.className.includes('posts') ) {
    //     return {
    //         postsData: state.profilePage.postsData,
    //         valueTxt: state.profilePage.newPostTxt,
    //     }
    // } else if (props.className.includes('messages')) {
    //     return {
    //         namesData: state.messagesPage.namesData,
    //         chatData: state.messagesPage.chatData,
    //         valueTxt: state.messagesPage.newMessageTxt
    //     }
    // }