import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_PROFILE_DATA = 'SET_PROFILE_DATA';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    postsData: [{
            id: 1,
            message: 'Привет как дела?'
        },
        {
            id: 2,
            message: 'Привет как дела?'
        },
    ],
    profileData: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: 
            let newPost = {
                id: state.postsData.length + 1,
                message: action.newPost,
            };

            return {
                ...state,
                postsData: [...state.postsData, newPost],
            };

        case SET_PROFILE_DATA: {
            return {
                ...state,
                profileData: action.profileData
            };
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }

        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profileData: {...state.profileData, photos: action.photos}
            };
        }

        default:
            return state;
    }

};

export const addPost = (newPost) => ({
    type: ADD_POST,
    newPost
});

export const setProfileData = (profileData) => ({
    type: SET_PROFILE_DATA,
    profileData
});

export const setStatus = (status) => ({
    type: SET_STATUS,
    status
});

export const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
});


export const getProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(data => {
        dispatch(setProfileData(data));
    })
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
        dispatch(setStatus(data));
    })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    })
}

export const savePhoto = (file) => (dispatch) => {
    profileAPI.savePhoto(file).then(data => {
        if (data.resultCode === 0) {
            dispatch(savePhotoSuccess(data.data.photos));
        }
    })
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    const data = await profileAPI.saveProfile(profile);

    if (data.resultCode === 0) {
        dispatch(getProfile(userId));
    } else {
        dispatch(stopSubmit('editProfile', {_error: data.messages[0]}));
        return Promise.reject(data.messages[0]);
    }
}

export default profileReducer;