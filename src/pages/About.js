import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">About Us</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              We are dedicated to providing comprehensive employee management solutions 
              that help businesses streamline their HR processes and improve workforce efficiency.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To empower organizations with modern, intuitive tools for managing their most 
              valuable asset - their people. We believe that effective employee management 
              is the foundation of business success.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What We Do</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide intuitive employee management interfaces</li>
              <li>Ensure data security and privacy</li>
              <li>Offer real-time access to employee information</li>
              <li>Support scalable solutions for growing businesses</li>
              <li>Deliver exceptional user experience</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Innovation</h3>
                <p className="text-blue-700">Continuously improving our solutions</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Reliability</h3>
                <p className="text-green-700">Dependable systems you can trust</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">Security</h3>
                <p className="text-purple-700">Protecting your sensitive data</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-900 mb-2">Customer Focus</h3>
                <p className="text-orange-700">Your success is our priority</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
