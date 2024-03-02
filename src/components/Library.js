import plantsData from "../components/data.json";
import "../css/library.css";
function Library() {
  return (
    <div className="library">
      <div className="container">
        {plantsData.map((plant) => (
          <div className="flex">
            <li key={plant.id}>
              <div>
                <h2>{plant.common_name}</h2>
                <p>Scientific Name: {plant.scientific_name}</p>
                <p>Family: {plant.family}</p>
              </div>
              <img src={plant.image_url} alt={plant.common_name} />
            </li>
            <hr></hr>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Library;
