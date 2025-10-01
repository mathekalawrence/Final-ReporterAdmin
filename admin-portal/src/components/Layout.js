import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="app">
      <div className="sidebar">
        <div className="logo">
          <h2>🏢 ParkBest Admin</h2>
        </div>
        
        <nav className="nav">
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
          >
            📊 Dashboard
          </Link>
          <Link 
            to="/parking-spots" 
            className={location.pathname === '/parking-spots' ? 'nav-link active' : 'nav-link'}
          >
            🅿️ Parking Spots
          </Link>
          <Link 
            to="/attendants" 
            className={location.pathname === '/attendants' ? 'nav-link active' : 'nav-link'}
          >
            👥 Attendants
          </Link>
        </nav>
      </div>

      <div className="main-content">
        <header className="header">
          <h1>Admin Portal</h1>
          <div className="user-info">
            <span>Welcome, Admin 👋</span>
          </div>
        </header>
        
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;