import { Route, Routes } from 'react-router-dom';
import StartPage from './pages/start/StartPage';
import HomePage from './pages/home/HomePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/freehold" element={<HomePage />} />
    </Routes>
  );
}
