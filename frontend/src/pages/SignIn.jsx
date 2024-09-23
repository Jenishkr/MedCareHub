import React from 'react';

const SignInPage = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left side (Sign in form) */}
      <div className="w-2/3 bg-white flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold text-purple-700 mb-6">Sign in to MedcareHub</h1>

        <div className="w-80">
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              <i className="fas fa-envelope text-purple-700"></i> Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Email"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600">
              <i className="fas fa-lock text-purple-700"></i> Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Password"
            />
          </div>

          {/* Forgot password */}
          <div className="text-right mb-6">
            <a href="#" className="text-sm text-purple-700 hover:underline">Forgot your password?</a>
          </div>

          {/* Sign In Button */}
          <button className="w-full py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition duration-300">
            Sign In
          </button>
        </div>
      </div>

      {/* Right side (Sign up prompt) */}
      <div className="w-1/2 bg-purple-700 text-white flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold mb-4">Hello, Friend!</h1>
        <p className="mb-6 text-center text-lg px-10">
          Enter your personal details and start your journey with us
        </p>
        <button className="px-8 py-2 bg-white text-purple-700 rounded-full hover:bg-gray-200 transition duration-300">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
