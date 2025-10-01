import React, { useState } from 'react';

const ParkingSpots = () => {
  const [spots] = useState([
    {
      id: 1,
      name: 'CBD Parking Complex',
      address: 'Moi Avenue, Nairobi CBD',
      rate: 60,
      availableSpots: 12,
      status: 'available'
    }
  ]);

  return (
    <div>
      <div className="page-header">
        <h1>Parking Spots Management</h1>
        <button className="btn-primary">
          + Add New Spot
        </button>
      </div>

      <div className="spots-list">
        {spots.map(spot => (
          <div key={spot.id} className="spot-card">
            <div className="spot-info">
              <h3>{spot.name}</h3>
              <p>📍 {spot.address}</p>
              <p>💰 Ksh {spot.rate}/hour</p>
              <p>🅿️ {spot.availableSpots} spots available</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParkingSpots;