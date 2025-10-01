import React, { useState } from 'react';

const ParkingSpots = () => {
  const [spots, setSpots] = useState([
    {
      id: 1,
      name: 'CBD Parking Complex',
      address: 'Moi Avenue, Nairobi CBD',
      rate: 60,
      capacity: 80,
      availableSpots: 12,
      status: 'available',
      utilization: 85,
      revenue: 45200,
      attendant: 'John Njoroge'
    },
    {
      id: 2,
      name: 'Westlands Secure Parking',
      address: 'Mpaka Road, Westlands',
      rate: 80,
      capacity: 40,
      availableSpots: 3,
      status: 'occupied',
      utilization: 92,
      revenue: 38700,
      attendant: 'Sarah Mueni'
    },
    {
      id: 3,
      name: 'Karen Shopping Center',
      address: 'Karen, Langata Road',
      rate: 50,
      capacity: 50,
      availableSpots: 18,
      status: 'available',
      utilization: 65,
      revenue: 28500,
      attendant: 'Ignatious Ochieng'
    }
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const styles = {
    container: { padding: '20px', fontFamily: 'Arial, sans-serif' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' },
    filters: { display: 'flex', gap: '15px', marginBottom: '20px', flexWrap: 'wrap' },
    input: { padding: '10px 15px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px' },
    select: { padding: '10px 15px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', background: 'white' },
    card: { background: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', marginBottom: '20px' },
    statusBadge: { padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '500', display: 'inline-block' },
    statusAvailable: { background: '#d1fae5', color: '#065f46' },
    statusOccupied: { background: '#fee2e2', color: '#991b1b' },
    btnPrimary: { background: '#3b82f6', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: '500' },
    btnSuccess: { background: '#10b981', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' },
    btnDanger: { background: '#ef4444', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }
  };

  const filteredSpots = spots.filter(spot => {
    const matchesSearch = spot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         spot.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || spot.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getUtilizationColor = (utilization) => {
    if (utilization > 85) return '#ef4444';
    if (utilization > 70) return '#f59e0b';
    return '#10b981';
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h1 style={{color: '#1f2937', marginBottom: '8px'}}>🅿️ Parking Spots Management</h1>
          <p style={{color: '#6b7280'}}>Manage all your parking locations and availability</p>
        </div>
        <button style={styles.btnPrimary} onClick={() => setShowAddModal(true)}>
          + Add New Spot
        </button>
      </div>

      {/* Filters */}
      <div style={styles.filters}>
        <input
          type="text"
          placeholder="Search parking spots..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{...styles.input, minWidth: '250px'}}
        />
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} style={styles.select}>
          <option value="all">All Status</option>
          <option value="available">Available</option>
          <option value="occupied">Occupied</option>
        </select>
        <div style={{flex: 1}}></div>
        <div style={{fontSize: '14px', color: '#6b7280'}}>
          Showing {filteredSpots.length} of {spots.length} spots
        </div>
      </div>

      {/* Parking Spots Grid */}
      <div>
        {filteredSpots.map(spot => (
          <div key={spot.id} style={styles.card}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <div style={{flex: 1}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
                  <h3 style={{margin: 0, color: '#1f2937', fontSize: '18px'}}>{spot.name}</h3>
                  <div style={{
                    ...styles.statusBadge,
                    ...(spot.status === 'available' ? styles.statusAvailable : styles.statusOccupied)
                  }}>
                    {spot.status === 'available' ? '🟢 Available' : '🔴 Occupied'}
                  </div>
                </div>
                
                <p style={{margin: '8px 0', color: '#6b7280'}}>📍 {spot.address}</p>
                
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginTop: '20px'}}>
                  <div>
                    <strong style={{color: '#1f2937'}}>Pricing:</strong>
                    <span style={{marginLeft: '8px', color: '#ef4444', fontWeight: 'bold'}}>Ksh {spot.rate}/hour</span>
                  </div>
                  <div>
                    <strong style={{color: '#1f2937'}}>Capacity:</strong>
                    <span style={{marginLeft: '8px'}}>{spot.availableSpots}/{spot.capacity} spots</span>
                  </div>
                  <div>
                    <strong style={{color: '#1f2937'}}>Utilization:</strong>
                    <span style={{marginLeft: '8px', color: getUtilizationColor(spot.utilization), fontWeight: 'bold'}}>
                      {spot.utilization}%
                    </span>
                  </div>
                  <div>
                    <strong style={{color: '#1f2937'}}>Revenue:</strong>
                    <span style={{marginLeft: '8px', color: '#059669', fontWeight: 'bold'}}>Ksh {spot.revenue.toLocaleString()}</span>
                  </div>
                </div>
                
                <div style={{marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #e5e7eb'}}>
                  <small style={{color: '#6b7280'}}>Attendant: {spot.attendant}</small>
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
    </div>
  );
};

export default ParkingSpots;