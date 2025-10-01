import React from 'react';

function App() {
  return (
    <div style={{
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      background: '#f3f4f6',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#1f2937' }}>🎉 ParkNBO Admin Portal</h1>
      <p>If you can see this, everything is working!</p>
      
      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '8px',
        marginTop: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h2>Quick Navigation</h2>
        <button style={{
          padding: '10px 20px',
          margin: '5px',
          background: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}>
          Dashboard
        </button>
        <button style={{
          padding: '10px 20px',
          margin: '5px',
          background: '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}>
          Parking Spots
        </button>
        <button style={{
          padding: '10px 20px',
          margin: '5px',
          background: '#f59e0b',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}>
          Attendants
        </button>
      </div>
    </div>
  );
}

export default App;