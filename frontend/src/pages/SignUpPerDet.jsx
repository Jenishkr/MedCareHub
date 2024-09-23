import React, { useState } from 'react';

function App() {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [ageError, setAgeError] = useState('');
  const [weightError, setWeightError] = useState('');

  // Function to handle age input, allowing only digits
  const handleAgeChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9]*$/; // Only digits
    if (regex.test(value)) {
      setAge(value);
      setAgeError('');
    } else {
      setAgeError('Age should only contain digits.');
    }
  };

  // Function to handle weight input, allowing only digits and one dot
  const handleWeightChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9]*\.?[0-9]*$/; // Allows digits and one dot
    if (regex.test(value)) {
      setWeight(value);
      setWeightError('');
    } else {
      setWeightError('Weight should contain only digits and a decimal point.');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section - Sign In */}
      <div className="w-1/2 bg-purple-600 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
        <p className="mb-8">To keep connected with us please login with your personal info</p>
        <button className="bg-white text-purple-600 px-8 py-2 rounded-full hover:bg-gray-100">
          SIGN IN
        </button>
      </div>

      {/* Right Section - Create Account */}
      <div className="w-2/3 bg-white flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-8 text-purple-600">Create Account</h1>

        {/* Form */}
        <div className="w-1/2 space-y-4">
          {/* Age input with validation */}
          <input
            type="text"
            placeholder="Age"
            value={age}
            onChange={handleAgeChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          {ageError && <p className="text-red-500 text-sm">{ageError}</p>}

          {/* Gender selection */}
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="" disabled selected>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="prefer-not-to-say">Prefer not to Say</option>
          </select>

          {/* Blood Group selection */}
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="" disabled selected>Select Blood Group</option>
            <option value="A+">A positive (A+)</option>
            <option value="A-">A negative (A-)</option>
            <option value="B+">B positive (B+)</option>
            <option value="B-">B negative (B-)</option>
            <option value="O+">O positive (O+)</option>
            <option value="O-">O negative (O-)</option>
            <option value="AB+">AB positive (AB+)</option>
            <option value="AB-">AB negative (AB-)</option>
          </select>

          {/* Weight input with validation */}
          <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-purple-600">
            <input
              type="text"
              placeholder="Weight"
              value={weight}
              onChange={handleWeightChange}
              className="w-full px-4 py-2 focus:outline-none"
            />
            <span className="pr-4 text-gray-500">Kg</span>
          </div>
          {weightError && <p className="text-red-500 text-sm">{weightError}</p>}
        </div>

        <button className="mt-8 bg-purple-600 text-white px-8 py-2 rounded-full hover:bg-purple-700">
          SIGN UP
        </button>
      </div>
    </div>
  );
}

export default App;
