import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import ProfileContainer from './components/Profile/ProfileContainer';
import Nav from './components/Nav/Nav';
import MessagesContainer from './components/Messages/MessagesContainer';
import News from './components/News/News';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) return <Preloader/>

        return (
            <BrowserRouter>
                <div className="AppWrapper">
                    <Header/>
                    <Nav/>
                    <main className='main'>
                        <Route exact path='/login' 
                            render={ () => <Login/> } />
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
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);