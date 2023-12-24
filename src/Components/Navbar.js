import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import "../css/nav.css";
function Navbar() {
  return (
    <div className="nav-bar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/explore">Expolre</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/statistics">Statistics</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
