import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class AppForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName } = this.state;
    this.props.onFormSubmit({ firstName, lastName });
    this.setState({
      firstName: "",
      lastName: "",
    });
  };
  handleFormChange = (e) => {
    const { name } = e.target;
    this.setState({
      [name]: e.target.value,
    });
  };

  handleFormEdit = () => {
    if (this.props.user) {
      this.setState({
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName,
      });
    }
  };

  render() {
    console.log("RENDER", this.props.user);
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

const mapStateToProps = (state) => ({ user: state.users.item });

export default connect(mapStateToProps)(AppForm);
