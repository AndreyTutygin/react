import React from 'react';
import { connect } from 'react-redux';
import Posts from './posts';

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
    }
};

const postsContainer = connect(mapStateToProps)(Posts);

export default postsContainer;