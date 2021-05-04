import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { setProfileData } from './../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/api';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;

        profileAPI.getProfile(userId).then(data => {
            this.props.setProfileData(data)
        })
    }

    render() {
        return <Profile profileData={this.props.profileData} />
    }
};

const mapStateToProps = (state) => ({
    profileData: state.profilePage.profileData
})

let ProfileContainerUrl = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setProfileData})(ProfileContainerUrl);