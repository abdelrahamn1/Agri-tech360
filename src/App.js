import Navbar from "./components/Navbar";
import About from "./components/About";
import Application from "./components/Application";
import Library from "./components/Library";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/application" element={<Application />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
