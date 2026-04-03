import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-blue-500 text-4xl mb-4">👤</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Employee Profiles</h3>
            <p className="text-gray-600 mb-4">
              Create and manage comprehensive employee profiles with all essential information 
              including personal details, job information, and performance records.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Personal information management</li>
              <li>• Job history tracking</li>
              <li>• Document storage</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-green-500 text-4xl mb-4">📈</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Tracking</h3>
            <p className="text-gray-600 mb-4">
              Monitor and evaluate employee performance with comprehensive tracking tools 
              and analytics to help your team grow and succeed.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Performance metrics</li>
              <li>• Goal setting</li>
              <li>• Progress monitoring</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-purple-500 text-4xl mb-4">📅</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Attendance Management</h3>
            <p className="text-gray-600 mb-4">
              Track employee attendance, manage leave requests, and generate reports 
              to ensure optimal workforce management.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Time tracking</li>
              <li>• Leave management</li>
              <li>• Attendance reports</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-orange-500 text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Payroll Integration</h3>
            <p className="text-gray-600 mb-4">
              Seamless integration with payroll systems to ensure accurate and timely 
              compensation for all employees.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Salary management</li>
              <li>• Benefits tracking</li>
              <li>• Tax calculations</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-red-500 text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Training & Development</h3>
            <p className="text-gray-600 mb-4">
              Manage employee training programs, track skill development, and create 
              personalized learning paths for career growth.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Course management</li>
              <li>• Skill tracking</li>
              <li>• Certification records</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-indigo-500 text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics & Reports</h3>
            <p className="text-gray-600 mb-4">
              Generate comprehensive reports and gain insights into workforce trends 
              with advanced analytics and visualization tools.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Custom reports</li>
              <li>• Data visualization</li>
              <li>• Trend analysis</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-600 mb-6">
            We can tailor our services to meet your specific business requirements. 
            Contact us to discuss your unique needs.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
