import React from 'react'
import { client } from '../client'
import { useState, useEffect } from 'react'
import logo from '../assets/mapmarker.png'
import { useParams } from 'react-router-dom'
import { getUserInfoProfile } from '../utils/data'
import profileimagehome from '../assets/profileimagehome.svg'

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [res, setRes] = useState(null);
  const [coins, setCoins] = useState(0);
  const [trees, setTrees] = useState(0);
  const [water, setWater] = useState(0);

  useEffect(() => {
    const queryString = getUserInfoProfile(id);
    client.fetch(queryString)
      .then((res) => {
        setUser({
          _id: res[0]._id,
          _createdAt: res[0]._createdAt,
          userName: res[0].userName,
          image: res[0].image,
        });
        setRes(res);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    if (Array.isArray(res)) {
      const temp = res[0];
      setCoins(temp.coinsHave);
      setWater(temp.watered.length);
      setTrees(temp.treesPlanted.length);
    }
  }, [res])

  return (
    <div className='flex flex-col w-full items-center'>
      <div className="h-370 2xl:h-510 relative w-4/5 user-background mb-15 sm:mb-20">
        <img
          className='absolute bottom-[80px] sm:bottom-0 right-1/2 translate-x-[50%] translate-y-[50%] rounded-full w-20 h-20 shadow-xl object-cover'
          src={user?.image}
          alt="user-pic"
        />
      </div>
      <div className="flex justify-between items-center w-4/5 border-2 p-3 rounded-lg drop-shadow-2xl">
        <p className="font-semibold text-md sm:text-xl flex flex-row items-center gap-5">
          <img src={user?.image} alt="" className="rounded-lg w-[25px]" />
          <p> {user?.userName}</p>
        </p>
        <p className='text-gray-600 text-sm'>
          Joined on {user?._createdAt.substr(0, 10)}
        </p>
      </div>
      <div className="flex flex-row w-4/5 mb-[100px] gap-2 border-2 border-gray-200 mt-10 p-2">
        <div className='flex justify-center bg-green-200 items-center border-2 border-gray-200 p-3 w-1/2'>
          <img src={profileimagehome} className="w-1/2" alt="" />
        </div>
        <div className='flex flex-col w-1/2 p-3 border-gray-200 border-2'>
          <div className='flex justify-center items-center flex-row w-full h-1/2 border-b-2 border-gray-200'>
            <div className='w-1/2 h-full border-r-2 border-gray-300 p-2'>
              <div className='text-extrabold flex relative jusitfy-center items-center w-full h-full '>
                <div className='flex justify-center items-center absolute left-0 right-0 bottom-0 top-0 -z-50 profileimagetree' />
                <div className='flex justify-center items-center font-extrabold text-3xl md:text-5xl text-green-900 absolute left-0 right-0 bottom-0 top-0 z-50'>
                  {trees}
                </div>
              </div>
            </div>
            <div className='w-1/2 h-full p-2'>
              <div className='text-extrabold flex relative jusitfy-center items-center w-full h-full '>
                <div className='flex justify-center items-center absolute left-0 right-0 bottom-0 top-0 -z-50 profileimagewater' />
                <div className='flex justify-center items-center font-extrabold text-3xl md:text-5xl text-blue-900 absolute left-0 right-0 bottom-0 top-0 z-50'>
                  {water}
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center flex-row w-full h-1/2'>
            <div className='text-extrabold flex relative jusitfy-center items-center w-full h-full '>
              <div className='flex justify-center items-center absolute left-0 right-0 bottom-0 top-0 -z-50 profileimagecoins' />
              <div className='flex justify-center items-center font-extrabold text-3xl md:text-5xl text-red-900 absolute left-0 right-0 bottom-0 top-0 z-50'>
                {coins}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile