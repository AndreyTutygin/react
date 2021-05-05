import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {follow, 
        unFollow, 
        setCurrentPage, 
        getUsers,
        pageChanged} from '../../redux/usersReducer';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.pageChanged(pageNumber, this.props.pageSize);
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        users={this.props.users}
                        currentPage={this.props.currentPage}
                        isFetching={this.props.isFetching}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        onPageChanged={this.onPageChanged}
                        followingInProgress={this.props.followingInProgress}
                        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export default compose(
    connect(mapStateToProps, { follow, unFollow, setCurrentPage, getUsers, pageChanged }),
    withAuthRedirect
)(UsersContainer);