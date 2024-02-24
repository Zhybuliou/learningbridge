import './our-activities.css';
import { Gallery } from 'react-grid-gallery';

import ImageG1 from '../../assets/gallery/g-1.jpg';
import ImageG2 from '../../assets/gallery/g-2.jpg';
import ImageG3 from '../../assets/gallery/g-3.jpeg';
import ImageG4 from '../../assets/gallery/g-4.jpg';
import ImageG5 from '../../assets/gallery/g-5.jpg';
import ImageG6 from '../../assets/gallery/g-6.jpg';
import ImageG7 from '../../assets/gallery/g-7.jpg';
import ImageG8 from '../../assets/gallery/g-8.jpg';
import ImageG9 from '../../assets/gallery/g-9.jpg';
import FadeIn from '../animate/FadeIn';

const photos = [
  {
    src: ImageG1,
    width: 960,
    height: 720,
  },
  {
    src: ImageG2,
    width: 960,
    height: 960,
  },
  {
    src: ImageG4,
    width: 1920,
    height: 2560,
  },
  {
    src: ImageG6,
    width: 1600,
    height: 1200,
  },
  {
    src: ImageG3,
    width: 1920,
    height: 2560,
  },
  {
    src: ImageG5,
    width: 1920,
    height: 2560,
  },
  {
    src: ImageG7,
    width: 2560,
    height: 1920,
  },
  {
    src: ImageG8,
    width: 2560,
    height: 1198,
  },
  {
    src: ImageG9,
    width: 2560,
    height: 1442,
  },
];

export default function OurActivities() {
  return (
    <section>
      <div className="gallery">
        <FadeIn numberDelay={200}>
          <div className="gallery-header">
            <p>Gallery</p>
            <h3>Our activities</h3>
          </div>
        </FadeIn>
        <div className="gallery-content">
          <div className="gallery-wrapper">
            <FadeIn numberDelay={400}>
              <Gallery
                rowHeight={300}
                images={photos}
                enableImageSelection={false}
              />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
