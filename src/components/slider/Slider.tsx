/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import kidOneImg from '../../assets/kid-1.png';
import Image1 from '../../assets/elem/1.png';
import Image2 from '../../assets/elem/2.png';
import Image3 from '../../assets/elem/3.png';
import Image4 from '../../assets/elem/4.png';
import Image5 from '../../assets/elem/5.png';
import Image6 from '../../assets/elem/6.png';
import Image7 from '../../assets/elem/7.png';
import Image9 from '../../assets/elem/9.png';
import Image10 from '../../assets/elem/10.png';
import Image12 from '../../assets/elem/12.png';

const ImageBG = [
  { url: Image1, alt: '1' },
  { url: Image2, alt: '2' },
  { url: Image3, alt: '3' },
  { url: Image4, alt: '4' },
  { url: Image5, alt: '5' },
  { url: Image6, alt: '6' },
  { url: Image7, alt: '7' },
  { url: Image9, alt: '9' },
  { url: Image10, alt: '10' },
  { url: Image12, alt: '12' },
];

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
            {ImageBG.map((el) => {
              return (
                <img
                  className="parallax-image"
                  key={el.alt}
                  src={el.url}
                  alt={el.alt}
                />
              );
            })}
            <div className="main-page-slide-content">
              <p>Play, learn and grow</p>
              <h4>Creative kids world</h4>
              <Link to="/">
                Find Out More <FaRegArrowAltCircleRight />
              </Link>
            </div>
            <div
              className="main-pages-slide-image"
              style={{
                backgroundImage: `url(${kidOneImg})`,
              }}
            />
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
