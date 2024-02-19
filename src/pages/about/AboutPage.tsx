import OurActivities from '../../components/gallery/OurActivities';
import PageTitle from '../../components/page-title/PageTitle';
import Teachers from '../../components/teachers/Teachers';
import Testimonials from '../../components/testimonials/Testimonials';
import WhoWeAre from '../../components/who-we-are/WhoWeAre';

export default function AboutPage() {
  return (
    <>
      <PageTitle titleName="About Us" />
      <WhoWeAre />
      <Testimonials />
      <Teachers />
      <OurActivities />
    </>
  );
}
