import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Auth from './Auth';
import {setAuthUserData, setUserPhoto} from './../../redux/authReducer';
import { authAPI } from '../../api/api';

class AuthContainer extends React.Component {
    componentDidMount() {
            authAPI.auth().then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    this.props.setAuthUserData(id, email, login);

                    authAPI.getId().then(data => {
                        this.props.setUserPhoto(data.photos.large);
                    })
                }
            })
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

export default connect(mapStateToProps, {setAuthUserData, setUserPhoto})(AuthContainer);

