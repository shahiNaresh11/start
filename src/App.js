import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Component/Login';

import Navigation from './Component/Navigation';
import Profile from './Pages/Profile';
import Logout from './Pages/Logout';
import DashboardPage from './Pages/DashboardPage';
import FamilyList from './Pages/FamilyList';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashboardPage />} />
          <Route path='/Dashboard' element={<DashboardPage />} />
          <Route path='/Navigation' element={<Navigation />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/family' element={<FamilyList />} />

          <Route path='/Logout' element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App;
