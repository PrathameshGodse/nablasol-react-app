import React, { useState } from "react";
import "../style/ProjectType.css";

const ProjectType = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({
    projectType: "",
    hourlyRateType: "",
    hourlyRate: "",
    budgetType: "",
    budgetAmount: "",
    budgetResets: false,
    emailAlerts: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleNext = () => {
    localStorage.setItem("projectTypeData", JSON.stringify(formData));
    onNext(); // Call the onNext function from props to move to the next step
  };

  const handleBack = () => {
    onBack(); // Call the onBack function from props to move back to the previous step
  };

  return (
    <div id="project-type" className="container">
      <div className="header">
        <h2 className="title">Project type</h2>
        <button className="close-button">&times;</button>
      </div>
      <p className="description">
        Don't panic — You can also customize these types in settings
      </p>
      <div className="button-group">
        <button
          className={`primary-button ${
            formData.projectType === "Time & Materials" ? "active" : ""
          }`}
          onClick={() =>
            setFormData({ ...formData, projectType: "Time & Materials" })
          }
        >
          Time & Materials
        </button>
        <button
          className={`secondary-button ${
            formData.projectType === "Fixed Fee" ? "active" : ""
          }`}
          onClick={() => setFormData({ ...formData, projectType: "Fixed Fee" })}
        >
          Fixed Fee
        </button>
        <button
          className={`secondary-button ${
            formData.projectType === "Non-Billable" ? "active" : ""
          }`}
          onClick={() =>
            setFormData({ ...formData, projectType: "Non-Billable" })
          }
        >
          Non-Billable
        </button>
      </div>
      <div className="form-group">
        <label className="label">Hourly</label>
        <div className="input-group">
          <select
            name="hourlyRateType"
            className="input"
            value={formData.hourlyRateType}
            onChange={handleChange}
          >
            <option value="">Project Hourly Rate</option>
            <option value="hourly">Hourly</option>
            <option value="monthly">Monthly</option>
          </select>
          <input
            type="text"
            name="hourlyRate"
            className="input"
            placeholder="₹ "
            value={formData.hourlyRate}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label className="label">Budget</label>
        <div className="input-group">
          <select
            name="budgetType"
            className="input"
            value={formData.budgetType}
            onChange={handleChange}
          >
            <option value="">Select Budget Type</option>
            <option value="hours">Hours per Person</option>
            <option value="monthly">Monthly Budget</option>
          </select>
          <input 
            type="text"
            name="budgetAmount"
            className="input"
            placeholder=""
            value={formData.budgetAmount}
            onChange={handleChange}
          />
        </div>
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="budgetResets"
              className="checkbox"
              checked={formData.budgetResets}
              onChange={handleChange}
            />
            <span className="checkbox-text">Budget resets every month</span>
          </label>
        </div>
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="emailAlerts"
              className="checkbox"
              checked={formData.emailAlerts}
              onChange={handleChange}
            />
            <span className="checkbox-text">
              Send email alerts if project exceeds
            </span>
          </label>
        </div>
      </div>
      <div className="footer">
        <button className="secondary-button" onClick={handleBack}>
          Back
        </button>
        <button className="primary-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectType;
