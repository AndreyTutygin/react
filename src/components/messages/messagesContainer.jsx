import React from 'react';
import { connect } from 'react-redux';
import Messages from './Messages';

let mapStateToProps = (state) => {
    return {
        namesData: state.messagesPage.namesData,
        chatData: state.messagesPage.chatData,
    }
};

const MessagesContainer = connect(mapStateToProps)(Messages);

export default MessagesContainer;