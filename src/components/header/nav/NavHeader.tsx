import { NavLink } from 'react-router-dom';
import './nav-header.css';

export default function NavHeader() {
  return (
    <nav className="header-nav" id="navbar">
      <NavLink to="/freehold">Home</NavLink>
      <NavLink to="/freehold/curriculum">Curriculum</NavLink>
      <NavLink to="/freehold/about">About Us</NavLink>
      <NavLink to="/freehold/calendar">School Calendar</NavLink>
      <NavLink to="/freehold/virtual">Virtual Learning</NavLink>
      <NavLink to="/freehold/contact">Contact Us</NavLink>
    </nav>
  );
}
