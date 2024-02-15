/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

export default function SimpleSlider() {
  const settings = {
    swipeToSlide: true,
    draggable: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    className: 'center',
    adaptiveHeight: true,
    cssEase: 'linear',
  };
  return (
    <div className="slider-container">
      <div className="main-page-slider">
        <Slider {...settings}>
          <div className="main-page-slide">
            <div className="main-page-slide-content">
              <p>Play, learn and grow</p>
              <h4>Creative kids world</h4>
              <Link to="/">
                Find Out More <FaRegArrowAltCircleRight />
              </Link>
            </div>
          </div>
          {/* <div className="main-page-slide">
            <h3>2</h3>
          </div>
          <div className="main-page-slide">
            <h3>3</h3>
          </div> */}
        </Slider>
      </div>
    </div>
  );
}
