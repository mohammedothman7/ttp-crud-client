import React from 'react';
import { Link } from 'react-router-dom';

function AllStudentsView(props) {
  return (
    <div>
      {props.allStudents.length > 0 ? (
        props.allStudents.map((students) => {
          return (
            <div key={students.id}>
              <Link to={`/students/${students.id}`}>
                <h1>
                  {students.firstName} {students.lastName}
                </h1>
              </Link>
            </div>
          );
        })
      ) : (
        <h1>No students exist</h1>
      )}
    </div>
  );
}

export default AllStudentsView;
