import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { AllStudentsView } from '../views';
import { fetchAllStudentsThunk, deleteStudentThunk } from '../../thunks';

export class AllStudentsContainer extends Component {
  componentDidMount() {
    this.props.fetchAllStudents();
  }

  handleDelete = (id) => {
    this.props.deleteStudent(id);
  };

  handleNew = () => {
    this.props.history.push(`/students/new`);
  };

  handleEdit = (id) => {
    this.props.history.push(`/students/${id}/edit`);
  };

  render() {
    return (
      <div>
        {console.log('props', this.props.allStudents)}
        <AllStudentsView
          allStudents={this.props.allStudents}
          handleDelete={this.handleDelete}
          handleNew={this.handleNew}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}

// Map state to props;
const mapState = (state) => {
  console.log('In mapState');
  return {
    allStudents: state.allStudents,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  console.log('In mapDispatch');
  return {
    //  fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    deleteStudent: (id) => dispatch(deleteStudentThunk(id)),
  };
};

// Type check props;
AllStudentsContainer.propTypes = {
  allStudents: PropTypes.array.isRequired,
  fetchAllStudents: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(withRouter(AllStudentsContainer));

// Creates Thunks
