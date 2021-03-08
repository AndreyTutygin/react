import './App.css';
import Header from './components/header/header';
import Profile from './components/profile/profile';
import Nav from './components/nav/nav';
import MessagesContainer from './components/messages/messagesContainer';
import News from './components/news/news';
import {BrowserRouter, Route} from 'react-router-dom';
import Friends from './components/friends/friends';


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
                    <Route exact path='/friends' 
                        render={ () => <Friends/> } />
                    <Route exact path='/news' 
                        render={ () => <News/> } />
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
