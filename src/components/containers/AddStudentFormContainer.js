import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AddStudentFormView } from '../views';
import { addStudentThunk } from '../../thunks';

class AddStudentFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: '',
      imageUrl: '',
      isValidName: false,
      errors: {},
    };
  }

  handleChange = (e) => {
    if (e.target.name === 'firstName') {
      this.setState({ firstName: e.target.value }, this.validateName);
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  validateName = () => {
    const { firstName } = this.state;
    let errors = { ...this.state.errors };
    // set a valid boolean to true
    let isValidName = true;
    // check if the value is valid
    if (firstName.length < 2) {
      // if not, set the value to false and add error message
      isValidName = false;
      errors.firstName = 'Invalid student name';
    }
    //
    // setstate with isValidName
    if (isValidName) {
      errors.firstName = 'valid first name';
    }
    this.setState({ isValidName, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('In handleSubmit for addStudentFormContainer');
    if (this.state.isValidName) this.props.addStudent(this.state);
  };

  render() {
    return (
      <>
        {/* Can potentially be extracted into its own ErrorMessage component */}
        {this.state.isValidName ? '' : this.state.errors.name}
        <AddStudentFormView
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          gpa={this.state.gpa}
          imageUrl={this.state.imageUrl}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    addStudent: (student) => dispatch(addStudentThunk(student, ownProps)),
  };
};

AddStudentFormContainer.propTypes = {
  addStudent: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(AddStudentFormContainer);
