import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import Step1Avatar from './components/Step1Avatar';
import Step2Email from './components/Step2Email';
import Step3Employees from './components/Step3Employees';
import Step4Transaction from './components/Step4Transaction';
import Step5Interest from './components/Step5Interest';
import Step6ProfileInfo from './components/Step6ProfileInfo';
import Summary from './components/Summary';
import Dashboard from './components/Dashboard';
import './styles.css';

function App() {
  // Load saved step or start from 0
  const savedStep = parseInt(localStorage.getItem("step")) || 0;
  const [step, setStep] = useState(savedStep);

  // Load saved formData or empty defaults
  const savedData = JSON.parse(localStorage.getItem("formData")) || {
    avatar: '',
    businessEmail: '',
    employees: '',
    transactionVolume: '',
    primaryInterest: '',
    legalCompanyName: '',
    password: '',
  };
  const [formData, setFormData] = useState(savedData);

  // Save formData to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  // Save step to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("step", step);
  }, [step]);

  // Navigation functions
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(prev => (prev > 0 ? prev - 1 : prev));
  const handleChange = (input, value) => {
    setFormData({ ...formData, [input]: value });
  };

  // Reset function (optional, you can trigger this with a button)
  const resetProgress = () => {
    localStorage.removeItem("formData");
    localStorage.removeItem("step");
    setFormData({
      avatar: '',
      email: '',
      employees: '',
      transaction: '',
      interest: '',
      companyName: '',
      password: '',
    });
    setStep(0);
  };

  // Render steps
  switch (step) {
    case 0: return <LandingPage nextStep={nextStep} />;
    case 1: return <Step1Avatar nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} data={formData} />;
    case 2: return <Step2Email nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} data={formData} />;
    case 3: return <Step3Employees nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} data={formData} />;
    case 4: return <Step4Transaction nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} data={formData} />;
    case 5: return <Step5Interest nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} data={formData} />;
    case 6: return <Step6ProfileInfo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} data={formData} />;
    case 7: return <Summary nextStep={nextStep} prevStep={prevStep} data={formData} />;
    case 8: return (
      <div>
  <Dashboard data={formData} />
  <div className="reset-container">
    <button onClick={resetProgress} className="reset-button">
      🔄 Reset & Start Over
    </button>
  </div>
</div>

    );
    default: return <div>Invalid Step</div>;
  }
}

export default App;

