import Footer from '../../components/footer/Footer';
import Navbar from '../../components/header/nav/Navbar';
import ImageSlider from '../../components/slider/ImageSlider';
import './home-page.css';

import car1 from '../../assets/imgs/Jiraiya.png';
import car2 from '../../assets/imgs/Kakashi.png';
import car3 from '../../assets/imgs/Madara.png';
import car4 from '../../assets/imgs/Naruto.png';
import car5 from '../../assets/imgs/pain.png';

const IMAGES = [
  { url: car1, alt: 'Car One' },
  { url: car2, alt: 'Car Two' },
  { url: car3, alt: 'Car Three' },
  { url: car4, alt: 'Car Four' },
  { url: car5, alt: 'Car Five' },
];

export default function HomePage() {
  return (
    <div className="home-wrapper">
      <Navbar />
      <main>
        <ImageSlider images={IMAGES} />
      </main>
      <Footer />
    </div>
  );
}
