import React from "react";
import { useParams } from "react-router-dom";

function VehicleDetails() {
  const { id } = useParams(); // Get the ID from the URL

  // Sample data for vehicles
  const vehicles = [
    {
      id: 40513272,
      driver: "John Doe",
      location: "Montreal",
      status: "On Duty",
      weight: "4500kg",
      fuel: "75%",
      destination: "Toronto",
      load: "Electronics",
      tripsCompleted: 5,
    },
    {
      id: 40317095,
      driver: "Jane Smith",
      location: "Toronto",
      status: "In Maintenance",
      weight: "3500kg",
      fuel: "60%",
      destination: "Ottawa",
      load: "Furniture",
      tripsCompleted: 3,
    },
    {
      id: 45123212,
      driver: "Bob Brown",
      location: "Winnipeg",
      status: "Available",
      weight: "5500kg",
      fuel: "80%",
      destination: "Calgary",
      load: "Groceries",
      tripsCompleted: 8,
    },
  ];

  // Find the specific vehicle based on the ID
  const vehicle = vehicles.find((v) => v.id === Number(id));

  // Handle case where no matching vehicle is found
  if (!vehicle) {
    return <h2>Vehicle with ID {id} not found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Vehicle Details</h2>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        <li><strong>Driver:</strong> {vehicle.driver}</li>
        <li><strong>Location:</strong> {vehicle.location}</li>
        <li><strong>Status:</strong> {vehicle.status}</li>
        <li><strong>Weight:</strong> {vehicle.weight}</li>
        <li><strong>Fuel Level:</strong> {vehicle.fuel}</li>
        <li><strong>Load:</strong> {vehicle.load}</li>
        <li><strong>Destination:</strong> {vehicle.destination}</li>
        <li><strong>Trips Completed:</strong> {vehicle.tripsCompleted}</li>
      </ul>
    </div>
  );
}

export default VehicleDetails;
