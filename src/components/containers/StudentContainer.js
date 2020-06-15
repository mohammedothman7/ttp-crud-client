import React, { Component } from 'react';
import { StudentView } from '../views';
import { withRouter } from 'react-router-dom';
import {
  fetchOneStudentThunk,
  fetchCampusThunk,
  fetchAllCampusesThunk,
  enrollStudentToCampusThunk,
  deleteStudentThunk,
} from '../../thunks';
import { connect } from 'react-redux';

export class StudentContainer extends Component {
  constructor() {
    super();
    this.state = {
      campusName: '',
      isCampusName: false,
    };
  }

  componentDidMount() {
    this.props.fetchOneStudent(this.props.match.params.id);
    this.props.fetchAllCampuses();
  }

  handleEnrollStudent = (studentId, campus) => {
    this.props.enrollStudentToCampus(studentId, campus);
  };

  handleEdit = (id) => {
    this.props.history.push(`/students/${id}/edit`);
  };

  handleDelete = (id) => {
    this.props.deleteStudent(id);
  };

  componentDidUpdate() {
    console.log(this.state.campusName);
    if (this.props.student.campusId !== null && !this.state.isCampusName) {
      const campusName = this.props.fetchCampus(this.props.student.campusId);
      console.log('In componentDidUpdate from StudentContainer');
      this.setState(
        { campusName, isCampusName: true },
        console.log('campusName:', this.state.campusName)
      );
    }
  }

  render() {
    return (
      <div>
        <StudentView
          student={this.props.student}
          campusName={this.props.campus}
          handleEnrollStudent={this.handleEnrollStudent}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          allCampus={this.props.allCampus}
        />
      </div>
    );
  }
}

// map state to props
const mapState = (state) => {
  console.log('Map State', state);
  return {
    student: state.student,
    campus: state.campus,
    allCampus: state.allCampuses,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchOneStudent: (id) => dispatch(fetchOneStudentThunk(id)),
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    enrollStudentToCampus: (studentId, campusId) =>
      dispatch(enrollStudentToCampusThunk(studentId, campusId)),
    deleteStudent: (id) => deleteStudentThunk(id),
  };
};

export default connect(mapState, mapDispatch)(withRouter(StudentContainer));
