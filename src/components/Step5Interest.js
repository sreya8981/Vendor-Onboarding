import React from 'react';

function Step5Interest({ nextStep, prevStep, handleChange, data }) {
  return (
    <div className="step-container">
      <h2>Select Primary Area of Interest</h2>

      <select
        value={data.interest}
        onChange={(e) => handleChange('interest', e.target.value)}
      >
        <option value="">Select</option>
        <option value="Payments">Payments</option>
        <option value="Invoicing">Invoicing</option>
        <option value="Lending">Lending</option>
        <option value="Accounting">Accounting</option>
        <option value="Logistics">Logistics</option>
        <option value="Travel">Travel</option>
        <option value="Other">Other</option>
      </select>

      <div className="button-row">
        <button onClick={prevStep}>Back</button>
        <button disabled={!data.interest} onClick={nextStep}>Next</button>
      </div>
    </div>
  );
}

export default Step5Interest;


