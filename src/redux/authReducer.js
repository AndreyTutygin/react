import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PHOTO = 'SET_USER_PHOTO';
const SET_CAPTCHA = 'SET_CAPTCHA';

let initialState = {
    id: null,
    email: null,
    login: null,
    photo: null,
    isAuth: false,
    captcha: null
};

const authReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA:
            return {
                ...state,
                ...action.data,
            };

        case SET_USER_PHOTO:
            return {
                ...state,
                photo: action.photo
            }

        default:
            return state;
    }

};

export const setAuthUserData = (id, email, login, isAuth, captcha) => ({
    type: SET_USER_DATA,
    data: {id, email, login, isAuth, captcha}
});

export const setUserPhoto = (photo) => ({
    type: SET_USER_PHOTO,
    photo
});

export const setCaptcha = (captcha) => ({
    type: SET_CAPTCHA,
    data: {captcha}
});

export const auth = () => (dispatch) => {
    authAPI.auth().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login, true));

            authAPI.getId().then(data => {
                dispatch(setUserPhoto(data.photos.large));
            })
        }
    })
}

export const login = (email, password, rememberMe, captcha) => (dispatch) => {
    authAPI.login(email, password, rememberMe, captcha).then(data => {
        if (data.resultCode === 0) {
            dispatch(auth());
        } else {
            if (data.resultCode === 10) dispatch(getCaptcha());

            let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
            dispatch(stopSubmit('login', {_error: message}));
        }
    })
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    })
}

export const getCaptcha = () => (dispatch) => {
    authAPI.captcha().then(data => {
        dispatch(setCaptcha(data.url));
    })
}

export default authReducer;