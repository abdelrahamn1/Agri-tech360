import logo from "../asests/logo.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../css/navbar.css";
import Aos from "aos";
import "aos/dist/aos.css";
function Navbar() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <div className="nav-bar" data-aos="fade-down">
        <div className="container">
          <div className="logo" data-aos="zoom-in" data-aos-dely="500">
            <img src={logo} alt="logo"></img>
          </div>
          <div className="links" data-aos="fade-left" data-aos-delay="700">
            <ul>
              <li>
                <Link to="/" className="home">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/application">Application</Link>
              </li>
              <li>
                <Link to="/library">Library</Link>
              </li>
              <li>
                <a href="#faqs">FAQs</a>
              </li>
            </ul>
          </div>
          <button>
            <Link to="application">Try For Free</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
