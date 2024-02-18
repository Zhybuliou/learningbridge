import Footer from '../../components/footer/Footer';
import Navbar from '../../components/header/nav/Navbar';
import './home-page.css';
import SimpleSlider from '../../components/slider/Slider';
import WhoWeAre from '../../components/who-we-are/WhoWeAre';
import Classes from '../../components/classes/Classes';
import Teachers from '../../components/teachers/Teachers';
import Testimonials from '../../components/testimonials/Testimonials';
import OurActivities from '../../components/gallery/OurActivities';

export default function HomePage() {
  return (
    <div className="home-wrapper">
      <Navbar />
      <main>
        <SimpleSlider />
        <WhoWeAre />
        <Classes />
        <Teachers />
        <Testimonials />
        <OurActivities />
      </main>
      <Footer />
    </div>
  );
}
