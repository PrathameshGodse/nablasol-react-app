// src/components/ManageProjects.js
import React from "react";
import "../style/ManageProjects.css"; // Import CSS file for ManageProjects component

const ManageProjects = ({ onNext, onBack }) => {
  const handleNext = () => {
    onNext(); // Call the onNext function from props to move to the next step
  };

  const handleBack = () => {
    onBack(); // Call the onBack function from props to move back to the previous step
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
        <div className="project-option">
          <img
            src="https://placehold.co/32x32"
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
        <div className="project-option">
          <img
            src="https://placehold.co/32x32"
            alt="Only Admin's"
            className="avatar"
          />
          <div className="project-info">
            <p className="project-name">Only Admin's</p>
            <p className="project-description">
              Only admins can manage everything.
            </p>
          </div>
        </div>
        <div className="project-option">
          <img
            src="https://placehold.co/32x32"
            alt="Only to Specific people"
            className="avatar"
          />
          <div className="project-info">
            <p className="project-name">Only to Specific people</p>
            <p className="project-description">
              Only some specific people can able to see it.
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <button className="back-button" onClick={handleBack}>
          Back
        </button>
        <button className="next-button" onClick={handleNext}>
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
