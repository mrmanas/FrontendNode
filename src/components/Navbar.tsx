import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (

    
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
