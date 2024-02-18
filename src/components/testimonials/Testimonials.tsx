/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick';
import './testimonials.css';
import ImageQuotation from '../../assets/quotation.png';

export default function Testimonials() {
  const settings = {
    swipeToSlide: true,
    draggable: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    className: 'center',
    adaptiveHeight: true,
    // cssEase: 'linear',
  };
  return (
    <section className="testimonials-wrapper">
      <div className="testimonials">
        <div className="testimonials-header">
          <p>Testimonials</p>
          <h3>What parents say</h3>
        </div>
        <Slider {...settings}>
          <div>
            <div
              className="quotation-card"
              style={{ backgroundImage: `url(${ImageQuotation})` }}
            >
              <p>
                {`We were treated like royalty. I can't say enough about
                school. Man, this thing is getting better and better as I learn
                more about it. Keep up the excellent work.`}
              </p>
              <h3>Joscelin K.</h3>
              <h6>Parents</h6>
            </div>
          </div>
          <div>
            <div
              className="quotation-card"
              style={{ backgroundImage: `url(${ImageQuotation})` }}
            >
              <p>
                {`School is the real deal! I love your system. It really saves me
                time and effort. School is exactly what our business has been
                lacking. School was the best investment I ever made. Thank You!`}
              </p>
              <h3>Nickie U.</h3>
              <h6>Parents</h6>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
