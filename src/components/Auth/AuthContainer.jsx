import React from 'react';
import { connect } from 'react-redux';
import Auth from './Auth';
import {setAuthUserData, setUserPhoto, auth} from './../../redux/authReducer';

class AuthContainer extends React.Component {
    componentDidMount() {
        this.props.auth();
    }

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
    photo: state.auth.photo
});

export default connect(mapStateToProps, {setAuthUserData, setUserPhoto, auth})(AuthContainer);

