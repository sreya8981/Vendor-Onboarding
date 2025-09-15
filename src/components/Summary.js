import React from 'react';

function Summary({ nextStep, prevStep, data }) {
  const handleFinish = () => {
    const jsonString = JSON.stringify(data);
    console.log('Final Form Data:', jsonString);

    // Optional: Save to localStorage
    localStorage.setItem('vendorProfile', jsonString);

    nextStep();  // Proceed to Dashboard
  };

  return (
    <div className="step-container">
      <h2>Profile Summary</h2>

      {/* Summary card with all entered details */}
      <div className="summary-card">
        <p><strong>Avatar:</strong> {data.avatar}</p>
        <p><strong>Business Email:</strong> {data.email}</p>
        <p><strong>Employees:</strong> {data.employees}</p>
        <p><strong>Transaction Volume:</strong> {data.transaction}</p>
        <p><strong>Area of Interest:</strong> {data.interest}</p>
        <p><strong>Company Name:</strong> {data.companyName}</p>
      </div>

      {/* Micro-copy */}
      <div className="completion-message" style={{ marginTop: '15px', color: '#4965e1', fontWeight: 'bold' }}>
        🎉 You unlocked the <strong>Vendor badge</strong>!  
        Profile Complete <span style={{ color: 'green' }}>+10 points</span>.
      </div>

      {/* CTA buttons */}
      <div className="button-row" style={{ marginTop: '20px' }}>
        <button onClick={prevStep}>Back</button>
        <button onClick={handleFinish} className="finish-button">
          Finish &amp; Go to Dashboard
        </button>
      </div>
    </div>
  );
}

export default Summary;




