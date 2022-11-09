import "leaflet/dist/leaflet.css";
import * as ReactLeaflet from "react-leaflet";

/**
 * 
 * A map component that uses `react-leaflet`
 * 
 * Only works client-side due to the use of `window`: use `Map` instead to use dynamic loading with SSR disabled
 * 
 */
const ClientMap = ({ children, ...rest }) => {

  return (
      <ReactLeaflet.MapContainer style={{ width: "100%", height: "500px" }} center={[53.946, -1.042]} zoom={15} scrollWheelZoom={true} {...rest}>
        <ReactLeaflet.TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Render children: this uses the Higher-Order Component pattern as in https://github.com/colbyfayock/next-leaflet-starter */}
        {children(ReactLeaflet)}
      </ReactLeaflet.MapContainer>
  );
};

export default ClientMap;