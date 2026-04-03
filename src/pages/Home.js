import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Employee Management System
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Efficiently manage your workforce with our comprehensive solution
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-500 text-3xl mb-4">👥</div>
              <h3 className="text-lg font-semibold mb-2">Employee Management</h3>
              <p className="text-gray-600">
                Add, edit, and manage employee information with ease
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-green-500 text-3xl mb-4">📊</div>
              <h3 className="text-lg font-semibold mb-2">Real-time Data</h3>
              <p className="text-gray-600">
                Access up-to-date employee information instantly
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-purple-500 text-3xl mb-4">🔒</div>
              <h3 className="text-lg font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">
                Your data is protected with industry-standard security
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <a
              href="/employees"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
