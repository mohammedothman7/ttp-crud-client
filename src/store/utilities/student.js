import axios from 'axios';

// Action type
const FETCH_ONE_STUDENT = 'FETCH_ONE_STUDENT';

// Action creator
const fetchOneStudent = (student) => {
  //console.log(student);
  return {
    type: FETCH_ONE_STUDENT,
    payload: student,
  };
};

// Thunk Creator
export const fetchOneStudentThunk = (studentID) => (dispatch) => {
  console.log(studentID);
  return axios
    .get(`/api/students/${studentID}`)
    .then((res) => res.data)
    .then((student) => dispatch(fetchOneStudent(student)))
    .catch((err) => console.log(err));
};

// Reducer
const reducer = (state = {}, action) => {
  console.log(action.type);
  switch (action.type) {
    case FETCH_ONE_STUDENT:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
