import React, { useState, useRef, useEffect, useMemo } from 'react';
import mapboxgl from 'mapbox-gl';
import { getTreesForMap } from '../utils/data';
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';
import mapmarkericon from '../assets/map-marker-icon.png';

import { client } from '../client'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const TreeMap = () => {

  const [trees, setTrees] = useState(null);
  const [popUpInfo, setPopUpInfo] = useState(null);
  const [viewport, setViewport] = useState(null);
  const [treesAll, setTreesAll] = useState(null);

  const address = JSON.parse(localStorage.getItem('location'));

  useEffect(() => {
    client.fetch(getTreesForMap)
      .then((trees) => {
        setTrees(trees);
      })
      .catch((err) => {
        console.error(err);
      })
  }, []);

  useEffect(() => {
    setTreesAll(
      () => {
        return trees?.map((tree) => {
          if (!tree?.location?.lat || !tree?.location?.lng) return null;
          return (
            <Marker
              key={tree?._id}
              latitude={tree?.location?.lat}
              longitude={tree?.location?.lng}
              anchor="bottom"
              onClick={
                e => {
                  e.preventDefault();
                  setPopUpInfo(tree);
                }
              }
            >
              <div className="w-[25px] border-2 border-green-500 p-[2px] ">
                <img src={mapmarkericon} alt="map-marker-icon" />
              </div>
            </Marker >
          )
        })
      }
    )
  }, [trees]);

  console.log(treesAll);


  return (
    <div className='map-container'>
      <Map

        initialViewState={{
          latitude: address.lat,
          longitude: address.lng,
          zoom: 10,
          bearing: 0,
          pitch: 0
        }}
        onError={e => console.error(e)}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={mapboxgl.accessToken}
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />
        {treesAll}
      </Map>
    </div>
  )
};

export default TreeMap