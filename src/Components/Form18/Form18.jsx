import React, { useState } from "react";

const Form18 = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    preferences: "", // Add preference field
  });

  const progressWidth = `${(currentStep / 3) * 100}%`;

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const validateStep = (step) => {
    let isValid = true;

    if (step === 1) {
      if (!formData.fullName || !formData.email || !formData.phone) {
        isValid = false;
        alert("Please fill all fields in Step 1.");
      }
    }

    if (step === 2) {
      if (formData.password !== formData.confirmPassword) {
        isValid = false;
        alert("Passwords do not match.");
      }
    }

    if (step === 3) {
      if (!formData.preferences) {
        isValid = false;
        alert("Please select a preference.");
      }
    }

    return isValid;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      alert("Form submitted successfully!");
      console.log("Submitted Data:", formData);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Account Setup Wizard</h1>
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {["Personal Info", "Account Details", "Preferences"].map((label, index) => (
                <span
                  key={index}
                  className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 ${
                    currentStep >= index + 1 ? "" : "opacity-50"
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
              <div
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 transition-all duration-500 ease-in-out"
                style={{ width: progressWidth }}
              ></div>
            </div>
          </div>

          <form id="multi-step-form" onSubmit={handleSubmit}>
            {/* Step 1 */}
            {currentStep === 1 && (
              <div>
                <div className="mb-6">
                  <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 2 */}
            {currentStep === 2 && (
              <div>
                <div className="mb-6">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 3 */}
            {currentStep === 3 && (
              <div>
                <div className="mb-6">
                  <label htmlFor="preferences" className="block mb-2 text-sm font-medium text-gray-900">
                    Preferences
                  </label>
                  <select
                    id="preferences"
                    value={formData.preferences}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                    required
                  >
                    <option value="" disabled>
                      Select your preference
                    </option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              <button
                type="button"
                className={`px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 ${
                  currentStep === 1 ? "hidden" : ""
                }`}
                onClick={prevStep}
              >
                Previous
              </button>
              <button
                type="button"
                className={`px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 ${
                  currentStep === 3 ? "hidden" : ""
                }`}
                onClick={nextStep}
              >
                Next
              </button>
              <button
                type="submit"
                className={`px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 ${
                  currentStep !== 3 ? "hidden" : ""
                }`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form18;
