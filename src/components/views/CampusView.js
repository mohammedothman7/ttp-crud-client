<<<<<<< HEAD
import React from 'react';

const CampusView = (props) => {
  let studentDisplay;
  console.log(props.campus.students);
  if (props.campus.students) {
    studentDisplay = (
      <div>
        <p>{props.campus.students.length} Students</p>
        {props.campus.students.map((student) => (
          <div key={student.id}>{student.firstName}</div>
        ))}
      </div>
    );
  } else {
    studentDisplay = <p>There are no students enrolled</p>;
  }

=======
import React from "react";
import "./styles/CampusView.css";
import { Link } from "react-router-dom";
import { StudentNameListContainer } from "../containers";

const CampusView = (props) => {
>>>>>>> 00d77b94338a4b8dae2bfc5bc180b162f836f7d7
  return (
    <>
      <img src={props.campus.imageUrl} alt={props.campus.name} />
      <h1>{props.campus.name}</h1>
      <h3>{props.campus.address}</h3>

      <p>{props.campus.description}</p>

      <StudentNameListContainer students={props.campus.students} />

      <Link className="edit-link" to={`/campuses/${props.campus.id}/edit`}>
        Edit
      </Link>
      <button onClick={() => props.handleDelete(props.campus.id)}>
        Delete
      </button>
    </>
  );
};

export default CampusView;
