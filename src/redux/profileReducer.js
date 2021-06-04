import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE_DATA = 'SET_PROFILE_DATA';
const SET_STATUS = 'SET_STATUS';

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

export const getProfile = (userId) => (dispatch) => {
    if (!userId) userId = 2;

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

export default profileReducer;