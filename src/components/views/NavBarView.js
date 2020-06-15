import React from 'react';
import './styles/NavBarView.css';
import { Link } from 'react-router-dom';

const NavBarView = (props) => {
  return (
    <nav style={style}>
      <Link to='/' className='nav-link' style={linkStyle}>
        Home
      </Link>
      <Link to='/campuses' className='nav-link' style={linkStyle}>
        Campuses
      </Link>
      <Link to='/students' className='nav-link' style={linkStyle}>
        Students
      </Link>
    </nav>
  );
};

const style = {
  backgroundColor: '#474745',
};
const linkStyle = {
  color: '#fff',
  fontSize: '32px',
  textDecoration: 'none',
};

export default NavBarView;
