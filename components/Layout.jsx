import { Map } from "../components/map/Map.jsx";


const Layout = ({ children }) => (
    <>
        <Map>
            {({ Marker, Popup }) => (
                // TODO: proper icon
                <Marker
                    position={[53.946, -1.042]}
                    icon={L.icon({
                        iconUrl:
                            "https://iconarchive.com/download/i110135/thesquid.ink/free-flat-sample/rubber-duck.ico",
                        iconSize: [40, 40],
                    })}
                >
                    <Popup>Longboi</Popup>
                </Marker>
            )}
        </Map>

        {children}
    </>

);

export default Layout;