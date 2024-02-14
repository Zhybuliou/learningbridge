import Footer from '../../components/footer/Footer';
import Navbar from '../../components/header/nav/Navbar';
import './home-page.css';
import SimpleSlider from '../../components/slider/Slider';

export default function HomePage() {
  return (
    <div className="home-wrapper">
      <Navbar />
      <main>
        <SimpleSlider />
      </main>
      <Footer />
    </div>
  );
}
