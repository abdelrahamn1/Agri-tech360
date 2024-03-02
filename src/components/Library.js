import plantsData from "../components/data.json";
import "../css/library.css";
import React, { useState, useEffect } from "react";
function Library() {
  const {
    plantName,
    plantShortDescription,
    plantMediumDescription,
    plantLongDescription,
    minimumdegrees,
    stateofTemperature,
    numberOfWater,
    plantCareInstruct,
  } = plantsData[0];
  return (
    <div className="library">
      <div className="container">
        {plantsData.map((plant, index) => (
          <div key={index} className="flex">
            <h2>{plant.plantName}</h2>
            <p>{plant.plantShortDescription}</p>
            <p>
              <strong> Description:</strong> {plant.plantMediumDescription}
            </p>
            <p>
              <strong>About:</strong> {plant.plantLongDescription}
            </p>
            <p>
              <strong>Minimum Temperature:</strong> {plant.minimumdegrees}
            </p>
            <p>
              <strong>Required Sunlight:</strong> {plant.stateofTemperature}
            </p>
            <p>
              <strong>Watering Needs:</strong> {plant.numberOfWater}
            </p>
            <p>
              <strong>Care Instructions:</strong> {plant.plantCareInstruct}
            </p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Library;
