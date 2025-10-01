import React, { useState, useEffect } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isLoading, setIsLoading] = useState(true);

  // Sample/dummy data
  const [parkingSpots, setParkingSpots] = useState([
    { id: 1, name: 'CBD Parking Complex', address: 'Moi Avenue, Nairobi CBD', rate: 60, availableSpots: 12, status: 'available' },
    { id: 2, name: 'Westlands Secure Parking', address: 'Mpaka Road, Westlands', rate: 80, availableSpots: 0, status: 'occupied' },
    { id: 3, name: 'Karen Shopping Center', address: 'Karen, Langata Road', rate: 50, availableSpots: 15, status: 'available' }
  ]);

  const [attendants, setAttendants] = useState([
    { id: 1, name: 'John Kamau', phone: '0712345678', location: 'CBD Parking', status: 'active', earnings: 'Ksh 15,200' },
    { id: 2, name: 'Sarah Mueni', phone: '0723456789', location: 'Westlands', status: 'active', earnings: 'Ksh 12,800' },
    { id: 3, name: 'Mike Ochieng', phone: '0734567890', location: 'Karen Mall', status: 'pending', earnings: 'Ksh 0' }
  ]);

  // Loading Simulation
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  // STYLES
  const styles = {
    // Layout
    app: { display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif' },
    sidebar: { width: '250px', background: '#1f2937', color: 'white', padding: '20px' },
    mainContent: { flex: 1, background: '#f3f4f6', display: 'flex', flexDirection: 'column' },
    header: { background: 'white', padding: '20px 30px', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    content: { padding: '30px', flex: 1 },
    
    // Navigation
    navButton: { display: 'block', width: '100%', padding: '12px 15px', marginBottom: '8px', background: 'transparent', border: 'none', color: '#d1d5db', textAlign: 'left', borderRadius: '8px', cursor: 'pointer', fontSize: '14px' },
    navButtonActive: { background: '#3b82f6', color: 'white' },
    
    // Cards
    card: { background: 'white', padding: '20px', borderRadius: '12px', marginBottom: '20px', border: '1px solid #e0e0e0', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' },
    
    // Stats
    statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' },
    statCard: { background: 'white', padding: '25px', borderRadius: '10px', border: '1px solid #e5e7eb', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' },
    
    // Loading
    loadingScreen: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#1f2937', color: 'white', flexDirection: 'column' },
    spinner: { width: '40px', height: '40px', border: '4px solid #ffffff', borderTop: '4px solid transparent', borderRadius: '50%', animation: 'spin 1s linear infinite', marginBottom: '20px' },
    
    // Buttons
    btnPrimary: { background: '#3b82f6', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: '500' },
    btnSuccess: { background: '#10b981', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' },
    btnDanger: { background: '#ef4444', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' },
    
    // Status badges
    statusBadge: { padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '500', display: 'inline-block' },
    statusAvailable: { background: '#d1fae5', color: '#065f46' },
    statusOccupied: { background: '#fee2e2', color: '#991b1b' },
    statusPending: { background: '#fef3c7', color: '#92400e' }
  };

  // Loading screen
  if (isLoading) {
    return (
      <div style={styles.loadingScreen}>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
        <div style={styles.spinner}></div>
        <h2>🏢 ParkBest Admin</h2>
        <p>Loading your dashboard...</p>
      </div>
    );
  }

  // 'RENDER PAGES'
  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard':
        return (
          <div>
            <h1 style={{marginBottom: '20px', color: '#1f2937'}}>📊 Dashboard Overview</h1>
            
            {/* Stats Grid */}
            <div style={styles.statsGrid}>
              <div style={styles.statCard}>
                <h3 style={{color: '#6b7280', fontSize: '14px', marginBottom: '10px'}}>Total Revenue</h3>
                <p style={{fontSize: '24px', fontWeight: 'bold', color: '#059669'}}>Ksh 195,890</p>
                <small style={{color: '#10b981'}}>↑ 12.5% from last month</small>
              </div>
              <div style={styles.statCard}>
                <h3 style={{color: '#6b7280', fontSize: '14px', marginBottom: '10px'}}>Active Bookings</h3>
                <p style={{fontSize: '24px', fontWeight: 'bold', color: '#3b82f6'}}>47</p>
                <small style={{color: '#3b82f6'}}>8 currently checked in</small>
              </div>
              <div style={styles.statCard}>
                <h3 style={{color: '#6b7280', fontSize: '14px', marginBottom: '10px'}}>Available Spots</h3>
                <p style={{fontSize: '24px', fontWeight: 'bold', color: '#8b5cf6'}}>128</p>
                <small style={{color: '#8b5cf6'}}>Across 15 locations</small>
              </div>
              <div style={styles.statCard}>
                <h3 style={{color: '#6b7280', fontSize: '14px', marginBottom: '10px'}}>Active Attendants</h3>
                <p style={{fontSize: '24px', fontWeight: 'bold', color: '#f59e0b'}}>23</p>
                <small style={{color: '#f59e0b'}}>3 pending approval</small>
              </div>
            </div>

            {/* Recent Activity/ (with placeholder data) */}
            <div style={styles.card}>
              <h3 style={{marginBottom: '15px', color: '#1f2937'}}>Recent Bookings</h3>
              <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#f8fafc', borderRadius: '6px'}}>
                  <div>
                    <strong>Muia Matheka</strong>
                    <p style={{margin: 0, color: '#6b7280'}}>CBD Parking Complex</p>
                  </div>
                  <div style={{textAlign: 'right'}}>
                    <strong style={{color: '#059669'}}>Ksh 300</strong>
                    <div style={{...styles.statusBadge, ...styles.statusAvailable}}>Active</div>
                  </div>
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#f8fafc', borderRadius: '6px'}}>
                  <div>
                    <strong>Joan Awinja</strong>
                    <p style={{margin: 0, color: '#6b7280'}}>Westlands Secure Parking</p>
                  </div>
                  <div style={{textAlign: 'right'}}>
                    <strong style={{color: '#059669'}}>Ksh 420.00</strong>
                    <div style={{...styles.statusBadge, ...styles.statusAvailable}}>Completed</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        );

      case 'parking':
        return (
          <div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
              <h1 style={{color: '#1f2937'}}>🅿️ Parking Spots Management</h1>
              <button style={styles.btnPrimary}>+ Add New Spot</button>
            </div>

            {parkingSpots.map(spot => (
              <div key={spot.id} style={styles.card}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                  <div style={{flex: 1}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
                      <h3 style={{margin: 0, color: '#1f2937'}}>{spot.name}</h3>
                      <div style={{...styles.statusBadge, ...(spot.status === 'available' ? styles.statusAvailable : styles.statusOccupied)}}>
                        {spot.status}
                      </div>
                    </div>
                    <p style={{margin: '5px 0', color: '#6b7280'}}>📍 {spot.address}</p>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px', marginTop: '15px'}}>
                      <div>
                        <strong style={{color: '#1f2937'}}>Rate:</strong>
                        <span style={{marginLeft: '5px', color: '#ef4444'}}>Ksh {spot.rate}/hour</span>
                      </div>
                      <div>
                        <strong style={{color: '#1f2937'}}>Available:</strong>
                        <span style={{marginLeft: '5px'}}>{spot.availableSpots} spots</span>
                      </div>
                    </div>
                  </div>
                  <div style={{display: 'flex', gap: '10px', marginLeft: '20px'}}>
                    <button style={styles.btnSuccess}>Edit</button>
                    <button style={styles.btnDanger}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'attendants':
        return (
          <div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
              <h1 style={{color: '#1f2937'}}>👥 Attendants Management</h1>
              <button style={styles.btnPrimary}>+ Register Attendant</button>
            </div>

            {/* Stats Row */}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', marginBottom: '30px'}}>
              <div style={styles.statCard}>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: '24px', fontWeight: 'bold', color: '#1f2937'}}>{attendants.length}</div>
                  <div style={{color: '#6b7280', fontSize: '14px'}}>Total Attendants</div>
                </div>
              </div>
              <div style={styles.statCard}>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: '24px', fontWeight: 'bold', color: '#10b981'}}>{attendants.filter(a => a.status === 'active').length}</div>
                  <div style={{color: '#6b7280', fontSize: '14px'}}>Active</div>
                </div>
              </div>
              <div style={styles.statCard}>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: '24px', fontWeight: 'bold', color: '#f59e0b'}}>{attendants.filter(a => a.status === 'pending').length}</div>
                  <div style={{color: '#6b7280', fontSize: '14px'}}>Pending</div>
                </div>
              </div>
            </div>

            {attendants.map(attendant => (
              <div key={attendant.id} style={styles.card}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                  <div style={{flex: 1}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
                      <h3 style={{margin: 0, color: '#1f2937'}}>{attendant.name}</h3>
                      <div style={{...styles.statusBadge, ...(attendant.status === 'active' ? styles.statusAvailable : styles.statusPending)}}>
                        {attendant.status}
                      </div>
                    </div>
                    <p style={{margin: '5px 0', color: '#6b7280'}}>📞 {attendant.phone}</p>
                    <p style={{margin: '5px 0', color: '#6b7280'}}>📍 {attendant.location}</p>
                    <p style={{margin: '5px 0', color: '#1f2937'}}>💰 {attendant.earnings}</p>
                  </div>
                  <div style={{display: 'flex', gap: '10px', marginLeft: '20px'}}>
                    {attendant.status === 'pending' && (
                      <button style={styles.btnSuccess}>Approve</button>
                    )}
                    {attendant.status === 'active' && (
                      <button style={{...styles.btnDanger, background: '#f59e0b'}}>Suspend</button>
                    )}
                    <button style={styles.btnPrimary}>View</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return <div>Select a page from the sidebar</div>;
    }
  };

  return (
    <div style={styles.app}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={{marginBottom: '30px'}}>
          <h2 style={{margin: 0, color: '#3b82f6'}}>🏢 ParkBest Admin</h2>
          <small style={{color: '#9ca3af'}}>ParkBest Parking Management System</small>
        </div>
        
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

      {/* Main Content */}
      <div style={styles.mainContent}>
        <header style={styles.header}>
          <div>
            <h1 style={{margin: 0, color: '#1f2937'}}>ParkBest Admin Portal</h1>
            <small style={{color: '#6b7280'}}>Parking solutions to the best </small>
          </div>
          <div style={{textAlign: 'right'}}>
            <div style={{fontWeight: '500', color: '#1f2937'}}>Welcome, Admin! 👋</div>
            <small style={{color: '#6b7280'}}>Last login: Today, 10:38 AM</small>
          </div>
        </header>
        
        <div style={styles.content}>
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default App;