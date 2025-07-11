import { Link, NavLink } from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-name">
          <Link to="/">
            Peter Hudgins
          </Link>
        </div>
        <div className='header-nav'>
          <nav>
            <ul>
              <li><NavLink to="/about">About Me</NavLink></li>
              <li><NavLink to="/resume">Resume</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
