import React, { Component } from 'react';
//import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { fetchAllCampusesThunk } from '../../thunks';

class AddCampusToStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { campus: {} };
  }
  componentDidMount() {
    this.props.fetchAllCampuses();
  }

  // when the enroll student button is clicked
  // send a put request for the student
  // change the campus id to the id of the campus we are on

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleEnrollStudent(this.props.studentId, this.state.campus);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select name='campus' onChange={this.handleChange}>
            <option value=''>Please select a campus</option>
            {this.props.allCampus
              .filter((s) => s.campusId !== this.props.studentId)
              .map((campus) => {
                console.log(
                  'AddCampusToStudentContainer campus.id: ',
                  campus.campusId
                );
                return (
                  <option value={campus} key={campus.id}>
                    {campus.name}
                  </option>
                );
              })}
          </select>
          <button type='submit'>Enroll Student to campus</button>
          <br></br>
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  return { allCampuses: state.allCampuses };
};

const mapDispatch = (dispatch) => {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
  };
};

export default connect(mapState, mapDispatch)(AddCampusToStudentContainer);
