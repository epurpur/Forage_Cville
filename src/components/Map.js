import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const Map = () => {
  const position = [51.505, -0.09]; // Initial position of the map marker

  return (
    <MapContainer center={position} zoom={13} style={{ height: '100px', width: '150px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Tile layer source
        attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
      />
      <Marker position={position} />
    </MapContainer>
  );
};

export default Map;