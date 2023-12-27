import homeimg from "../images/home.png";
import profileimg from "../images/profile.png";
import exploreimg from "../images/explore.png";
import statisticsimg from "../images/statistics.png";
import { Link } from "react-router-dom";
// import { IonIcon } from "@ionic/react";
import { useState } from "react";
import "../css/nav.css";

function Navbar() {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const items = [
    { imagePath: homeimg, text: "Home", path: "/" },
    { imagePath: profileimg, text: "Profile", path: "/profile" },
    { imagePath: exploreimg, text: "Explore", path: "/explore" },
    { imagePath: statisticsimg, text: "Statistics", path: "/statistics" },
  ];

  return (
    <div className="navigation">
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className={`list ${activeItem === index ? "active" : ""}`}
            onClick={() => handleItemClick(index)}
          >
            <Link to={item.path}>
              <span className="icon">
                <img src={item.imagePath} alt={item.text}></img>
              </span>
              <span className="text">{item.text}</span>
            </Link>
          </li>
        ))}
        <div className="indicator"></div>
      </ul>
    </div>
  );
}

export default Navbar;
