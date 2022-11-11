// dynamically import Map so that it is only imported on the client side (as leaflet doesn't support SSR)
import dynamic from "next/dynamic";
const ClientMap = dynamic(() => import("./ClientMap.jsx"), { ssr: false });

/**
 * 
 * Loads a map using client-side rendering only (see ClientMap.jsx)
 * 
 * Has same props as the `MapContainer` component in `react-leaflet`
 * 
 * Behaves as a higher-order component: supply a child component which takes all needed `react-leaflet` components as props
 * 
 */
export const Map = ({ children, ...rest  }) => (
    <ClientMap { ...rest }>{children}</ClientMap>
);