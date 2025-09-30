import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ParkingSpots from './pages/ParkingSpots';
import Attendants from './pages/Attendants';
import Login from './pages/Login';
import Layout from './components/Layout';
import './styles.css';

function App() {
  // For now, we'll assume user is always logged in
  const isLoggedIn = true;

  return (
    <Router>
      {isLoggedIn ? (
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/parking-spots" element={<ParkingSpots />} />
            <Route path="/attendants" element={<Attendants />} />
          </Routes>
        </Layout>
      ) : (
        <Login />
      )}
    </Router>
  );
}

export default App;
