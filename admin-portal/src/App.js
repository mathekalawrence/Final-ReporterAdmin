
//import React from 'react';

import React, { useState, useEffect, setIsLoading } from 'react'; 

function App() {
  // State to track which page you are on
  const [currentPage, setCurrentPage] = useState('dashboard');

  /*
    // Simulating loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second loading time
    
    return () => clearTimeout(timer);
  }, []);
  */

  // Styles for the App
  const styles = {
    app: {
      display: 'flex',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    },
    sidebar: {
      width: '250px',
      background: '#1f2937',
      color: 'white',
      padding: '20px'
    },
    mainContent: {
      flex: 1,
      background: '#f3f4f6',
      display: 'flex',
      flexDirection: 'column'
    },
    header: {
      background: 'white',
      padding: '20px 30px',
      borderBottom: '1px solid #e5e7eb'
    },
    content: {
      padding: '30px',
      flex: 1
    },
    navButton: {
      display: 'block',
      width: '100%',
      padding: '12px 15px',
      marginBottom: '8px',
      background: 'transparent',
      border: 'none',
      color: '#d1d5db',
      textAlign: 'left',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px'
    },
    navButtonActive: {
      background: '#3b82f6',
      color: 'white'
    },
    card: {
      background: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      marginBottom: '20px'
    }
  };

  // Function to render different pages
  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard':
        return (
          <div>
            <h1>📊 Dashboard</h1>
            <div style={styles.card}>
              <h3>Welcome to ParkBest Admin!</h3>
              <p>Total Revenue: <strong>Ksh 205,890</strong></p>
              <p>Active Bookings: <strong>47</strong></p>
              <p>Available Spots: <strong>128</strong></p>
            </div>
          </div>
        );
      
      case 'parking':
        return (
          <div>
            <h1>🅿️ Parking Spots</h1>
            <div style={styles.card}>
              <h3>Manage Parking Locations</h3>
              <p>CBD Parking Complex - 12 spots available</p>
              <p>Westlands Secure Parking - 0 spots available</p>
              <p>Karen Shopping Center - 15 spots available</p>
            </div>
          </div>
        );
      
      case 'attendants':
        return (
          <div>
            <h1>👥 Attendants</h1>
            <div style={styles.card}>
              <h3>Manage Attendants</h3>
              <p>John Kamau - Active</p>
              <p>Sarah Mueni - Active</p>
              <p>Mike Ochieng - Pending</p>
            </div>
          </div>
        );
      
      default:
        return <div>Select a page from the sidebar</div>;
    }
  };

  return (
    <div style={styles.app}>
      {/* Sidebar Navigation */}
      <div style={styles.sidebar}>
        <div style={{marginBottom: '30px'}}>
          <h2>🏢 ParkBest Admin</h2>
        </div>
        
        {/* Navigation Buttons */}
        <button 
          style={{
            ...styles.navButton,
            ...(currentPage === 'dashboard' ? styles.navButtonActive : {})
          }}
          onClick={() => setCurrentPage('dashboard')}
        >
          📊 Dashboard
        </button>
        
        <button 
          style={{
            ...styles.navButton,
            ...(currentPage === 'parking' ? styles.navButtonActive : {})
          }}
          onClick={() => setCurrentPage('parking')}
        >
          🅿️ Parking Spots
        </button>
        
        <button 
          style={{
            ...styles.navButton,
            ...(currentPage === 'attendants' ? styles.navButtonActive : {})
          }}
          onClick={() => setCurrentPage('attendants')}
        >
          👥 Attendants
        </button>
      </div>

      {/* Main Content Area */}
      <div style={styles.mainContent}>
        <header style={styles.header}>
          <h1>Admin Portal</h1>
        </header>
        
        <div style={styles.content}>
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default App;