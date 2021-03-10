import './App.css';
import Header from './components/header/header';
import Profile from './components/profile/profile';
import Nav from './components/nav/nav';
import MessagesContainer from './components/messages/messagesContainer';
import News from './components/news/news';
import {BrowserRouter, Route} from 'react-router-dom';
import UsersContainer from './components/users/usersContainer';


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="AppWrapper">
                <Header/>
                <Nav/>
                <main className='main'>
                    <Route exact path='/messages' 
                        render={ () => <MessagesContainer/> } />
                    <Route exact path='/profile' 
                        render={ () => <Profile/> } />
                    <Route exact path='/users' 
                        render={ () => <UsersContainer/> } />
                    <Route exact path='/news' 
                        render={ () => <News/> } />
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
