import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class AppForm extends Component {
  state = {
    firstName: '',
    lastName: '',
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName } = this.state;
    this.props.onFormSubmit({ firstName, lastName });
    this.setState({
      firstName: '',
      lastName: '',
    });
  };
  handleFormChange = (e) => {
    const { name } = e.target;
    this.setState({
      [name]: e.target.value,
    });
  };
  render() {
    return (
      <div className="user-form">
        <Form className="user-input-form" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label>First Name</Label>
            <Input
              autoComplete="off"
              value={this.state.firstName}
              onChange={this.handleFormChange}
              placeholder="enter first name"
              name="firstName"
            />
          </FormGroup>
          <FormGroup>
            <Label>Last Name</Label>
            <Input
              autoComplete="off"
              value={this.state.lastName}
              onChange={this.handleFormChange}
              placeholder="enter last name"
              name="lastName"
            />
          </FormGroup>
          <FormGroup>
            <Button block outline type="submit" color="primary">
              Create
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default AppForm;
