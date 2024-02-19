import { Route, Routes } from 'react-router-dom';
import StartPage from './pages/start/StartPage';
import HomePage from './pages/home/HomePage';
import HomePageLayout from './Layout/HomePageLayout';
import CurriculumPage from './pages/curriculum/CurriculumPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/freehold" element={<HomePageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/freehold/curriculum" element={<CurriculumPage />} />
        <Route path="/freehold/about" element={<CurriculumPage />} />
        <Route path="/freehold/calendar" element={<CurriculumPage />} />
        <Route path="/freehold/virtual" element={<CurriculumPage />} />
        <Route path="/freehold/contact" element={<CurriculumPage />} />
        <Route path="/freehold/*" element={<CurriculumPage />} />
      </Route>
    </Routes>
  );
}
