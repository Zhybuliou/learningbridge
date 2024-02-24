import './teachers.css';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import ImageTeacher from '../../assets/teachers/team-1.jpg';
import ImageTeacher2 from '../../assets/teachers/team-2.jpg';
import ImageTeacher3 from '../../assets/teachers/team-4.jpg';
import ImageTeacher4 from '../../assets/teachers/team-3.jpg';
import FadeIn from '../animate/FadeIn';

export default function Teachers() {
  return (
    <section>
      <div className="teachers">
        <FadeIn numberDelay={200}>
          <div className="teachers-header">
            <p>Meet our staffs</p>
            <h3>Excellent teacher</h3>
          </div>
        </FadeIn>
        <div className="teachers-cards">
          <FadeIn numberDelay={200}>
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
          </FadeIn>
          <FadeIn numberDelay={300}>
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
          </FadeIn>
          <FadeIn numberDelay={400}>
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
          </FadeIn>
          <FadeIn numberDelay={500}>
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
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
