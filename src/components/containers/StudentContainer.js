import React, { Component } from 'react';
import { StudentView } from '../views';
import { fetchOneStudentThunk } from '../../thunks';
import { connect } from 'react-redux';

export class StudentContainer extends Component {
  componentDidMount() {
    this.props.fetchOneStudent(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        {console.log('Student container student props:', this.props.student)}
        <StudentView student={this.props.student} />
      </div>
    );
  }
}

// map state to props
const mapState = (state) => {
  console.log('Map State', state);
  return {
    student: state.student,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchOneStudent: (id) => dispatch(fetchOneStudentThunk(id)),
    // deleteCampus: (id) => dispatch(deleteCampusThunk(id)),
    // enrollStudent: (campusId, studentId) =>
    //   dispatch(enrollStudentThunk(campusId, studentId)),
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);
