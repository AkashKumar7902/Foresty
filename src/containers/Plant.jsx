import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Button, ListItem, OrderedList } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { RiPlantFill } from 'react-icons/ri'
import formPlant from '../assets/formPlant.svg'
import LoginBtn from "../components/LoginBtn";
import Spinner from '../components/Spinner';
import { client } from '../client'
import {Input} from '@chakra-ui/react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md';
import TreeMap from '../components/TreeMap';

const activeBtnStyles =
  "bg-green-800 text-white font-bold p-2 w-32 outline-none";
const notActiveBtnStyles =
  "bg-green-200 text-black font-bold p-2 w-32 outline-none";


const Plant = () => {
  const [name, setName] = useState(null);
  const [user, setUser] = useState(null);
  const [text, setText] = useState('aqi');
  const [loading, setLoading] = useState(false);
  const [imageAsset, setImageAsset] = useState(null);
  const [wrongImageType, setWrongImageType] = useState(false);
  const [species, setSpecies] = useState(null);

  const uploadImage = (e) => {
    const { type, name } = e.target.files[0];
    console.log(type);
    if (type === 'image/png' || type === 'image/svg' || type === 'image/jpg' || type === 'image/gif') {
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
  
  useEffect(() => {
    localStorage.getItem("user") !== "undefined"
      ? (
        setUser(JSON.parse(localStorage.getItem("user")))
      ) : localStorage.clear();
  }, []);

  useEffect(() => {
    setName(user?.name);
  }, [user])
    
  
    return (
      <div className="flex flex-col justify-center gap-32 pt-20 w-full px-3 sm:px-10 md:px-20">
        <div className="flex flex-col jusitfy-center gap-4 w-full">
          <div className="flex flex-row justify-center">
            <button
              onClick={(e) => {
                setText(e.target.textContent);
              }}
              id="aqi"
              className={`${
                text === "aqi" ? activeBtnStyles : notActiveBtnStyles
              }`}
            >
              aqi
            </button>
            <button
              type="button"
              onClick={(e) => {
                setText(e.target.textContent);
              }}
              id="TreeMap"
              className={`${
                text === "TreeMap" ? activeBtnStyles : notActiveBtnStyles
              }`}
            >
              TreeMap
            </button>
          </div>
          {text === "aqi" ? (
            <iframe
              width="100%"
              height="700px"
              style={{ position: "relative" }}
              src="https://aqicn.org/here/#!gl!28.6542!77.2373"
            />
          ) : (
            <div id="map"></div>
          )}

          {/* mapbox here */}
        </div>
        <div className="flex flex-col items-center gap-10">
          <p className="text-3xl md:text-4xl text-center font-bold border-b-gray-300 w-full border-b-2 pb-6">
            Steps for planting a tree
          </p>
          <div className="text-md sm:text-lg md:text-2xl font-semibold flex flex-col items-center">
            <div className="list">
              <RiPlantFill className="hidden sm:block" />
              <p>
                Step 1: Take a sapling from the nursery or from your home
                garden.
              </p>{" "}
            </div>
            <div className="list">
              <RiPlantFill className="hidden sm:block" />
              <p>
                Step 2: Dig a small hole in the ground and place the sapling in
                it.
              </p>
            </div>
            <div className="list">
              <RiPlantFill className="hidden sm:block" />
              <p>Step 3. Cover the sapling with soil and water it.</p>
            </div>
            <div className="list">
              <RiPlantFill className="hidden sm:block" />
              <p>Step 4. Take a photo of the sapling and upload it below.</p>
            </div>
            <div className="list">
              <RiPlantFill className="hidden sm:block" />
              <p>Step 5. Take care of the sapling.</p>
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
                <label className="flex flex-col gap-3">
                  <p className="font-bold">Enter the species of your tree</p>
                  <Input
                    type="text"
                    onChange={(e) => {
                      setSpecies(e.target.value);
                    }}
                    value={species}
                  />
                </label>
              </div>
              <label className="flex flex-col gap-3 w-full items-center">
                <p className="w-full lg:w-3/5 font-bold">Upload Image of the planted sapling</p>
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
                        onClick={() => setImageAsset(null)}
                      >
                        <MdDelete />
                      </button>
                    </div>
                  )}
                </div>
              </label>
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
    );
};

export default Plant