import React, { useState } from 'react';

function Step1Avatar({ nextStep, prevStep, handleChange, data }) {
  const [selected, setSelected] = useState(data.avatar);

  const selectAvatar = (avatar) => {
    setSelected(avatar);
    handleChange('avatar', avatar);
  };

  return (
    <div className="step-container">
      <h2>Select Your Avatar</h2>

      <div className="avatar-options">
        {['Traveling', 'Logistics', 'Finances'].map((avatar) => (
          <div
            key={avatar}
            className={`avatar-card ${selected === avatar ? 'selected' : ''}`}
            onClick={() => selectAvatar(avatar)}
          >
            {avatar}
            {selected === avatar && <span className="badge">Selected</span>}
          </div>
        ))}
      </div>

      {selected && (
        <div className="avatar-badge-unlocked">
          🎉 Avatar Badge Unlocked!
        </div>
      )}

      {/* Back and Next buttons side by side */}
      <div className="button-group" style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={prevStep} className="back-button">
           Back
        </button>

        <button disabled={!selected} onClick={nextStep} className="next-button">
          Next 
        </button>
      </div>
    </div>
  );
}

export default Step1Avatar;


