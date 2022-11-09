import "leaflet/dist/leaflet.css";
import * as ReactLeaflet from "react-leaflet";

const Map = ({ children }) => {

  return (
      <ReactLeaflet.MapContainer style={{ width: "100%", height: "500px" }} center={[53.946, -1.042]} zoom={15} scrollWheelZoom={true}>
        <ReactLeaflet.TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Render children: this uses the Higher-Order Component pattern as in https://github.com/colbyfayock/next-leaflet-starter */}
        {children(ReactLeaflet)}
      </ReactLeaflet.MapContainer>
  );
};

export default Map;