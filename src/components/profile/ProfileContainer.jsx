import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { setProfileData } from './../../redux/profileReducer';

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setProfileData(response.data)
            })
    }

    render() {
        return <Profile profileData={this.props.profileData} />
    }
};

const mapStateToProps = (state) => ({
    profileData: state.profilePage.profileData
})

export default connect(mapStateToProps, {setProfileData})(ProfileContainer);