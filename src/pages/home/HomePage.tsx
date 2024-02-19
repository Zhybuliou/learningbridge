import './home-page.css';
import SimpleSlider from '../../components/slider/Slider';
import WhoWeAre from '../../components/who-we-are/WhoWeAre';
import Classes from '../../components/classes/Classes';
import Teachers from '../../components/teachers/Teachers';
import Testimonials from '../../components/testimonials/Testimonials';
import OurActivities from '../../components/gallery/OurActivities';

export default function HomePage() {
  return (
    <>
      <SimpleSlider />
      <WhoWeAre />
      <Classes />
      <Teachers />
      <Testimonials />
      <OurActivities />
    </>
  );
}
