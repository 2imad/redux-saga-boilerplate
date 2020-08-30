import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsersRequest, createUsersRequest } from '../actions/users';
import UsersList from './UsersList';
import '../styles/main.css';
import AppForm from './UserForm';
class App extends Component {
  constructor(props) {
    super(props);
    this.props.getUsersRequest();
  }

  onFormSubmit = ({ firstName, lastName }) => {
    this.props.createUsersRequest({ firstName, lastName });
  };
  render() {
    return (
      <div className="main">
        <div className="wrapper">
          <AppForm onFormSubmit={this.onFormSubmit} />
          <UsersList users={this.props.users.items} />
        </div>
      </div>
    );
  }
}

export default connect(({ users }) => ({ users }), {
  getUsersRequest,
  createUsersRequest,
})(App);
