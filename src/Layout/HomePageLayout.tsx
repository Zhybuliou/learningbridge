import { Outlet } from 'react-router-dom';
import Navbar from '../components/header/nav/Navbar';
import Footer from '../components/footer/Footer';

export default function HomePageLayout() {
  return (
    <div className="home-wrapper">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
