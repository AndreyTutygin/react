import React from 'react';
import { connect } from 'react-redux';
import Posts from './posts';
import { addPostActionCreator, onPostChangeActionCreator } from './../../../redux/profileReducer';

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        valueTxt: state.profilePage.newPostTxt,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: () => {
            dispatch(addPostActionCreator());
        },
        onPostChange: (messageTxt) => {
            dispatch(onPostChangeActionCreator(messageTxt));
        }
    }
};

const postsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default postsContainer;