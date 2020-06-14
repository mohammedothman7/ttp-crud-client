import React from 'react';

export default function StudentView(props) {
  const { student } = props;
  return (
    <div>
      <img src={student.imageURL} alt={student.firstName} />
      <h1>
        {student.firstName} {student.lastName}
      </h1>
      <p>
        {student.email} <br></br> {student.gpa}
      </p>
    </div>
  );
}
