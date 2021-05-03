import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Auth from './Auth';
import {setAuthUserData, setUserPhoto} from './../../redux/authReducer';

class AuthContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.id}`)
        .then(response => {
            this.props.setUserPhoto(response.data.photos.large);
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

