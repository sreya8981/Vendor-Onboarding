import React, { useState } from 'react';

function Step2Email({ nextStep, prevStep, handleChange, data }) {
  const [email, setEmail] = useState(data.email);
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    setTouched(true);

    handleChange('businessEmail', value);

    // Validation
    if (!value) {
      setError("*This field is required*");
    } else {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setError(regex.test(value) ? "" : "Invalid email");
    }
  };

  const handleNextClick = () => {
    setTouched(true);
    if (!email) {
      setError("*This field is required*");
      return;
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setError("*Invalid email");
      return;
    }

    setError("");
    nextStep();
  };

  return (
    <div className="step-container">
      <h2>Enter Business Email</h2>
      
      <input
        type="email"
        value={email}
        onChange={validateEmail}
        onBlur={() => setTouched(true)}
        placeholder="you@example.com"
      />

      {touched && error && (
        <p style={{ color: 'red', marginTop: '5px', fontWeight: 'bold' }}>{error}</p>
      )}

      {touched && !error && email.length > 0 && (
        <span style={{ color: 'green' }}>✓ Valid Email</span>
      )}

      {/* Use consistent button-row style for uniformity */}
      <div className="button-row">
        <button onClick={prevStep}>Back</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default Step2Email;


