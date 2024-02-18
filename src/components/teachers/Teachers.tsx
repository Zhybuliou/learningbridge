import './teachers.css';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import ImageTeacher from '../../assets/teachers/team-1.jpg';
import ImageTeacher2 from '../../assets/teachers/team-2.jpg';
import ImageTeacher3 from '../../assets/teachers/team-4.jpg';
import ImageTeacher4 from '../../assets/teachers/team-3.jpg';

export default function Teachers() {
  return (
    <section>
      <div className="teachers">
        <div className="teachers-header">
          <p>Meet our staffs</p>
          <h3>Excellent teacher</h3>
        </div>
        <div className="teachers-cards">
          <div className="teachers-card">
            <div
              className="teachers-card-avatar"
              style={{ backgroundImage: `url(${ImageTeacher})` }}
            >
              <div className="teachers-card-avatar-links">
                <a href="/">
                  <FaTwitter />
                </a>
                <a href="/">
                  <FaFacebookF />
                </a>
                <a href="/">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <h5>Julia Smith</h5>
            <p>Music Teacher</p>
          </div>
          <div className="teachers-card">
            <div
              className="teachers-card-avatar"
              style={{ backgroundImage: `url(${ImageTeacher2})` }}
            >
              <div className="teachers-card-avatar-links">
                <a href="/">
                  <FaTwitter />
                </a>
                <a href="/">
                  <FaFacebookF />
                </a>
                <a href="/">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <h5>Jhon Doe</h5>
            <p>Language Teacher</p>
          </div>
          <div className="teachers-card">
            <div
              className="teachers-card-avatar"
              style={{ backgroundImage: `url(${ImageTeacher3})` }}
            >
              <div className="teachers-card-avatar-links">
                <a href="/">
                  <FaTwitter />
                </a>
                <a href="/">
                  <FaFacebookF />
                </a>
                <a href="/">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <h5>Donald John</h5>
            <p>Art Teacher</p>
          </div>
          <div className="teachers-card">
            <div
              className="teachers-card-avatar"
              style={{ backgroundImage: `url(${ImageTeacher4})` }}
            >
              <div className="teachers-card-avatar-links">
                <a href="/">
                  <FaTwitter />
                </a>
                <a href="/">
                  <FaFacebookF />
                </a>
                <a href="/">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <h5>Mollie Ross</h5>
            <p>Dance Teacher</p>
          </div>
        </div>
      </div>
    </section>
  );
}
