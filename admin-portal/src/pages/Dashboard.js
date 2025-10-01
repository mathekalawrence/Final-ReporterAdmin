import React from 'react';

const Dashboard = () => {
  const stats = [
    { title: 'Total Revenue', value: 'Ksh 245,890', color: 'green' },
    { title: 'Active Bookings', value: '47', color: 'blue' },
    { title: 'Available Spots', value: '128', color: 'purple' },
    { title: 'Active Attendants', value: '23', color: 'orange' }
  ];

  return (
    <div>
      <h1>Dashboard Overview</h1>
      
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className={`stat-card ${stat.color}`}>
            <h3>{stat.title}</h3>
            <p>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="section">
        <h2>Recent Activity</h2>
        <p>Welcome to your admin dashboard!</p>
      </div>
    </div>
  );
};

export default Dashboard;