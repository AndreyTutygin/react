const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

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
    newPostTxt: '',
};

const profileReducer = (state = initialState, action) => {

    let stateCopy = {
        ...state,
        postsData: [...state.postsData]
    };

    switch(action.type) {
        case ADD_POST: 
            let newPost = {
                id: state.postsData.length + 1,
                message: state.newPostTxt,
            };
            stateCopy.postsData.push(newPost);
            stateCopy.newPostTxt = '';
            return stateCopy;

        case UPDATE_NEW_POST_TEXT: 
            stateCopy.newPostTxt = action.newText;
            return stateCopy;

        default:
            return state;
    }

};

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const onPostChangeActionCreator = (messageTxt) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: messageTxt
});

export default profileReducer;