import { GiPlantWatering } from "react-icons/gi";
import Spinner from '../components/Spinner';
import { client } from '../client'
import React, { useState, useEffect } from 'react'
import { MdDelete } from 'react-icons/md';
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { getTreesForMap } from "../utils/data";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import LoginBtn from '../components/LoginBtn';
import { FaExclamation } from 'react-icons/fa'
import { TiTick } from 'react-icons/ti'
import mapmarkericon from "../assets/map-marker-icon.png";

const MAPBOX_token = process.env.REACT_APP_MAPBOX_TOKEN;

const YlocationBtnStyles =
  "bg-gray-300 cursor:default text-green-500 rounded-lg text-bold p-4";
const NlocationBtnStyles =
  "bg-gray-300 hover:bg-gray-400 text-red-500 rounded-lg text-bold p-4";
const activeBtnStyles =
  "bg-green-800 text-white font-bold p-2 w-32 outline-none";

const Water = () => {

  const [name, setName] = useState(null);
  const [user, setUser] = useState(null);
  const [text, setText] = useState('aqi');
  const [address, setAddress] = useState(
    JSON.parse(localStorage.getItem("location"))
  );
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState(false);
  const [imageAsset, setImageAsset] = useState(null);
  const [wrongImageType, setWrongImageType] = useState(false);
  const [trees, setTrees] = useState(null);
  const [treesAll, setTreesAll] = useState(null);
  const [treeField, setTreeField] = useState(null);
  const [isFilled, setIsFilled] = useState(false);
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    client
      .fetch(getTreesForMap)
      .then((trees) => {
        setTrees(trees);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    setTreesAll(() => {

    });
  }, [trees]);

  useEffect(() => {

  }, [treeField]);

  const getLocationThroughIp = () => {
    const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_IPGEO_TOKEN}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setAddress({ lat: res.latitude, long: res.longitude });
      })
      .catch((err) => console.log(err));
  };

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, altWay);
    } else {
      getLocationThroughIp();
    }
  }

  async function showPosition(position) {
    setAddress({
      lat: position.coords.latitude,
      long: position.coords.longitude,
    });
  }

  function altWay() {
    getLocationThroughIp();
  }

  const uploadImage = (e) => {
    const { type, name } = e.target.files[0];
    if (type === 'image/png' || type === 'image/svg' || type === 'image/jpg' || type === 'image/gif' || type === 'image/jpeg') {
      setWrongImageType(false);
      setLoading(true);
      client.assets
        .upload('image', e.target.files[0], { contentType: type, filename: name })
        .then((document) => {
          setImageAsset(document);
          setLoading(false);
        })
        .catch((error) => {
          console.log("image upload error: ", error);
        })
    } else {
      setWrongImageType(true);
    }
  }

  function submitWaterTree() {
    const date = new Date().toISOString().substr(0, 10);
    if (imageAsset?._id && address) {
      const doc = {
        _type: 'water',
        wateredBy: {
          _type: 'array',
          _ref: user.sub
        },
        wateredAt: {
          _type: 'array',
        },
        TreeWatered: {
          _type: 'reference',
          _ref: trees._id
        }
      };
      client.create(doc)
        .then(() => {
          window.location.reload();
        })
        .catch((err) => console.log(err))
    }
    else {
      setFields(true);
      setTimeout(() => {
        setFields(false);
      }, 5000);
    }
  }

  useEffect(() => {
    localStorage.getItem("user") !== "undefined"
      ? (
        setUser(JSON.parse(localStorage.getItem("user")))
      ) : localStorage.clear();
  }, []);

  useEffect(() => {
    setName(user?.name);
  }, [user])

  console.log(treeField);

  return (
    <div className="flex flex-col px-[20px] md:px-[50px] justify-center">
      <div className="text-center py-20 pt-28 text-5xl font-extrabold font-green text-blue-600">
        Water a plant and help it become a Tree.
      </div>

      {!treeField ? (
        <div className="p-3 text-red-900 text-xl font-semibold text-center">
          * Please select the tree you want to water
        </div>
      ) : (
        <div className="flex gap-2 justify-center items-center p-3 text-xl text-green-900 font-semibold text-center">
          <p>Selected</p> <TiTick />
        </div>
      )}

      <div className="w-full relative h-[50vh] md:h-[80vh]">
        {treeField && (
          <div className="absolute flex flex-col items-center p-1 top-1 right-1 rounded-lg border-2 border-green-300 bg-green-200 z-20 h-[150px] w-[100px] md:h-[200px] md:w-[140px]">
            <img src={mapmarkericon} className="w-[40px] rounded-3xl mt-[12px]" alt="tree-icon" />
            <p className="text-xs md:text-sm mt-[10px] md:mt-[35px]"> {treeField?.plantedDate.substr(0, 10)}</p>
            <p className="text-xs md:text-sm"> {treeField?.species}</p>
            <a href={`/userprofile/${treeField?.plantedby._id}`}>
              <p className="text-xs md:text-sm hover:underline">{treeField?.plantedby.userName}</p>
            </a>
          </div>
        )}
        <Map
          initialViewState={{
            latitude: address.lat,
            longitude: address.long,
            zoom: 10,
            bearing: 0,
            pitch: 0,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken={MAPBOX_token}
        >
          <GeolocateControl position="top-left" />
          <FullscreenControl position="top-left" />
          <NavigationControl position="top-left" />
          <ScaleControl />
          {trees?.map((tree) =>
            tree?.location?.lat && tree?.location?.lng &&
            (
              <Marker
                key={tree?._id}
                latitude={tree?.location?.lat}
                longitude={tree?.location?.lng}
                onClick={(e) => {
                  e.originalEvent.stopPropagation();
                  setTreeField(tree);
                  setIsFilled(true);
                }}
                anchor="bottom"
              >
                <button
                  className={treeField === tree ?
                    "w-[25px] border-2 border-red-500 p-[2px] hover:cursor-pointer z-50"
                    : "w-[25px] border-2 border-green-500 p-[2px] hover:cursor-pointer z-50"
                  }
                >
                  <img src={mapmarkericon} alt="map-marker-icon" />
                </button>
              </Marker>
            )
          )}
        </Map>
      </div>
      <div>
        <div className="flex flex-col items-center gap-10 px-5 py-10">
          <p className="text-3xl md:text-4xl text-center font-bold border-b-gray-300 w-full border-b-2 pb-6">
            Steps for watering a plant
          </p>
          <div className="text-md sm:text-lg md:text-2xl font-semibold flex flex-col items-center">
            <div className="listwater">
              <GiPlantWatering className="hidden sm:block" />
              <p>Step 1: Locate a plant near you in the map.</p>
            </div>
            <div className="listwater">
              <GiPlantWatering className="hidden sm:block" />
              <p>
                Step 2: Click on the leaf icon on the map to navigate to it.
              </p>
            </div>
            <div className="listwater">
              <GiPlantWatering className="hidden sm:block" />
              <p>Step 3. Water the plant and click a picture to verify.</p>
            </div>
            <div className="listwater">
              <GiPlantWatering className="hidden sm:block" />
              <p>Step 4. Upload the picture below and get rewards.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-3xl md:text-4xl text-center font-bold border-b-gray-300 w-full border-b-2 pb-6">
            Please enter the details of your plant
          </p>
          {user ? (
            <div className="flex flex-col items-center gap-10 w-full p-8">
              <div className="flex flex-row items-center justify-center gap-2 w-full md:w-1/2">
                <img
                  src={user?.picture}
                  alt="user-profile"
                  className="w-10 h-10 rounded-full"
                />
                <p className="font-bold">{user.name}</p>
              </div>
              <div className="w-full lg:w-3/5 flex flex-col">
                <label className="flex flex-row items-center gap-3">
                  {!isFilled ? (
                    <>
                      <p className="font-bold">Please Select the tree you want to water from the above map</p>
                      <FaExclamation className="text-red-800" />
                    </>
                  ) : (
                    <>
                      <p className="font-bold">Tree has been Selected</p>
                      <TiTick className="font-green-800" />
                    </>
                  )}
                </label>
              </div>
              <label className="flex flex-col gap-3 w-full items-center">
                <p className="w-full lg:w-3/5 font-bold">
                  Upload Image of the planted sapling
                </p>
                <div className="flex justify-center items-center flex-col border-2 bg-gray-200 w-full lg:w-3/5 border-dashed border-gray-400 p-3 h-380">
                  {loading && <Spinner />}
                  {wrongImageType && <p>Wrong Image Type</p>}
                  {!imageAsset ? (
                    <label>
                      <div className="flex flex-col items-center justify-center h-full">
                        <div className="flex flex-col items-center h-full justify-center">
                          <p className="font-bold text-2xl">
                            <AiOutlineCloudUpload />
                          </p>
                          <p className="text-lg">Click to upload</p>
                        </div>
                        <p className="mt-32 text-gray-400">
                          use high quality JPG, SVG, PNG, GIF less than 20 MB
                        </p>
                      </div>
                      <input
                        type="file"
                        name="upload-image"
                        onChange={uploadImage}
                        className="w-0 h-0"
                      />
                    </label>
                  ) : (
                    <div className="relative h-full">
                      <img
                        src={imageAsset?.url}
                        alt="uploaded-pic"
                        className="h-full w-full"
                      />
                      <button
                        type="button"
                        className="absolute bottom-3 right-3 p-3 rounded-full bg-white text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out"
                        onClick={(e) => { e.preventDefault(); setImageAsset(null) }}
                      >
                        <MdDelete />
                      </button>
                    </div>
                  )}
                </div>
              </label>
              <div class="w-full">
                <button
                  type="button"
                  onClick={() => {
                    getLocation();
                  }}
                  className={address ? YlocationBtnStyles : NlocationBtnStyles}
                >
                  give location access
                </button>
              </div>
              <div>
                <button onClick={submitWaterTree} className={activeBtnStyles}>
                  Submit
                </button>
              </div>
              {fields && (
                <div className="rounded-xl w-full p-3 bg-red-200 font-red-800">
                  Please fill all the fields
                </div>
              )}
            </div>
          ) : (
            <div className="mt-10 flex flex-col gap-4 justify-center items-center h-[50vh] w-full border-dashed border-2 shadow-xl rounded-xl border-gray-400 bg-gray-200">
              <p className="text-lg text-gray-500">
                Login is required to fill the form
              </p>
              <LoginBtn />
            </div>
          )}
        </div>
      </div>
    </div >
  );
};

export default Water