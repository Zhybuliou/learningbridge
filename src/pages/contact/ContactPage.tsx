import { CiLocationOn, CiMobile4, CiMail } from 'react-icons/ci';
import PageTitle from '../../components/page-title/PageTitle';
import ImageFreehold from '../../assets/gallery/g-9.jpg';
import ImageEastBrunswick from '../../assets/gallery/g-8.jpg';
import ImageComingSoon from '../../assets/gallery/g-11.jpg';
import './contact.css';
import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <>
      <PageTitle titleName="Contact Us" />
      <div className="contact-header">
        <p>Get In Touch</p>
        <h3>We Love To Hear From You</h3>
      </div>
      <div className="contact-content">
        <div className="contact-map-block">
          <div className="contact-map">
            <iframe
              loading="lazy"
              frameBorder="0"
              width="100%"
              height="450px"
              scrolling="no"
              src="https://maps.google.com/maps?q=118%20W%20Main%20Street%2C%20Freehold%2C%20NJ&layer=tc&t=m&z=14&source=embed&output=svembed"
              title="118 W Main Street, Freehold, NJ"
              aria-label="118 W Main Street, Freehold, NJ"
            />
          </div>
          <div className="contact-form">
            <ContactForm />
          </div>
        </div>
        <div className="contact-cards">
          <div className="contact-card">
            <div
              className="contact-card-image"
              style={{
                backgroundImage: `url(${ImageFreehold})`,
              }}
            />
            <div className="contact-card-header">
              <p>Freehold Location</p>
            </div>
            <div className="contact-card-info">
              <CiLocationOn />
              <p>118 W Main Street, Freehold, NJ 07728</p>
            </div>
            <div className="contact-card-info">
              <CiMobile4 />
              <p>(848) 466-0360</p>
            </div>
            <div className="contact-card-info">
              <CiMail />
              <p>info@learningbridgeacademynj.com</p>
            </div>
          </div>
          <div className="contact-card">
            <div
              className="contact-card-image"
              style={{
                backgroundImage: `url(${ImageEastBrunswick})`,
              }}
            />
            <div className="contact-card-header">
              <p>East Brunswick Location</p>
            </div>
            <div className="contact-card-info">
              <CiLocationOn />
              <p>46 W Ferris St East Brunswick, NJ 08816</p>
            </div>
            <div className="contact-card-info">
              <CiMobile4 />
              <p>(732) 613-4488</p>
            </div>
            <div className="contact-card-info">
              <CiMail />
              <p>info@learningbridgeacademynj.com</p>
            </div>
          </div>
          <div className="contact-card">
            <div
              className="contact-card-image"
              style={{
                backgroundImage: `url(${ImageComingSoon})`,
              }}
            />
            <div className="contact-card-header">
              <p>Coming Soon</p>
            </div>
            <div className="contact-card-info">
              <CiLocationOn />
              <p>Coming Soon</p>
            </div>
            <div className="contact-card-info">
              <CiMobile4 />
              <p>(848) 466-0360</p>
            </div>
            <div className="contact-card-info">
              <CiMail />
              <p>info@learningbridgeacademynj.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
