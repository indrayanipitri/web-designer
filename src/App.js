import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import LandingPage from './Pages/LandingPage'

function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet />
      <Routes>
        <Route path='/' element={<LandingPage />}/>
      </Routes>
      
    </div>
  );
}

export default App;
