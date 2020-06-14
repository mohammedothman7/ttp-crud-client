<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampusThunk } from '../../thunks';
=======
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk, deleteCampusThunk } from "../../thunks";
>>>>>>> 00d77b94338a4b8dae2bfc5bc180b162f836f7d7

import { CampusView } from '../views';

class CampusContainer extends Component {
  componentDidMount() {
    this.props.fetchCampus(this.props.match.params.id);
  }

  handleDelete = (id) => {
    this.props.deleteCampus(id);
    this.props.history.push("/campuses");
  };

  render() {
<<<<<<< HEAD
    console.log(this.props.campus);
    return <CampusView campus={this.props.campus} />;
=======
    return (
      <CampusView campus={this.props.campus} handleDelete={this.handleDelete} />
    );
>>>>>>> 00d77b94338a4b8dae2bfc5bc180b162f836f7d7
  }
}

// map state to props
const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    deleteCampus: (id) => dispatch(deleteCampusThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(CampusContainer);
