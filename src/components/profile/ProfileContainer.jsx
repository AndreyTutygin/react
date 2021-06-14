import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfileData, getProfile, getStatus, updateStatus } from './../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('./login');
            }
        }

        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <Profile profileData={this.props.profileData} 
                        status={this.props.status} 
                        updateStatus={this.props.updateStatus} />
    }
};

const mapStateToProps = (state) => ({
    profileData: state.profilePage.profileData,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {setProfileData, getProfile, getStatus, updateStatus}),
    withRouter,
)(ProfileContainer);