import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './nav.css';
import CallAction from '../call/CallAction';
import Hamburger from './Hamburger';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="link-logo">
          <div className="home-page-logo" />
        </Link>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul onClick={() => setShowNavbar(false)} aria-hidden="true">
            <li>
              <NavLink to="/freehold" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/freehold/curriculum">Curriculum</NavLink>
            </li>
            <li>
              <NavLink to="/freehold/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/freehold/calendar">School Calendar</NavLink>
            </li>
            <li>
              <NavLink to="/freehold/virtual">Virtual Learning</NavLink>
            </li>
            <li>
              <NavLink to="/freehold/contact">Contact Us</NavLink>
            </li>
            <CallAction />
          </ul>
        </div>
        <div
          className="menu-icon"
          onClick={handleShowNavbar}
          aria-hidden="true"
        >
          <Hamburger />
        </div>
      </div>
    </nav>
  );
}
