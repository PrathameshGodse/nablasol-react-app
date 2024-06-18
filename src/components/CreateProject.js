import React, { useState } from "react";
import "../style/CreateProject.css";

const CreateProject = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({
    projectName: "",
    client: "",
    startDate: "",
    endDate: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    localStorage.setItem("createProjectData", JSON.stringify(formData));
    onNext(); 
  };

  const handleBack = () => {
    onBack();
  };

  return (
    <div id="create-project" className="container">
      <div className="header">
        <h2 className="title">Create a project</h2>
        <button className="close-button">&times;</button>
      </div>
      <div className="form-group">
        <label className="label">Project name</label>
        <input
          type="text"
          name="projectName"
          className="input"
          placeholder="Enter project name here"
          value={formData.projectName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="label">Client</label>
        <div className="input-group">
          <select
            name="client"
            className="input"
            value={formData.client}
            onChange={handleChange}
          >
            <option value="">Select a client</option>
            <option value="client1">Client 1</option>
            <option value="client2">Client 2</option>
          </select>
          <button className="secondary-button">New Client</button>
        </div>
      </div>
      <div className="form-group">
        <label className="label">Dates</label>
        <div className="input-group">
          <input
            type="date"
            name="startDate"
            className="input"
            value={formData.startDate}
            onChange={handleChange}
          />
          <input
            type="date"
            name="endDate"
            className="input"
            value={formData.endDate}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label className="label">Notes</label>
        <textarea
          name="notes"
          className="textarea"
          placeholder="Optional"
          value={formData.notes}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="footer">
        <button className="text-button" onClick={handleBack}>
          Back 
        </button>
        <button className="primary-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CreateProject;
