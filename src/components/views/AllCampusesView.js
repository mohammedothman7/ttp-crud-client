import React from 'react';
import './styles/AllCampusesView.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button, CardMedia, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const AllCampusesView = (props) => {
  const classes = useStyles();

  if (!props.allCampuses.length) {
    return <div className='all-campuses'>There are no campuses</div>;
  }

  return (
    <div className='all-campuses'>
      <Button
        onClick={props.handleNew}
        variant='contained'
        color='primary'
        startIcon={<AddIcon></AddIcon>}
        style={{ padding: '15px', margin: '15px' }}
      >
        Add Student
      </Button>
      <br></br>
      <div>
        {props.allCampuses.map((campus) => (
          <div key={campus.id}>
            <Card className={classes.root} variant='outlined' style={CardStyle}>
              <CardMedia
                className={classes.media}
                image={campus.imageUrl}
              ></CardMedia>

              <Link to={`/campuses/${campus.id}`}>
                <h1>{campus.name}</h1>
              </Link>
              <p style={{ color: 'white' }}>
                {campus.students.length} students
              </p>
              <CardActions size='small'>
                <Button
                  variant='contained'
                  color='secondary'
                  startIcon={<DeleteIcon />}
                  onClick={() => props.handleDelete(campus.id)}
                >
                  Delete
                </Button>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={() => props.handleEdit(campus.id)}
                  startIcon={<EditIcon />}
                >
                  Edit
                </Button>
              </CardActions>
            </Card>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

const CardStyle = {
  backgroundColor: '#303030',
};
export default AllCampusesView;
