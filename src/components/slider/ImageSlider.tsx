import { useState } from 'react';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { FaCircle, FaDotCircle } from 'react-icons/fa';
import './image-slider.css';

type ImageSliderProps = {
  images: {
    url: string;
    alt: string;
  }[];
};

export default function ImageSlider({ images }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  return (
    <section
      aria-label="Image Slider"
      style={{ width: '100%', height: '400px', position: 'relative' }}
    >
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
      <div
        onTouchMove={showNextImage}
        style={{
          margin: '0 auto',
          maxWidth: '1440px',
          height: '100%',
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        {images.map(({ url, alt }, index) => (
          <div
            key={url}
            className="img-slider-block"
            style={{ translate: `${-100 * imageIndex}%` }}
          >
            <img
              src={url}
              alt={alt}
              aria-hidden={imageIndex !== index}
              //   className="img-slider-img"
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <IoIosArrowDropleft aria-hidden />
      </button>
      <button
        type="button"
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <IoIosArrowDropright aria-hidden />
      </button>
      <div
        style={{
          position: 'absolute',
          bottom: '.5rem',
          left: '50%',
          translate: '-50%',
          display: 'flex',
          gap: '.25rem',
        }}
      >
        {images.map((_, index) => (
          <button
            type="button"
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <FaDotCircle aria-hidden />
            ) : (
              <FaCircle aria-hidden />
            )}
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  );
}
