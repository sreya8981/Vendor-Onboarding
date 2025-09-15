import React from 'react';

function Dashboard({ data }) {
  return (
    <div className="step-container">
      <h2>Welcome, {data.companyName}!</h2>

      <div className="dashboard-cards">
       <div className="dashboard-card">
        <h3>Total Transactions</h3>
        <p>{data.transaction}</p>
      </div>

        <div className="dashboard-card">
          <h3>Gamification Points</h3>
          <p>+10</p>
        </div>
        <div className="dashboard-card">
          <h3>Badges Earned</h3>
          <p>Vendor Starter</p>
        </div>
      </div>

      
    </div>
  );
}

export default Dashboard;
