import PageTitle from '../../components/page-title/PageTitle';
import './contact.css';

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
              //  scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?q=mesco,heuvelstraat 95,tilburg, nederland&layer=tc&t=m&z=18&source=embed&output=svembed
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
          <div className="contact-form">Form</div>
        </div>
        <div className="contact-cards">
          <div className="contact-card">1</div>
          <div className="contact-card">2</div>
          <div className="contact-card">3</div>
        </div>
      </div>
    </>
  );
}
