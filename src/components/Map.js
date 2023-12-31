import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


const Map = () => {
    const [map, setMap] = useState(null);
    const [mapID, setMapID] = useState(1)
    const position = [38.0293, -78.4767]; // Initial position of the map marker over Charlottesville

   

  return (
    <MapContainer key={mapID} center={position} zoom={13} scrollWheelZoom={false} id='mapContainer'>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
    </MapContainer>
  );
};
        

export default Map;