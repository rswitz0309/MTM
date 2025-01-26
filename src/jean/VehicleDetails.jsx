import React from 'react';
import { useParams } from 'react-router-dom';

function VehicleDetails() {
  const { id } = useParams();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-3 mb-6">
          <i className="fas fa-truck text-blue-500 text-2xl"></i>
          <h2 className="text-2xl font-bold text-gray-800">Vehicle Details - ID: {id}</h2>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-600 border-b pb-2">
                Vehicle Information
              </h3>
              <div className="space-y-3">
                <p className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Status:</span>
                  <span className="text-green-600 font-semibold">Active</span>
                </p>
                <p className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Last Maintenance:</span>
                  <span className="text-blue-600">2024-02-15</span>
                </p>
                <p className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Next Maintenance Due:</span>
                  <span className="text-yellow-600">2024-03-15</span>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-600 border-b pb-2">
                Current Assignment
              </h3>
              <div className="space-y-3">
                <p className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Driver:</span>
                  <span className="text-blue-600">John Doe</span>
                </p>
                <p className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Route:</span>
                  <span className="text-blue-600">Montreal - Toronto</span>
                </p>
                <p className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">ETA:</span>
                  <span className="text-green-600">2h 30m</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleDetails; 