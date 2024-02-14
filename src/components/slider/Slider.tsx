/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';

export default function SimpleSlider() {
  const settings = {
    swipeToSlide: true,
    dots: false,
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
            <h3>1</h3>
          </div>
          <div className="main-page-slide">
            <h3>2</h3>
          </div>
          <div className="main-page-slide">
            <h3>3</h3>
          </div>
          <div className="main-page-slide">
            <h3>4</h3>
          </div>
          <div className="main-page-slide">
            <h3>5</h3>
          </div>
          <div className="main-page-slide">
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}
