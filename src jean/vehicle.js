import React from "react";
import { Link } from "react-router-dom";

function Vehicles() {
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
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Vehicles</h2>
      <div className="flex justify-center gap-4 mb-6">
        {/* Filters (All, On Duty, Available, etc.) */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">All</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">In Maintenance</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">On Duty</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">Available</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center">
              <div className="bg-blue-500 text-white rounded-full p-3">
              <i className="fas fa-truck text-white text-2xl"></i>

              </div>
              <h3 className="ml-4 text-lg font-semibold">ID: {vehicle.id}</h3>
            </div>
            <p className="mt-2">
              <strong>Driver:</strong> {vehicle.driver}
            </p>
            <p>
              <strong>Status:</strong> {vehicle.status}
            </p>
            <p>
              <strong>Fuel Level:</strong> {vehicle.fuel}
            </p>
            <Link
              to={`/vehicle/${vehicle.id}`}
              className="block mt-4 bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600"
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
