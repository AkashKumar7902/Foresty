import React, { useState, useRef, useEffect} from 'react';
import mapboxgl ,{ Marker, Popup }  from 'mapbox-gl';
import { getTreesForMap } from '../utils/data';
import ReactMapGL from 'react-map-gl'
import mapmarkericon from '../assets/map-marker-icon.png';

import {client} from '../client'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const TreeMap = () => {

    const mapContainer = useRef(null);
    const map2 = useRef(null);
    const [lng, setLng] = useState(0); //replace with coordinates of trees
    const [lat, setLat] = useState(0); //replace with coordinates of trees
    const [zoom, setZoom] = useState(15);
    const [trees, setTrees] = useState(null);
    const [selectedTree, setSelectedTree] = useState(null);
    const [viewport, setViewport] = useState(null);
  
    const address = JSON.parse(localStorage.getItem('location'));
  
    // useEffect(() => {
    //   if (map2.current) return; // initialize map only once
    //   map2.current = new mapboxgl.Map({
    //     container: mapContainer.current,
    //     style: 'mapbox://styles/mapbox/streets-v12',
    //     center: [address.long, address.lat],
    //     zoom: zoom,
    //   });
    // });
  // useEffect(() => {
  //   if (map2.current) return 
    
  //     const marker = new mapboxgl.Marker({
  //       color: "#FFFFFF",
  //       draggable: true,
  //     })
  //       .setLngLat([30.5, 50.5])
  //       .addTo(map2);
  //   })

  // useEffect(() => {
  //   if (!map2.current) return; // wait for map to initialize
  //   map2.current.on("move", () => {
  //     setLng(map2.current.getCenter().lng.toFixed(4));
  //     setLat(map2.current.getCenter().lat.toFixed(4));
  //     setZoom(map2.current.getZoom().toFixed(2));
  //   });
  // });

  useEffect(() => {
    client.fetch(getTreesForMap)
      .then((trees) => {
        setTrees(trees);
      })
      .catch((err) => {
        console.error(err);
      })
  }, []);
  
  return (
    <div>
      {/* <div ref={mapContainer} className="map-container" >
        {/* {trees.map((tree) => {
          
        })} */}
        {/* {trees.map((tree) => {
          <Marker
            key={tree?._id}
            latitude={tree?.location.lat}
            longitude={tree?.location.long}
          >
            <button
              className="bg-green-200 rounded-lg text-green-700 p-2"
              onClick={e => {
                e.preventDefault();
                setSelectedTree(tree);
              }}
            >
              <img src={mapmarkericon} alt="map-marker-icon" />
            </button>
           </Marker>
        })}
        {selectedTree && 
          <div> 
            Tree
          </div>
        } */}
      <ReactMapGL 
       {...viewport} 
       mapboxApiAccessToken={mapboxgl.accessToken}
       mapStyle="mapbox://styles/mapbox/streets-v12"
       onError={(err) => console.log(err)}
        onViewportChange={viewport => {
          setViewport(viewport);
       }}
      >
        {/* {trees.map((tree) => {
          console.log(tree);
          <Marker
            key={tree._id}
            latitude={tree.lat}
            longitude={tree.lng}>
              <button className="shadow-xl text-7xl bg-green-900">
              <img src={mapmarkericon} alt="map-marker-icon" />
              here
              </button>
          </Marker>
        })} */}
        </ReactMapGL>
    </div>
  )
};

export default TreeMap