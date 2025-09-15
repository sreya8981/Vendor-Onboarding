import React, { useState } from 'react';

function Step3Employees({ nextStep, prevStep, handleChange, data }) {
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  const handleSelect = (e) => {
    const value = e.target.value;
    handleChange('employees', value);
    setTouched(true);

    if (!value) {
      setError("This field is required");
    } else {
      setError("");
    }
  };

  const handleNextClick = () => {
    setTouched(true);
    if (!data.employees) {
      setError("This field is required");
      return;
    }
    setError("");
    nextStep();
  };

  return (
    <div className="step-container">
      <h2>Select Number of Employees</h2>
      <select
        value={data.employees}
        onChange={handleSelect}
        onBlur={() => setTouched(true)}
      >
        <option value="">Select</option>
        <option value="1–10">1–10</option>
        <option value="11–50">11–50</option>
        <option value="51–200">51–200</option>
        <option value="200+">200+</option>
      </select>

      {touched && error && (
        <p style={{ color: 'red', marginTop: '5px', fontWeight: 'bold' }}>{error}</p>
      )}

      {/* Use consistent button-row style for alignment and spacing */}
      <div className="button-row">
        <button onClick={prevStep}>Back</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default Step3Employees;

