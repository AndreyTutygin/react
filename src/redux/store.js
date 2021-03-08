import profileReducer from './profileReducer';
import messageReducer from './messageReducer';


const store = {
    _state: {
        profilePage: {
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
        },
        messagePage: {
            namesData: [{
                    id: '1',
                    name: 'Я',
                    ava: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'
                },
                {
                    id: '2',
                    name: 'Валера',
                    ava: 'https://streamdps.ru/upload/iblock/ba4/ba43a8bf5b491168b4f74e9922c88c25.jpg',
                },
                {
                    id: '3',
                    name: 'Оля',
                    ava: 'https://www.meme-arsenal.com/memes/6e04ae9a90c6874a681e2c5d8cb5d046.jpg',
                },
                {
                    id: '4',
                    name: 'Света',
                    ava: 'https://pbs.twimg.com/media/EcZzOJbXgAEpndc.jpg',
                },
            ],

            chatData: [{
                    ava: 'https://streamdps.ru/upload/iblock/ba4/ba43a8bf5b491168b4f74e9922c88c25.jpg',
                    name: 'Дима',
                    message: 'Привет, как дела?'
                },
                {
                    ava: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
                    name: 'Я',
                    message: 'Все хорошо, ты как?'
                },
                {
                    ava: 'https://streamdps.ru/upload/iblock/ba4/ba43a8bf5b491168b4f74e9922c88c25.jpg',
                    name: 'Дима',
                    message: 'Норм'
                },
            ],
            newMessageTxt: '',
        },
    },

    getState() {
        return this._state;
    },

    rerender() {
        console.log('Store change');
    },

    sub(observer) {
        this.rerender = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = messageReducer(this._state.messagePage, action);

        this.rerender(this._state);
    },
};

window.store = store;

export default store;
