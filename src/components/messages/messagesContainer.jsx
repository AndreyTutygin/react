import React from 'react';
import { connect } from 'react-redux';
import { addChatActionCreator, onChatChangeActionCreator } from './../../redux/messageReducer';
import Messages from './messages';

let mapStateToProps = (state) => {
    return {
        namesData: state.messagesPage.namesData,
        chatData: state.messagesPage.chatData,
        valueTxt: state.messagesPage.newMessageTxt
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: () => {
            dispatch(addChatActionCreator());
        },
        onPostChange: (messageTxt) => {
            dispatch(onChatChangeActionCreator(messageTxt));
        }
    }
};

const messagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default messagesContainer;