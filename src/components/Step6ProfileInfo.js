import React, { useState, useEffect } from 'react';

function Step6ProfileInfo({ nextStep, prevStep, handleChange, data }) {
  const [strength, setStrength] = useState('');

  const calculateStrength = (password) => {
    if (password.length === 0) return '';
    if (password.length < 6) return 'Weak';
    if (password.length < 10) return 'Medium';
    return 'Strong';
  };

  useEffect(() => {
    setStrength(calculateStrength(data.password));
  }, [data.password]);

  return (
    <div className="step-container">
      <h2>Enter Company Info</h2>

      <input
        type="text"
        placeholder="Legal Company Name"
        value={data.companyName}
        onChange={(e) => handleChange('companyName', e.target.value)}
      />

      <input
        type="password"
        placeholder="Password (min 8 chars)"
        value={data.password}
        onChange={(e) => handleChange('password', e.target.value)}
      />

      {strength && (
        <div className={`strength-meter ${strength.toLowerCase()}`}>
          Password Strength: {strength}
        </div>
      )}

      <div className="button-row">
        <button onClick={prevStep}>Back</button>
        <button disabled={!data.companyName || data.password.length < 8} onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Step6ProfileInfo;



