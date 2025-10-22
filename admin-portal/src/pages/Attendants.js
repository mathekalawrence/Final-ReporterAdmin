import React, { useState } from 'react';

const Attendants = () => {
  const [attendants] = useState([
    {
      id: 1,
      name: 'John Maina',
      phone: '0700679901',
      location: 'CBD Parking',
      status: 'active',
      earnings: 'Ksh 6,200'
    },

      {
      id: 3,
      name: 'Mary Nyaboke',
      phone: '0111111592',
      location: 'CBD Parking',
      status: 'active',
      earnings: 'Ksh 11,300'
    },

    {
      id: 5,
      name: 'Mutisya Kariuki',
      location: 'Thika Town',
      Address: 'kariuki@gmail.com',
      contact: '0714999911',
      status: 'inactive',
      earnings: 'N/A'
    }


  ]);

  return (
    <div>
      <div className="page-header">
        <h1>Attendants Management</h1>
      </div>

      <div className="attendants-list">
        {attendants.map(attendant => (
          <div key={attendant.id} className="attendant-card">
            <div className="attendant-info">
              <h3>{attendant.name}</h3>
              <p>📞 {attendant.phone}</p>
              <p>📍 {attendant.location}</p>
              <p>💰 {attendant.earnings}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attendants;