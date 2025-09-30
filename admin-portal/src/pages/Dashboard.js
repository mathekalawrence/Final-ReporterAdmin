import React from 'react';

const Dashboard = () => {
  // Sample data - in real app, this comes from API
  const stats = [
    { title: 'Total Revenue', value: 'Ksh 245,890', color: 'green' },
    { title: 'Active Bookings', value: '47', color: 'blue' },
    { title: 'Available Spots', value: '128', color: 'purple' },
    { title: 'Active Attendants', value: '23', color: 'orange' }
  ];

  const recentBookings = [
    { id: 1, customer: 'John Doe', spot: 'CBD Parking', amount: 'Ksh 300', status: 'Active' },
    { id: 2, customer: 'Jane Smith', spot: 'Westlands', amount: 'Ksh 480', status: 'Completed' },
    { id: 3, customer: 'Mike Johnson', spot: 'Karen Mall', amount: 'Ksh 200', status: 'Active' }
  ];

  return (
    <div>
      <h1>Dashboard Overview</h1>
      
      {/* Stats Cards */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className={`stat-card ${stat.color}`}>
            <h3>{stat.title}</h3>
            <p>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Bookings */}
      <div className="section">
        <h2>Recent Bookings</h2>
        <div className="bookings-list">
          {recentBookings.map(booking => (
            <div key={booking.id} className="booking-card">
              <div>
                <strong>{booking.customer}</strong>
                <p>{booking.spot}</p>
              </div>
              <div>
                <span className="amount">{booking.amount}</span>
                <span className={`status ${booking.status.toLowerCase()}`}>
                  {booking.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;