import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, CardActions, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
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

function AllStudentsView(props) {
  const classes = useStyles();

  return (
    <div>
      <div className='addStudent'>
        <Button
          onClick={props.handleNew}
          variant='contained'
          color='primary'
          startIcon={<AddIcon></AddIcon>}
          style={{ padding: '15px', margin: '15px' }}
        >
          Add Student
        </Button>
      </div>
      {props.allStudents.length > 0 ? (
        props.allStudents.map((students) => {
          return (
            <div key={students.id}>
              <Card
                className={classes.root}
                variant='outlined'
                style={CardStyle}
              >
                <CardMedia
                  className={classes.media}
                  image={students.imageURL}
                ></CardMedia>
                <Link to={`/students/${students.id}`}>
                  <h1>
                    {students.firstName} {students.lastName}
                  </h1>
                </Link>
                <CardActions>
                  <Button
                    onClick={() => props.handleDelete(students.id)}
                    color='secondary'
                    variant='contained'
                    style={{ padding: '5px' }}
                  >
                    Delete
                  </Button>

                  <Button
                    onClick={() => props.handleEdit(students.id)}
                    color='primary'
                    variant='contained'
                    style={{ padding: '5px' }}
                    startIcon={<EditIcon></EditIcon>}
                  >
                    Edit
                  </Button>
                </CardActions>
              </Card>
              <br></br>
            </div>
          );
        })
      ) : (
        <h1>No students exist</h1>
      )}
    </div>
  );
}
const CardStyle = {
  backgroundColor: '#303030',
};

export default AllStudentsView;
