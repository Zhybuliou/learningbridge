/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { animated, useSpring } from '@react-spring/web';
import './slider.css';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { useState } from 'react';
import kidOneImg from '../../assets/kid-1.png';
import Image1 from '../../assets/icon-paralax/rev_sliderkin1.png';
import Image2 from '../../assets/icon-paralax/rev_sliderkin2.png';
import Image3 from '../../assets/icon-paralax/rev_sliderkin3.png';
import Image4 from '../../assets/icon-paralax/rev_sliderkin4.png';
import Image5 from '../../assets/icon-paralax/rev_sliderkin5.png';
import Image6 from '../../assets/icon-paralax/rev_sliderkin6.png';
import Image7 from '../../assets/icon-paralax/rev_sliderkin7.png';
import Image9 from '../../assets/icon-paralax/rev_sliderkin8.png';
import Image10 from '../../assets/icon-paralax/rev_sliderkin9.png';
import Image11 from '../../assets/icon-paralax/rev_sliderkin10.png';

const ImageBG = [
  {
    url: Image1,
    alt: '1',
    time: 450,
    positionX: 400,
    positionY: 100,
    speed: -5,
  },
  {
    url: Image2,
    alt: '2',
    time: 550,
    positionX: 100,
    positionY: 400,
    speed: 5,
  },
  { url: Image3, alt: '3', time: 500, positionX: 40, positionY: 500, speed: 5 },
  {
    url: Image4,
    alt: '4',
    time: 400,
    positionX: 80,
    positionY: 600,
    speed: -8,
  },
  {
    url: Image5,
    alt: '5',
    time: 600,
    positionX: 300,
    positionY: 700,
    speed: 6,
  },
  {
    url: Image6,
    alt: '6',
    time: 700,
    positionX: 200,
    positionY: 800,
    speed: 7,
  },
  {
    url: Image7,
    alt: '7',
    time: 300,
    positionX: 250,
    positionY: 550,
    speed: -4,
  },
  {
    url: Image9,
    alt: '9',
    time: 900,
    positionX: 100,
    positionY: 800,
    speed: 5,
  },
  {
    url: Image10,
    alt: '10',
    time: 650,
    positionX: 180,
    positionY: 1200,
    speed: -3,
  },
  {
    url: Image11,
    alt: '11',
    time: 580,
    positionX: 40,
    positionY: 300,
    speed: 5,
  },
];

export default function SimpleSlider() {
  const [MousePosition, setMousePosition] = useState({
    left: 0,
    top: 0,
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMouseMove = (ev: any) => {
    setMousePosition({ left: ev.pageX, top: ev.pageY });
  };
  const FunStyle = (num: number) => {
    const styles = useSpring({
      from: {
        opacity: 0,
        y: 50,
      },
      to: {
        opacity: 1,
        y: 0,
      },
      config: {
        duration: 500,
      },
      delay: num,
    });

    return styles;
  };

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
          <div
            className="main-page-slide"
            onMouseMove={(ev) => handleMouseMove(ev)}
            onMouseLeave={() => setMousePosition({ left: 0, top: 0 })}
          >
            {ImageBG.map((el) => {
              return (
                <animated.div
                  className="parallax-image"
                  style={FunStyle(el.time)}
                  key={el.alt}
                >
                  <img
                    key={el.alt}
                    className="parallax-image"
                    style={{
                      top: el.positionX,
                      left: el.positionY,
                      transform: `translateX(${
                        (window.innerWidth - MousePosition.top * el.speed) / 100
                      }px) translateY(${
                        (window.innerHeight - MousePosition.left * el.speed) /
                        100
                      }px)`,
                    }}
                    src={el.url}
                    alt={el.alt}
                  />
                </animated.div>
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
          <div
            className="main-page-slide"
            onMouseMove={(ev) => handleMouseMove(ev)}
            onMouseLeave={() => setMousePosition({ left: 0, top: 0 })}
          >
            {ImageBG.map((el) => {
              return (
                <animated.div
                  className="parallax-image"
                  style={FunStyle(el.time)}
                  key={el.alt}
                >
                  <img
                    key={el.alt}
                    className="parallax-image"
                    style={{
                      top: el.positionX,
                      left: el.positionY,
                      transform: `translateX(${
                        (window.innerWidth - MousePosition.top * el.speed) / 100
                      }px) translateY(${
                        (window.innerHeight - MousePosition.left * el.speed) /
                        100
                      }px)`,
                    }}
                    src={el.url}
                    alt={el.alt}
                  />
                </animated.div>
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
        </Slider>
      </div>
    </div>
  );
}
