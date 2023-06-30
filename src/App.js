import React, { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Map from './components/Map'

const App = () => {
  useEffect(() => {
    const legend = L.control({ position: 'bottomright' });

    legend.onAdd = () => {
      const div = L.DomUtil.create('div', 'legend');

      const legendItems = [
        { label: 'Legend Item 11', color: '#ff0000' },
        { label: 'Legend Item 2', color: '#00ff00' },
        { label: 'Legend Item 3', color: '#0000ff' },
      ];

      legendItems.forEach((item) => {
        const label = document.createElement('span');
        label.innerHTML = item.label;
        label.style.backgroundColor = item.color;
        div.appendChild(label);
      });

      return div;
    };

    const map = L.map('map');
    const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    });

    legend.addTo(map);
    tileLayer.addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div>
      <div id="map" style={{ height: '400px' }} />
      <Map />
    </div>
  );
};

export default App;
