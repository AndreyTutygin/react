import React from 'react';
import { connect } from 'react-redux';
import Messages from './messages';

let mapStateToProps = (state) => {
    return {
        namesData: state.messagesPage.namesData,
        chatData: state.messagesPage.chatData,
    }
};

const messagesContainer = connect(mapStateToProps)(Messages);

export default messagesContainer;