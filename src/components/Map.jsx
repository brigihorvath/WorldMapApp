import { useSearchParams, useNavigate } from "react-router-dom";
import styles from "./Map.module.css";

const Map = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h1>Map</h1>
      <div>
        Position: {lat}, {lng}
      </div>
      <button
        onClick={() => {
          setSearchParams({ lat: 23, lng: 24 });
        }}
      >
        Set latlong
      </button>
    </div>
  );
};

export default Map;
