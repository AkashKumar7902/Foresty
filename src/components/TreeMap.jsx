import React, { useState, useRef, useEffect} from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const TreeMap = () => {

const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(77.7535); //replace with coordinates of trees
const [lat, setLat] = useState(28.6754); //replace with coordinates of trees
const [zoom, setZoom] = useState(17);

localStorage.getItem('address');
const address = localStorage.getItem('address');
  console.log(address);

useEffect(() => {
  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [lng, lat],
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