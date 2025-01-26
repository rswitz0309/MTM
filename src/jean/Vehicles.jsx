import React, { useState } from "react";
import { Link } from "react-router-dom";

function Vehicles() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const vehicles = [
    {
      id: 40513272,
      driver: "John Doe",
      location: "Montreal",
      status: "On Duty",
      fuel: "75%",
    },
    {
      id: 40317095,
      driver: "Jane Smith",
      location: "Toronto",
      status: "In Maintenance",
      fuel: "60%",
    },
    {
      id: 45123212,
      driver: "Bob Brown",
      location: "Winnipeg",
      status: "Available",
      fuel: "80%",
    },
    {
      id: 45123213,
      driver: "Sarah Wilson",
      location: "Vancouver",
      status: "In Maintenance",
      fuel: "45%",
    },
    {
      id: 45123214,
      driver: "Mike Johnson",
      location: "Calgary",
      status: "On Duty",
      fuel: "90%",
    },
  ];

  const filteredVehicles = activeFilter === 'All' 
    ? vehicles 
    : vehicles.filter(vehicle => vehicle.status === activeFilter);

  const getStatusColor = (status) => {
    switch(status) {
      case 'On Duty':
        return 'text-green-400';
      case 'In Maintenance':
        return 'text-yellow-400';
      case 'Available':
        return 'text-blue-400';
      default:
        return '';
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-white">Vehicles</h2>
      <div className="flex justify-center gap-4 mb-6">
        {['All', 'On Duty', 'In Maintenance', 'Available'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-md transition-all duration-200 ${
              activeFilter === filter
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredVehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="bg-gray-800 shadow-lg rounded-lg p-4 border border-gray-700 hover:border-blue-500 transition-all"
          >
            <div className="flex items-center space-x-3">
              <i className="fas fa-truck text-blue-400 text-xl"></i>
              <h3 className="text-lg font-semibold text-gray-200">ID: {vehicle.id}</h3>
            </div>
            <div className="mt-4 space-y-2 text-gray-300">
              <p>
                <span className="text-blue-400 font-semibold">Driver:</span> {vehicle.driver}
              </p>
              <p>
                <span className="text-blue-400 font-semibold">Location:</span> {vehicle.location}
              </p>
              <p>
                <span className="text-blue-400 font-semibold">Status:</span>{' '}
                <span className={getStatusColor(vehicle.status)}>
                  {vehicle.status}
                </span>
              </p>
              <p>
                <span className="text-blue-400 font-semibold">Fuel Level:</span>{' '}
                <span className={`
                  ${parseInt(vehicle.fuel) > 70 ? 'text-green-400' : ''}
                  ${parseInt(vehicle.fuel) <= 70 && parseInt(vehicle.fuel) > 30 ? 'text-yellow-400' : ''}
                  ${parseInt(vehicle.fuel) <= 30 ? 'text-red-400' : ''}
                `}>
                  {vehicle.fuel}
                </span>
              </p>
            </div>
            <Link
              to={`/company/vehicle/${vehicle.id}`}
              className="block mt-4 bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vehicles; 