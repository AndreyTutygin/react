import React from 'react';
import { connect } from 'react-redux';
import Auth from './Auth';
import {setAuthUserData, setUserPhoto, logout} from './../../redux/authReducer';

class AuthContainer extends React.Component {

    render() {
        return (
            <Auth {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    id: state.auth.id,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profileData: state.profilePage.profileData
});

export default connect(mapStateToProps, {setAuthUserData, setUserPhoto, logout})(AuthContainer);

