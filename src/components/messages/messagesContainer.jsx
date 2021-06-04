import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addChat } from '../../redux/messageReducer';
import Messages from './Messages';

let mapStateToProps = (state) => {
    return {
        namesData: state.messagesPage.namesData,
        chatData: state.messagesPage.chatData,
    }
};

export default compose(
    connect(mapStateToProps, {addChat}),
    withAuthRedirect
)(Messages);