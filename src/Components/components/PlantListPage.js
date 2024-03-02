import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom to navigate to the details page

const PlantListPage = ({ plants }) => {
  return (
    <div>
      <h1>Plant List</h1>
      <ul>
        {plants.map((plant, index) => (
          <li key={index}>
            <Link to={`/plants/${index}`}>{plant.plantName}</Link>:{" "}
            {plant.plantShortDescription}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlantListPage;
