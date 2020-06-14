import React from 'react';
import './styles/AllCampusesView.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return <div className='all-campuses'>There are no campuses</div>;
  }

  return (
<<<<<<< HEAD
    <div className='all-campuses'>
      {console.log(props.allCampuses)}
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campuses/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <img src={campus.imageUrl} width='200px' alt={campus.name} />
          <p>{campus.students.length} students</p>
        </div>
      ))}
=======
    <div className="all-campuses">
      <Link to="/campuses/new" className="add-campus">
        New Campus
      </Link>
      <div>
        {props.allCampuses.map((campus) => (
          <div key={campus.id}>
            <Link to={`/campuses/${campus.id}`}>
              <h1>{campus.name}</h1>
            </Link>
            <img src={campus.imageUrl} width="200px" alt={campus.name} />
            <p>{campus.students.length} students</p>
            <button onClick={() => props.handleDelete(campus.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
>>>>>>> 00d77b94338a4b8dae2bfc5bc180b162f836f7d7
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
