import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { fetchAllStudentsThunk, editStudentThunk } from '../../thunks';
import { connect } from 'react-redux';
import { EditStudentFormView } from '../views';

class EditStudentFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: '',
      imageUrl: '',
      campusId: null,
    };
  }

  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.id).then(({ payload }) => {
      console.log(payload);
      this.setState(
        payload,
        console.log('In EditStudentFormContainer', this.state)
      );
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    this.props.editStudent(id, this.state);
    this.props.history.push(`/students/${id}`);
  };

  handleCancel = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    this.props.history.push(`/students/${id}`);
  };

  render() {
    return (
      <EditStudentFormView
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        email={this.state.email}
        gpa={this.state.gpa}
        imageUrl={this.state.imageUrl}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleCancel={this.handleCancel}
      />
    );
  }
}

const mapState = (state) => {
  return { student: state.student };
};

const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchAllStudentsThunk(id)),
    editStudent: (id, student) => dispatch(editStudentThunk(id, student)),
  };
};

EditStudentFormContainer.propTypes = {
  fetchStudent: PropTypes.func.isRequired,
  editStudent: PropTypes.func.isRequired,
};

export default connect(
  mapState,
  mapDispatch
)(withRouter(EditStudentFormContainer));
