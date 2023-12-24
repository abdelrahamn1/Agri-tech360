import playicon from "../images/Play_Icon.png";
import headerimg from "../images/earth22.png";
import floatimg from "../images/earth.png";
import imgeupload from "../images/imageupload.png";
import getdignose from "../images/getdigonse.png";
import getresult from "../images/getthresult.png";
import leaing1 from "../images/leaing1.png";
import arrow from "../images/arrow.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/home.css";
import { useEffect } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
function Home() {
  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 800,
    });
  }, []);
  return (
    <>
      {/* Header */}
      <div className="header">
        <div className="container">
          <div className="header-text">
            <h2>
              Our Earth is <span>Precious</span>
            </h2>
            <p>
              DetPlant focuses on using advanced image recognition to swiftly
              and accurately detect leaf plant diseases for agricultural
              improvement.
            </p>
          </div>
          <div className="header-img">
            <img src={headerimg} alt="header-img"></img>
          </div>
        </div>
        <div className="video">
          <a href="#">
            <label>Watch demo video</label>
            <button id="video" className="video-btn">
              <img src={playicon} alt="playicon"></img>
            </button>
          </a>
        </div>
        <Link to="/model">
          <Button className="model-btn" name="Make Detction" />
        </Link>
      </div>
      {/* detction */}
      <div className="detection-section" data-aos="fade-up">
        <div className="detection-text">
          <h2 data-aos="fade-left">Heal Your Crop !</h2>
          <p>
            Contrary to popular belief not simply random It has root in a piece
            of classical Latin literature from 45BC, making it over
          </p>
        </div>
        <img className="float-img" src={floatimg} alt="earth"></img>
        <img
          className="farmer-img"
          src={leaing1}
          alt="farmer"
          data-aos="fade-left"
        ></img>
        <div className="deticon-images-flex">
          <div className="flex" data-aos="fade-right">
            <img src={imgeupload} alt="upload"></img>
            <p>Upload Image</p>
          </div>
          <img src={arrow} alt="arrow"></img>
          <div className="flex" data-aos="fade-right">
            <img src={getresult} alt="result"></img>
            <p>Get the result</p>
          </div>
          <img src={arrow} alt="arrow"></img>
          <div className="flex" data-aos="fade-right">
            <img src={getdignose} alt="disgnose"></img>
            <p>Get diagnosis</p>
          </div>
          <label htmlFor="upload" className="upload-btn" data-aos="fade-up">
            Upload Photo
          </label>
          <input
            id="upload"
            className="upload-input"
            type="file"
            accept="image/*"
          ></input>
        </div>
      </div>
    </>
  );
}

export default Home;

// const VideoPlayer = () => {
//     const openVideoInNewPage = () => {
//       const videoUrl = 'path_to_your_video.mp4'; // Replace with your video URL
//       window.open(videoUrl, '_blank');
//     };

//     return (
//       <div>
//         <h2>Video Player</h2>
//         <button onClick={openVideoInNewPage}>Open Video in New Page</button>
//       </div>
//     );
//   };

//   export default VideoPlayer;
