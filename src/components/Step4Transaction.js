import React from 'react';

function Step4Transaction({ nextStep, prevStep, handleChange, data }) {
  return (
    <div className="step-container">
      <h2>Select Expected Transaction Volume</h2>

      <select
        value={data.transaction}
        onChange={(e) => handleChange('transaction', e.target.value)}
      >
        <option value="">Select</option>
        <option value="less-than-10k">&lt;10k</option>
        <option value="10k–100k">10k–100k</option>
        <option value="100k–1M">100k–1M</option>
        <option value="1M+">1M+</option>
      </select>

      <div className="button-row">
        <button onClick={prevStep}>Back</button>
        <button disabled={!data.transaction} onClick={nextStep}>Next</button>
      </div>
    </div>
  );
}

export default Step4Transaction;

