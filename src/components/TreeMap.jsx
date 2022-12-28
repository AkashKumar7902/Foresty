import React, { useState, useRef, useEffect} from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const TreeMap = () => {

const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(77.9535); //replace with coordinates of trees
const [lat, setLat] = useState(28.6754); //replace with coordinates of trees
const [zoom, setZoom] = useState(17);

// localStorage.getItem('address');
const address = JSON.parse(localStorage.getItem('location'));
// JSON.parse(address)
console.log(address);
console.log(address.long);

useEffect(() => {
  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [address.long, address.lat],
    zoom: zoom
  });





  
});


  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  )
};

export default TreeMap