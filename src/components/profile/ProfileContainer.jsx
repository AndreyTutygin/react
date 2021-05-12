import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfileData, getProfile } from './../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

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

export default compose(
    connect(mapStateToProps, {setProfileData, getProfile}),
    withRouter,
)(ProfileContainer);