import './classes.css';
import ImageClasses from '../../assets/classes/class-4.webp';
import ImageClasses5 from '../../assets/classes/class-5.webp';
import ImageClasses6 from '../../assets/classes/class-6.png';

export default function ClassesCards() {
  return (
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
            Unleash Your Child’s Creativity! Join our drawing classes for kids.
            Explore art, make friends, and ignite their imagination!
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
            backgroundImage: `url(${ImageClasses5})`,
          }}
        />
        <div className="classes-card-description">
          <h5>Language Learning</h5>
          <p>
            Unlock Language Magic! Enroll your in our language learning classes.
            Fun, interactive, and perfect for young minds!
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
            backgroundImage: `url(${ImageClasses6})`,
          }}
        />
        <div className="classes-card-description">
          <h5>Basic Science</h5>
          <p>
            Explore Science Wonders! Enroll your in our basic science classes.
            Fun experiments, curious minds, and endless discoveries await!
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
  );
}
