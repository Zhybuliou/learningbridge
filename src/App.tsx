import { Route, Routes } from 'react-router-dom';
import StartPage from './pages/start/StartPage';
import HomePage from './pages/home/HomePage';
import HomePageLayout from './Layout/HomePageLayout';
import CurriculumPage from './pages/curriculum/CurriculumPage';
import AboutPage from './pages/about/AboutPage';
import CalendarPage from './pages/calendar/CalendarPage';
import VirtualPage from './pages/virtual/VirtualPage';
import ContactPage from './pages/contact/ContactPage';
import Page404 from './pages/404/Page404';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/freehold" element={<HomePageLayout />} end>
        <Route index element={<HomePage />} />
        <Route path="/freehold/curriculum" element={<CurriculumPage />} />
        <Route path="/freehold/about" element={<AboutPage />} />
        <Route path="/freehold/calendar" element={<CalendarPage />} />
        <Route path="/freehold/virtual" element={<VirtualPage />} />
        <Route path="/freehold/contact" element={<ContactPage />} />
        <Route path="/freehold/*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}
