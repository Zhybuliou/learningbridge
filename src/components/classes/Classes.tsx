import './classes.css';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import ImageClasses from '../../assets/classes/class-1.jpg';

export default function Classes() {
  return (
    <section className="classes-wrapper">
      <div className="classes">
        <div className="classes-header">
          <p>Courses</p>
          <h3>Popular Classes</h3>
        </div>
        <div className="classes-cards">
          <div className="classes-card">
            <div
              className="classes-card-image"
              style={{
                backgroundImage: `url(${ImageClasses})`,
              }}
            />
            <div className="classes-card-description">
              <h5>Drawing Class</h5>
              <p>
                Justo ea diam stet diam ipsum no sit, ipsum vero et et diam
                ipsum duo et no et, ipsum ipsum erat duo amet clita duo
              </p>
            </div>
            <div className="classes-card-price">
              <div className="classes-card-price-row">
                <div className="classes-card-price-name">Age of Kids</div>
                <div className="classes-card-price-result">3 - 6 Years</div>
              </div>
              <div className="classes-card-price-row">
                <div className="classes-card-price-name">Total Seats</div>
                <div className="classes-card-price-result">40 Seats</div>
              </div>
              <div className="classes-card-price-row">
                <div className="classes-card-price-name">Class Time</div>
                <div className="classes-card-price-result">08:00 - 10:00</div>
              </div>
              <div className="classes-card-price-row">
                <div className="classes-card-price-name">Tuition Fee</div>
                <div className="classes-card-price-result">$290 / Month</div>
              </div>
            </div>
          </div>
          <div className="classes-card">
            <div
              className="classes-card-image"
              style={{
                backgroundImage: `url(${ImageClasses})`,
              }}
            />
            <div className="classes-card-description">
              <h5>Drawing Class</h5>
              <p>
                Justo ea diam stet diam ipsum no sit, ipsum vero et et diam
                ipsum duo et no et, ipsum ipsum erat duo amet clita duo
              </p>
            </div>
            <div className="classes-card-price">
              <div className="classes-card-price-row">
                <div className="classes-card-price-name">Age of Kids</div>
                <div className="classes-card-price-result">3 - 6 Years</div>
              </div>
              <div className="classes-card-price-row">
                <div className="classes-card-price-name">Total Seats</div>
                <div className="classes-card-price-result">40 Seats</div>
              </div>
              <div className="classes-card-price-row">
                <div className="classes-card-price-name">Class Time</div>
                <div className="classes-card-price-result">08:00 - 10:00</div>
              </div>
              <div className="classes-card-price-row">
                <div className="classes-card-price-name">Tuition Fee</div>
                <div className="classes-card-price-result">$290 / Month</div>
              </div>
            </div>
          </div>
          <div className="classes-card">
            <div
              className="classes-card-image"
              style={{
                backgroundImage: `url(${ImageClasses})`,
              }}
            />
            <div className="classes-card-description">
              <h5>Drawing Class</h5>
              <p>
                Justo ea diam stet diam ipsum no sit, ipsum vero et et diam
                ipsum duo et no et, ipsum ipsum erat duo amet clita duo
              </p>
            </div>
            <div className="classes-card-price">
              <div className="classes-card-price-row">
                <div className="classes-card-price-name">Age of Kids</div>
                <div className="classes-card-price-result">3 - 6 Years</div>
              </div>
              <div className="classes-card-price-row">
                <div className="classes-card-price-name">Total Seats</div>
                <div className="classes-card-price-result">40 Seats</div>
              </div>
              <div className="classes-card-price-row">
                <div className="classes-card-price-name">Class Time</div>
                <div className="classes-card-price-result">08:00 - 10:00</div>
              </div>
              <div className="classes-card-price-row">
                <div className="classes-card-price-name">Tuition Fee</div>
                <div className="classes-card-price-result">$290 / Month</div>
              </div>
            </div>
          </div>
        </div>
        <div className="classes-footer">
          <p>
            Our curriculum is designed to help your child learn & enhance life
            skills with specially crafted multi-level programs
          </p>
          <Link to="/">
            Find Out More <span />
            <span />
            <span />
            <span /> <FaRegArrowAltCircleRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
