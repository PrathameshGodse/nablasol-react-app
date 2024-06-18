import React, { useState } from "react";
import "./App.css";
import StepOne from "./components/CreateProject";
import StepTwo from "./components/ProjectType";
import StepThree from "./components/SelectView";
import StepFour from "./components/ManageProjects";
import StepFive from "./components/CreateAccount";
import StepSix from "./components/CreateAccountStep2";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleClickNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleClickBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleBackToLogin = () => {
    setCurrentStep(1); 
  };

  return (
    <div className="App">
      {currentStep === 1 && <StepOne onNext={handleClickNext} />}
      {currentStep === 2 && (
        <StepTwo onNext={handleClickNext} onBack={handleClickBack} />
      )}
      {currentStep === 3 && (
        <StepThree onNext={handleClickNext} onBack={handleClickBack} />
      )}
      {currentStep === 4 && (
        <StepFour onNext={handleClickNext} onBack={handleClickBack} />
      )}
      {currentStep === 5 && (
        <StepFive onNext={handleClickNext} onBack={handleClickBack} />
      )}
      {currentStep === 6 && (
        <StepSix
          onNext={handleClickNext}
          onBack={handleClickBack}
          onBackToLogin={handleBackToLogin}
        />
      )}
    </div>
  );
}

export default App;
