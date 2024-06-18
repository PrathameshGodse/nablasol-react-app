// src/components/SelectView.js
import React from "react";
import "../style/SelectView.css"; // Import CSS file for SelectView component

const SelectView = ({ onNext, onBack }) => {
  const handleNext = () => {
    onNext(); // Call the onNext function from props to move to the next step
  };

  const handleBack = () => {
    onBack(); // Call the onBack function from props to move back to the previous step
  };
  return (
    <div className="card">
      <div className="header">
        <h2 className="title">Select a view</h2>
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
        You can also customize this view in settings
      </p>
      <div className="view-options">
        <div className="view-option">
          <img
            src="https://placehold.co/64x64"
            alt="List view"
            className="view-image"
          />
          <span className="view-label">List</span>
        </div>
        <div className="view-option selected">
          <img
            src="https://placehold.co/64x64"
            alt="Board view"
            className="view-image"
          />
          <span className="view-label">Board</span>
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

export default SelectView;
