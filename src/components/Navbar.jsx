import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div id='main'>
      <nav>
        <ul>
          <li>
            <NavLink to="/Home" className="link">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Contact" className="link">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/Chats" className="link">Chats</NavLink>
          </li>
          <li>
            <NavLink to="/Community" className="link">Community</NavLink>
          </li>
          <li>
            <NavLink to="/Profile" className="link">Profile</NavLink>
          </li>
        
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
