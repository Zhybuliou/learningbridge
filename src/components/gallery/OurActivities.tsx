import './our-activities.css';
import { Gallery } from 'react-grid-gallery';

import ImageG1 from '../../assets/gallery/g-1.jpg';
import ImageG2 from '../../assets/gallery/g-2.jpg';
import ImageG3 from '../../assets/gallery/g-3.jpeg';
import ImageG4 from '../../assets/gallery/g-4.jpg';
import ImageG5 from '../../assets/gallery/g-5.jpg';
import ImageG6 from '../../assets/gallery/g-6.jpg';

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
];

export default function OurActivities() {
  return (
    <section>
      <div className="gallery">
        <div className="gallery-header">
          <p>Gallery</p>
          <h3>Our activities</h3>
        </div>
        <div className="gallery-content">
          <Gallery images={photos} enableImageSelection={false} />
        </div>
      </div>
    </section>
  );
}
