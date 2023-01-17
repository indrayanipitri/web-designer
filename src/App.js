import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';

import LandingPage from './Pages/LandingPage'
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div >
      <Outlet />
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      
    </div>
  );
}

export default App;
