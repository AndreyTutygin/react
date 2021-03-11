import './App.css';
import Header from './components/Header/Header';
import ProfileContainer from './components/Profile/ProfileContainer';
import Nav from './components/Nav/Nav';
import MessagesContainer from './components/Messages/MessagesContainer';
import News from './components/News/News';
import {BrowserRouter, Route} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="AppWrapper">
                <Header/>
                <Nav/>
                <main className='main'>
                    <Route exact path='/messages' 
                        render={ () => <MessagesContainer/> } />
                    <Route path='/profile/:userId?' 
                        render={ () => <ProfileContainer/> } />
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
