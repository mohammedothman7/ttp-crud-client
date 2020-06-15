import React from 'react';
import { Link } from 'react-router-dom';
import { AddCampusToStudentContainer } from '../containers';
import { Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export default function StudentView(props) {
  const { student } = props;
  return (
    <div>
      <img src={student.imageURL} alt={student.firstName} />
      <h1>
        {student.firstName} {student.lastName}
      </h1>
      <p>
        {student.email} <br></br> GPA: {student.gpa}
      </p>
      {props.student.campusId !== null ? (
        <p>
          {' '}
          <Link to={`/campuses/${props.campusName.id}`}>
            {props.campusName.name}
          </Link>
        </p>
      ) : (
        <p>Student is not enrolled in any campuses</p>
      )}
      <AddCampusToStudentContainer
        studentId={props.student.id}
        handleEnrollStudent={props.handleEnrollStudent}
        allCampus={props.allCampus}
      />
      <Button
        onClick={() => props.handleEdit(student.id)}
        color='primary'
        variant='contained'
      >
        Edit
      </Button>
      <Button
        onClick={() => props.handleDelete(student.id)}
        color='secondary'
        variant='contained'
      >
        Delete
      </Button>
    </div>
  );
}
