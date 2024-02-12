import { Route, Routes } from 'react-router-dom';
import StartPage from './pages/start/StartPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
    </Routes>
  );
}
