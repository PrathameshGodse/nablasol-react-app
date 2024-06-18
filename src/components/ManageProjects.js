import React, { useState } from "react";
import "../style/ManageProjects.css"; // 

const ManageProjects = ({ onNext, onBack }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleNext = () => {
    if (selectedOption) {
      onNext(); 
    }
  };

  const handleBack = () => {
    onBack(); 
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="card">
      <div className="header">
        <h2 className="title">Who can manage projects</h2>
        <button className="action-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <p className="description">
        Don't panic — You can also customize this permission in settings
      </p>
      <div className="project-options">
        <div
          className={`project-option ${
            selectedOption === "everyone" ? "selected" : ""
          }`}
          onClick={() => handleSelectOption("everyone")}
        >
          <img
            src="https://fonts.gstatic.com/s/i/materialicons/person/v6/24px.svg"
            alt="Everyone"
            className="avatar"
          />
          <div className="project-info">
            <p className="project-name">Everyone</p>
            <p className="project-description">
              All users can now see it, but guests cannot access the projects.
            </p>
          </div>
        </div>
        <div
          className={`project-option ${
            selectedOption === "admins" ? "selected" : ""
          }`}
          onClick={() => handleSelectOption("admins")}
        >
          <img
            src="https://fonts.gstatic.com/s/i/materialicons/security/v6/24px.svg"
            alt="Only Admins"
            className="avatar"
          />
          <div className="project-info">
            <p className="project-name">Only Admins</p>
            <p className="project-description">
              Only admins can manage everything.
            </p>
          </div>
        </div>
        <div
          className={`project-option ${
            selectedOption === "specific" ? "selected" : ""
          }`}
          onClick={() => handleSelectOption("specific")}
        >
          <img
            src="https://fonts.gstatic.com/s/i/materialicons/people_outline/v6/24px.svg"
            alt="Specific People"
            className="avatar"
          />
          <div className="project-info">
            <p className="project-name">Specific People</p>
            <p className="project-description">
              Only some specific people can see it.
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <button className="back-button" onClick={handleBack}>
          Back
        </button>
        <button
          className="next-button"
          onClick={handleNext}
          disabled={!selectedOption}
        >
          Next
        </button>
      </div>
      <div className="loader">
        <span className="loader-dot"></span>
        <span className="loader-dot"></span>
        <span className="loader-dot active"></span>
        <span className="loader-dot"></span>
        <span className="loader-dot"></span>
      </div>
    </div>
  );
};

export default ManageProjects;
