import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import Expolre from "./Components/Explore";
import Statistics from "./Components/Statistics";
import Home from "./Components/Home";
import Model from "./Components/Model";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<Expolre />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/model" element={<Model />} />
      </Routes>
    </div>
  );
}

export default App;
