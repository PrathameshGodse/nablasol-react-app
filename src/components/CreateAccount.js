import React, { useState } from "react";
import "../style/CreateAccount.css";

const CreateAccount = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) newErrors.email = "Email is required";

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      localStorage.setItem("formData", JSON.stringify(formData));
      onNext(); 
    }
  };

  const handleBack = () => {
    onBack(); // 
  };

  return (
    <div className="create-account-container">
      <div className="create-account-box">
        <h1 className="title">Create New Account</h1>
        <div className="steps-indicator">
          <div className="step active">
            <div className="step-number">1</div>
            <p className="step-label active">Your Profile</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <p className="step-label">Business Information</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <p className="step-label">Additional Users</p>
          </div>
        </div>
        <div className="step-details">
          <h2 className="subtitle">Step 1</h2>
          <p className="subtitle-detail">Your Profile</p>
          <p className="description">
            Enter the login information for your account. You will be able to
            create additional users after registering.
          </p>
        </div>
        <form>
          <div className="form-grid">
            <div className="form-group">
              <label className="label">First Name*</label>
              <input
                type="text"
                name="firstName"
                placeholder="Input Your First Name"
                className="input"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              {errors.firstName && (
                <p className="error-text">{errors.firstName}</p>
              )}
            </div>
            <div className="form-group">
              <label className="label">Last Name*</label>
              <input
                type="text"
                name="lastName"
                placeholder="Input Your Last Name"
                className="input"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              {errors.lastName && (
                <p className="error-text">{errors.lastName}</p>
              )}
            </div>
            <div className="form-group">
              <label className="label">Email*</label>
              <input
                type="email"
                name="email"
                placeholder="Input Your Email"
                className="input"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label className="label">Phone Number*</label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Input Your Phone Number"
                className="input"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
              {errors.phoneNumber && (
                <p className="error-text">{errors.phoneNumber}</p>
              )}
            </div>
            <div className="form-group">
              <label className="label">Password*</label>
              <input
                type="password"
                name="password"
                placeholder="Create Password"
                className="input"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="label">Confirm Password*</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Your Password"
                className="input"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              {errors.confirmPassword && (
                <p className="error-text">{errors.confirmPassword}</p>
              )}
            </div>
          </div>
          <div className="form-footer">
            <button
              type="button"
              className="back-to-login"
              onClick={handleBack}
            >
              Back to Login
            </button>
            <button type="button" className="next-step" onClick={handleNext}>
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
