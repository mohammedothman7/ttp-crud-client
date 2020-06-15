import React from 'react';
import { Link } from 'react-router-dom';

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
      <Link className='edit-link' to={`/students/${props.student.id}/edit`}>
        Edit
      </Link>
    </div>
  );
}
