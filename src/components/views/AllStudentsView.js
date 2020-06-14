import React from 'react';

function AllStudentsView(props) {
  return (
    <div>
      {props.allStudents.map((students) => {
        return (
          <div key={students.id}>
            <h1>{students.firstName}</h1>
            <h1>{students.lastName}</h1>
            <p>{students.email}</p>
            <p>{students.gpa}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AllStudentsView;
