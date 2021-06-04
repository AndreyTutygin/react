import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../../redux/profileReducer';
import Posts from './Posts';

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
    }
};

const PostsContainer = connect(mapStateToProps, {addPost})(Posts);

export default PostsContainer;