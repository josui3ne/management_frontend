import React, { useState } from 'react';
import axios from 'axios';

const ExportButton = () => {
  const [loading, setLoading] = useState(false);

  const handleExport = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/employees');
      const employees = response.data;
      
      const csv = [
        ['Name', 'Email', 'Position', 'Salary', 'Created At'],
        ...employees.map(emp => [
          emp.name,
          emp.email,
          emp.position,
          emp.salary,
          new Date(emp.createdAt).toLocaleDateString()
        ])
      ].map(row => row.join(',')).join('\n');

      const blob = new Blob([csv], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `employees_${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error exporting data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleExport}
      disabled={loading}
      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
    >
      <span>{loading ? 'Exporting...' : 'Export CSV'}</span>
      <span>📥</span>
    </button>
  );
};

export default ExportButton;
