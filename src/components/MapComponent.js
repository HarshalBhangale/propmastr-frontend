// import React, { useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// const customIcon = new L.Icon({
// iconUrl: require('leaflet/dist/images/marker-icon.png'),
// iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
// shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// iconSize: [25, 41],
// iconAnchor: [12, 41],
// popupAnchor: [1, -34],
// shadowSize: [41, 41],
// });

// const RecenterAutomatically = ({ position }) => {
// const map = useMap();
// useEffect(() => {
// map.setView(position, map.getZoom());
// }, [map, position]); // Include map and position in dependency array
// return null;
// };

// const MapComponent = ({ position }) => {
// return (
// <div className="h-64 w-full">
//     <MapContainer center={position} zoom={13} className="h-full w-full">
//     <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//     />
//     <Marker position={position} icon={customIcon}>
//         <Popup>{`${position[0]}, ${position[1]}`}</Popup>
//     </Marker>
//     <RecenterAutomatically position={position} />
//     </MapContainer>
// </div>
// );
// };

// export default MapComponent;
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const RecenterAutomatically = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(position, map.getZoom());
  }, [map, position]);
  return null;
};

const MapComponent = ({ position }) => {
  return (
    <div className="h-64 w-full">
      <MapContainer center={position} zoom={13} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>{`${position[0]}, ${position[1]}`}</Popup>
        </Marker>
        <RecenterAutomatically position={position} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
    