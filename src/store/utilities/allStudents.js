import axios from 'axios';

// ACTION TYPES;
const FETCH_ALL_STUDENTS = 'FETCH_ALL_STUDENTS';
// const ADD_CAMPUS = "ADD_CAMPUS";
// const EDIT_CAMPUS = "EDIT_CAMPUS";

// ACTION CREATORS;
const fetchAllStudents = (allStudents) => {
  return {
    type: FETCH_ALL_STUDENTS,
    payload: allStudents,
  };
};

// const addCampus = (campus) => {
//   return {
//     type: ADD_CAMPUS,
//     payload: campus,
//   };
// };

// const editCampus = (campus) => {
//   return {
//     type: EDIT_CAMPUS,
//     payload: campus,
//   };
// };

// THUNK CREATORS;
export const fetchAllStudentsThunk = () => (dispatch) => {
  console.log('In Fetch All Students Thunk');
  return axios
    .get('/api/students')
    .then((res) => res.data)
    .then((students) => dispatch(fetchAllStudents(students)))
    .catch((err) => console.log(err));
};

// export const addCampusThunk = (campus, ownProps) => (dispatch) => {
//   return axios
//     .post("/api/campuses", campus)
//     .then((res) => res.data)
//     .then((newCampus) => {
//       dispatch(addCampus(newCampus));
//       ownProps.history.push(`/campuses/${newCampus.id}`);
//     })
//     .catch((err) => console.log(err));
// };

// export const editCampusThunk = (id, campus) => (dispatch) => {
//   return axios
//     .put(`/api/campuses/${id}`, campus)
//     .then((res) => res.data)
//     .then((updatedCampus) => dispatch(editCampus(updatedCampus)))
//     .catch((err) => console.log(err));
// };

// REDUCER;
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_STUDENTS:
      return action.payload;
    // case ADD_CAMPUS:
    //   return [...state, action.payload];
    // case EDIT_CAMPUS:
    //   return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
