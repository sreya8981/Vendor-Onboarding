import React from 'react';

function LandingPage({ nextStep }) {
  return (
    <div className="step-container">
      <h1>Welcome!</h1>
      <h2>Create your vendor account</h2>
      
      <div className="centered-button">
        <button onClick={nextStep}>Get Started</button>
      </div>
    </div>
  );
}

export default LandingPage;

