import Footer from '../../components/footer/Footer';
import Navbar from '../../components/header/nav/Navbar';
import './home-page.css';
import SimpleSlider from '../../components/slider/Slider';
import WhoWeAre from '../../components/who-we-are/WhoWeAre';

export default function HomePage() {
  return (
    <div className="home-wrapper">
      <Navbar />
      <main>
        <SimpleSlider />
        <WhoWeAre />
      </main>
      <Footer />
    </div>
  );
}
