import React, { useState } from "react";
import "../style/SelectView.css"; 

const SelectView = ({ onNext, onBack }) => {
  const [selectedView, setSelectedView] = useState("");

  const handleNext = () => {
    if (selectedView) {
      onNext(); 
    }
  };

  const handleBack = () => {
    onBack(); 
  };

  const handleSelectView = (view) => {
    setSelectedView(view);
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
        <div
          className={`view-option ${selectedView === "list" ? "selected" : ""}`}
          onClick={() => handleSelectView("list")}
        >
          <img
            src="https://fonts.gstatic.com/s/i/materialicons/view_list/v6/24px.svg"
            alt="List view"
            className="view-image"
          />
          <span className="view-label">List</span>
        </div>
        <div
          className={`view-option ${
            selectedView === "board" ? "selected" : ""
          }`}
          onClick={() => handleSelectView("board")}
        >
          <img
            src="https://fonts.gstatic.com/s/i/materialicons/view_module/v6/24px.svg"
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
        <button
          className="next-button"
          onClick={handleNext}
          disabled={!selectedView}
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

export default SelectView;
