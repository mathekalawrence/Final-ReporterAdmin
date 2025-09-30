import React, { useState } from 'react';

const Attendants = () => {
  const [attendants, setAttendants] = useState([
    {
      id: 1,
      name: 'John Kamau',
      phone: '0712345678',
      location: 'CBD Parking',
      status: 'active',
      earnings: 'Ksh 15,200'
    },
    {
      id: 2,
      name: 'Sarah Mwangi',
      phone: '0723456789',
      location: 'Westlands',
      status: 'active',
      earnings: 'Ksh 12,800'
    },
    {
      id: 3,
      name: 'Mike Ochieng',
      phone: '0734567890',
      location: 'Karen Mall',
      status: 'pending',
      earnings: 'Ksh 0'
    }
  ]);

  const approveAttendant = (id) => {
    setAttendants(attendants.map(att => 
      att.id === id ? {...att, status: 'active'} : att
    ));
  };

  const suspendAttendant = (id) => {
    setAttendants(attendants.map(att => 
      att.id === id ? {...att, status: 'suspended'} : att
    ));
  };

  return (
    <div>
      <div className="page-header">
        <h1>Attendants Management</h1>
      </div>

      {/* Attendants Stats */}
      <div className="stats-row">
        <div className="stat-item">
          <h3>Total Attendants</h3>
          <p>{attendants.length}</p>
        </div>
        <div className="stat-item">
          <h3>Active</h3>
          <p>{attendants.filter(a => a.status === 'active').length}</p>
        </div>
        <div className="stat-item">
          <h3>Pending</h3>
          <p>{attendants.filter(a => a.status === 'pending').length}</p>
        </div>
      </div>

      {/* Attendants List */}
      <div className="attendants-list">
        {attendants.map(attendant => (
          <div key={attendant.id} className="attendant-card">
            <div className="attendant-info">
              <h3>{attendant.name}</h3>
              <p>📞 {attendant.phone}</p>
              <p>📍 {attendant.location}</p>
              <p>💰 {attendant.earnings}</p>
              <span className={`status-badge ${attendant.status}`}>
                {attendant.status}
              </span>
            </div>
            <div className="attendant-actions">
              {attendant.status === 'pending' && (
                <button 
                  className="btn-approve"
                  onClick={() => approveAttendant(attendant.id)}
                >
                  Approve
                </button>
              )}
              {attendant.status === 'active' && (
                <button 
                  className="btn-suspend"
                  onClick={() => suspendAttendant(attendant.id)}
                >
                  Suspend
                </button>
              )}
              <button className="btn-view">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attendants;