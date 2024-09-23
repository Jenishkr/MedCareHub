import React, { useState } from "react";

function AuthPage() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleNameChange = (e) => {
    const value = e.target.value;
    // Regular expression to allow only alphabets
    const regex = /^[A-Za-z\s]*$/;
    if (regex.test(value)) {
      setName(value);
      setError(""); // Clear the error if valid
    } else {
      setError("Name should only contain alphabets.");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side: Welcome Back Section */}
      <div className="w-1/2 bg-purple-700 text-white flex flex-col items-center justify-center p-10">
        <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
        <p className="mb-8 text-center">
          To keep connected with us please login with your personal info
        </p>
        <button className="bg-transparent border border-white px-6 py-2 rounded-full hover:bg-white hover:text-purple-700 transition">
          SIGN IN
        </button>
      </div>

      {/* Right Side: Create Account Section */}
      <div className="w-10/12 bg-white flex flex-col justify-center items-center p-10">
        <h1 className="text-4xl font-bold mb-4 text-purple-700">Create Account</h1>
        <form className="w-3/4">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm text-purple-700 font-semibold"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-700"
              placeholder="Name"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm text-purple-700 font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-700"
              placeholder="Email"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm text-purple-700 font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-700"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-2 rounded-full hover:bg-purple-800 transition"
          >
            NEXT
          </button>
        </form>
      </div>
    </div>
  );
}

export default AuthPage;
