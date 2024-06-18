import React, { useState, useEffect } from "react";
import "../style/CreateAccountStep2.css";

const CreateAccountStep2 = ({ onNext, onBack, onBackToLogin }) => {
  const [formData, setFormData] = useState({
    brandName: "",
    brandType: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    taxIdNumber: "",
  });

  const [errors, setErrors] = useState({});
  const [storedData, setStoredData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.brandName) newErrors.brandName = "Brand Name is required";
    if (!formData.brandType) newErrors.brandType = "Brand Type is required";
    if (!formData.streetAddress)
      newErrors.streetAddress = "Street Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.zipCode) newErrors.zipCode = "Zip Code is required";
    if (!formData.taxIdNumber)
      newErrors.taxIdNumber = "Tax ID Number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("formData", JSON.stringify(formData));
      onNext();
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    onBack();
  };

  const handleBackToLogin = (e) => {
    e.preventDefault();
    onBackToLogin();
  };

  const checkLocalStorage = () => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setStoredData(JSON.parse(savedData));
    }
  };

  useEffect(() => {
    checkLocalStorage();
  }, []);

  return (
    <div className="min-height-screen gradient-bg flex-center">
      <div className="container">
        <div className="header">
          <h1 className="title">Create New Account</h1>
          <a href="#" className="contact-link">
            Contact Us
          </a>
        </div>
        <div className="steps">
          <div className="step active">
            <div className="step-number">1</div>
            <span className="step-title">Your Profile</span>
          </div>
          <div className="step active">
            <div className="step-number">2</div>
            <span className="step-title">Business Information</span>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <span className="step-title">Additional Users</span>
          </div>
        </div>
        <h2 className="subtitle">Step 2</h2>
        <p className="description">
          Please, enter information about your company.
        </p>
        <form onSubmit={handleNext}>
          <div className="form-section">
            <h3 className="section-title">GENERAL INFORMATION</h3>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Brand Name*</label>
                <input
                  type="text"
                  name="brandName"
                  className="form-input"
                  placeholder="Input Your Brand Name"
                  value={formData.brandName}
                  onChange={handleChange}
                />
                {errors.brandName && (
                  <p className="error-text">{errors.brandName}</p>
                )}
              </div>
              <div className="form-group">
                <label className="form-label">Brand Type*</label>
                <select
                  name="brandType"
                  className="form-input"
                  value={formData.brandType}
                  onChange={handleChange}
                >
                  <option value="">Select Type of Brand</option>
                  <option value="type1">Type 1</option>
                  <option value="type2">Type 2</option>
                </select>
                {errors.brandType && (
                  <p className="error-text">{errors.brandType}</p>
                )}
              </div>
              <div className="form-group">
                <label className="form-label">Street Address*</label>
                <input
                  type="text"
                  name="streetAddress"
                  className="form-input"
                  placeholder="Input Your Street Address"
                  value={formData.streetAddress}
                  onChange={handleChange}
                />
                {errors.streetAddress && (
                  <p className="error-text">{errors.streetAddress}</p>
                )}
              </div>
              <div className="form-group">
                <label className="form-label">City*</label>
                <input
                  type="text"
                  name="city"
                  className="form-input"
                  placeholder="Input City"
                  value={formData.city}
                  onChange={handleChange}
                />
                {errors.city && <p className="error-text">{errors.city}</p>}
              </div>
              <div className="form-group">
                <label className="form-label">Zip Code*</label>
                <input
                  type="text"
                  name="zipCode"
                  className="form-input"
                  placeholder="Input Zip Code"
                  value={formData.zipCode}
                  onChange={handleChange}
                />
                {errors.zipCode && (
                  <p className="error-text">{errors.zipCode}</p>
                )}
              </div>
              <div className="form-group">
                <label className="form-label">Tax ID Number*</label>
                <input
                  type="text"
                  name="taxIdNumber"
                  className="form-input"
                  placeholder="Input Tax ID Number"
                  value={formData.taxIdNumber}
                  onChange={handleChange}
                />
                {errors.taxIdNumber && (
                  <p className="error-text">{errors.taxIdNumber}</p>
                )}
              </div>
            </div>
          </div>
          <div className="footer">
            <a href="#" className="footer-link" onClick={handleBackToLogin}>
              Back to Login
            </a>
            <div className="footer-buttons">
              <button
                type="button"
                className="previous-button"
                onClick={handleBack}
              >
                Previous Step
              </button>
              <button type="submit" className="next-button">
                Next Step
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountStep2;
