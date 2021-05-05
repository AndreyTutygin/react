import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfileData, getProfile } from './../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/api';

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId);
    }

    render() {
        return <Profile profileData={this.props.profileData} />
    }
};

const mapStateToProps = (state) => ({
    profileData: state.profilePage.profileData
})

let ProfileContainerUrl = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setProfileData, getProfile})(ProfileContainerUrl);