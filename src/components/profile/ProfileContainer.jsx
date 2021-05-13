import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfileData, getProfile, getStatus, updateStatus } from './../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId);
        this.props.getStatus(this.props.match.params.userId);
    }

    render() {
        return <Profile profileData={this.props.profileData} status={this.props.status} updateStatus={this.props.updateStatus} />
    }
};

const mapStateToProps = (state) => ({
    profileData: state.profilePage.profileData,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {setProfileData, getProfile, getStatus, updateStatus}),
    withRouter,
)(ProfileContainer);