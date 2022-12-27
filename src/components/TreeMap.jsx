import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(-70.9); //replace with coordinates of trees
const [lat, setLat] = useState(42.35); //replace with coordinates of trees
const [zoom, setZoom] = useState(15);

useEffect(() => {
  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [lng, lat],
    zoom: zoom
  });
});

const TreeMap = () => {
  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  )
}

export default TreeMap   