import React, { useState } from "react";
import axios from "axios";
import "../css/application.css";
function Application() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("image", selectedFile);

      const response = await axios.post("YOUR_API_ENDPOINT", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setResult(response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="application">
      <div className="text-application">
        <h1 style={{ padding: selectedFile ? "0" : "" }}>
          <span>DetPlant</span> Detector
        </h1>
        <div className="selected-image">
          {selectedFile && (
            <img src={URL.createObjectURL(selectedFile)} alt="Selected" />
          )}
        </div>
        <div className="custom-file-input">
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
        <button className="custom-button" onClick={handleUpload}>
          Upload
        </button>
        {result && (
          <div>
            <h2>Result:</h2>
            <p>Disease: {result.disease}</p>
            <p>Confidence: {result.confidence}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Application;
