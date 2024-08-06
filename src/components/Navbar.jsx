
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div id='main' className=''>
      <nav>
        <ul className='flex w-full justify-center items-center top-6 text-black ' >
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
          <li>
            <NavLink to="/Login" className="link">Login</NavLink>
          </li>
        
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
