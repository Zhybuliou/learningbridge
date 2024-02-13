import { Link } from 'react-router-dom';
import './header.css';
import NavHeader from './nav/NavHeader';
import CallAction from './call/CallAction';

export default function Header() {
  return (
    <div className="header">
      <div className="content header-content">
        <Link to="/">
          <div className="home-page-logo" />
        </Link>
        <NavHeader />
        <CallAction />
      </div>
    </div>
  );
}
