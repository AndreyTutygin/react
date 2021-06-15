import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import { withSuspense } from './hoc/withSuspense';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer'));
const News = React.lazy(() => import('./components/News/News'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));


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
                            render={withSuspense(Login)} />
                        <Route exact path='/messages' 
                            render={withSuspense(MessagesContainer)} />
                        <Route path='/profile/:userId?' 
                            render={withSuspense(ProfileContainer)} />
                        <Route exact path='/users' 
                            render={withSuspense(UsersContainer)} />
                        <Route exact path='/news' 
                            render={withSuspense(News)} />
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