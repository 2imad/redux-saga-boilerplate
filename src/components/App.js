import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getUsersRequest,
  createUsersRequest,
  deleteUserRequest,
  setUpdateUserRequest,
} from "../actions/users";
import UsersList from "./UsersList";
import "../styles/main.css";
import AppForm from "./UserForm";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
    };
    this.props.getUsersRequest();
  }

  onFormSubmit = ({ firstName, lastName }) => {
    this.props.createUsersRequest({ firstName, lastName });
  };
  onUserDelete = (id) => {
    this.props.deleteUserRequest(id);
  };
  onEditUser = (user) => {
    this.props.setUpdateUserRequest(user);
  };
  render() {
    return (
      <div className="main">
        <div className="wrapper">
          <AppForm onFormSubmit={this.onFormSubmit} />
          <UsersList
            users={this.props.users.items}
            onUserDelete={this.onUserDelete}
            onUpdateUser={this.onEditUser}
          />
        </div>
      </div>
    );
  }
}

export default connect(({ users }) => ({ users }), {
  getUsersRequest,
  createUsersRequest,
  deleteUserRequest,
  setUpdateUserRequest,
})(App);
