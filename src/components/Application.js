import React, { useState } from "react";
import axios from "axios";
import "../css/application.css";
import ChatBot from "./ChatBot";
import Navbar from "./Navbar";

function Application() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setResult(null);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await axios.post(
        "https://684e-105-197-187-225.ngrok-free.app/classify",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoZXJ5b29AZ21haWwuY29tIiwiZXhwIjoxNzIwMTE0MTEyfQ.utwju-UuCVcFHQh2351056nCKeEMZgLHnJUmxwsQSFk",
          },
        }
      );
      setResult(response.data.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div
      className="application"
      style={{
        height: result ? "750px" : "742.5px",
      }}
    >
      <Navbar isActive="app" />
      <div
        className="text-application"
        style={{
          top: result ? "42%" : "57%",
        }}
      >
        <h1 style={{ padding: selectedFile ? "0" : "" }}>
          <span>Agri-tech360</span> Detector
        </h1>
        <div className="selected-image">
          {selectedFile && (
            <img src={URL.createObjectURL(selectedFile)} alt="Selected" />
          )}
        </div>
        <div
          className="custom-file-input"
          style={{
            transform: selectedFile ? "translateY(10px)" : "translateY(-20px)",
          }}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="file-input"
            id="fileInput"
          />
          <label htmlFor="fileInput" className="custom-button">
            Choose Image
          </label>
        </div>
        <button
          className="custom-button"
          onClick={handleUpload}
          style={{
            transform: selectedFile ? "translateY(10px)" : "translateY(-20px)",
          }}
        >
          Upload
        </button>
        {result && (
          <div
            className="result-box"
            style={{
              transform: selectedFile ? "translateY(-40px)" : "",
            }}
          >
            <h2>
              <span>Result:</span>
            </h2>
            <p>
              <span>Predictions:</span> {result.predictions}
            </p>
            <p>
              <span>Confidence:</span> {result.confidence}
            </p>
            <p>
              <span>Information:</span> {result.information}
            </p>
          </div>
        )}
      </div>

      <ChatBot />
    </div>
  );
}

export default Application;
