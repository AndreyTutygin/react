import React from 'react';
import { connect } from 'react-redux';
import Users from './users';
import * as axios from 'axios';
import {follow, 
        unFollow, 
        setUsers, 
        setCurrentPage, 
        setTotalUsersCount, 
        toggleIsFetching} from '../../redux/usersReducer';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        users={this.props.users}
                        currentPage={this.props.currentPage}
                        isFetching={this.props.isFetching}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        onPageChanged={this.onPageChanged}/>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
};

export default connect(mapStateToProps, 
    { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching })(UsersContainer);