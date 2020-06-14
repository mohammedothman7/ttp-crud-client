import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AllStudentsView } from '../views';
import { fetchAllStudentsThunk } from '../../thunks';

export class AllStudentsContainer extends Component {
  componentDidMount() {
    this.props.fetchAllStudents();
  }

  render() {
    return (
      <div>
        {console.log('props', this.props.allStudents)}
        <AllStudentsView allStudents={this.props.allStudents} />
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
  };
};

// Type check props;
AllStudentsContainer.propTypes = {
  allStudents: PropTypes.array.isRequired,
  fetchAllStudents: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllStudentsContainer);

// Creates Thunks
